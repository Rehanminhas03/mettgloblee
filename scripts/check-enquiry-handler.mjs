import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import test from 'node:test';
import ts from 'typescript';
import { createRequire } from 'node:module';

const nodeRequire = createRequire(import.meta.url);

// Exercise the production handler with an injected provider; no external emails.
const cache = new Map();
function load(file) {
  file = path.resolve(file);
  if (cache.has(file)) return cache.get(file);
  const exports = {};
  cache.set(file, exports);
  const code = ts.transpileModule(fs.readFileSync(file, 'utf8'), {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2022,
    },
  }).outputText;
  vm.runInNewContext(
    code,
    {
      exports,
      Request,
      Response,
      URL,
      AbortSignal,
      TextDecoder,
      Date,
      require(name) {
        if (!name.startsWith('@/') && !name.startsWith('.'))
          return nodeRequire(name);
        return load(
          (name.startsWith('@/')
            ? path.resolve('src', name.slice(2))
            : path.resolve(path.dirname(file), name)) + '.ts',
        );
      },
    },
    { filename: file },
  );
  return exports;
}
const { handleEnquiry } = load('src/lib/enquiry-handler.ts');
const id = '12345678-1234-4234-8234-123456789abc';
const enquiry = {
  request_id: id,
  name: 'Website QA',
  email: 'qa@example.invalid',
  message: 'Simulated regression test only.',
  _subject: 'New Mett Global website enquiry',
};
function request(data = enquiry, headers = {}) {
  return new Request('https://www.mettglobal.com/api/enquiries', {
    method: 'POST',
    headers: {
      Origin: 'https://www.mettglobal.com',
      'Content-Type': 'application/json',
      ...headers,
    },
    body: JSON.stringify(data),
  });
}
const accepted = async () => Response.json({ success: 'true' });
for (const success of ['true', true])
  test(`accepts explicit provider success ${typeof success}`, async () => {
    const r = await handleEnquiry(request(), async () =>
      Response.json({ success }),
    );
    assert.equal(r.status, 200);
    assert.equal((await r.json()).outcome, 'accepted');
  });
for (const success of ['false', false])
  test(`rejects explicit provider refusal ${typeof success}`, async () => {
    const r = await handleEnquiry(request(), async () =>
      Response.json({ success }),
    );
    assert.equal(r.status, 422);
    assert.equal((await r.json()).outcome, 'rejected');
  });
for (const [name, forward] of [
  ['provider failure', async () => Response.json({}, { status: 503 })],
  [
    'unreadable response',
    async () => new Response('<html>Gateway error</html>'),
  ],
  ['missing confirmation', async () => Response.json({ message: 'unknown' })],
  [
    'lost response after acceptance',
    async () => {
      throw new DOMException('Simulated timeout', 'AbortError');
    },
  ],
])
  test(`${name} is unconfirmed, not falsely unsent`, async () => {
    const r = await handleEnquiry(request(), forward);
    const data = await r.json();
    assert.equal(data.outcome, 'unconfirmed');
    assert.equal(data.requestId, id);
  });
test('untrusted origin never reaches provider', async () => {
  let sent = false;
  const r = await handleEnquiry(
    request(enquiry, { Origin: 'https://other.example' }),
    async () => {
      sent = true;
      return accepted();
    },
  );
  assert.equal(r.status, 403);
  assert.equal(sent, false);
});
test('invalid email never reaches provider', async () => {
  const r = await handleEnquiry(
    request({ ...enquiry, email: 'invalid' }),
    () => {
      throw Error('must not send');
    },
  );
  assert.equal(r.status, 400);
});
test('body limit is enforced even without Content-Length', async () => {
  const r = await handleEnquiry(
    request({ ...enquiry, message: 'x'.repeat(20000) }),
    accepted,
  );
  assert.equal(r.status, 413);
});
test('oversized fields are rejected', async () => {
  const r = await handleEnquiry(
    request({ ...enquiry, name: 'x'.repeat(101) }),
    accepted,
  );
  assert.equal(r.status, 400);
});
test('visitor cannot change recipient, CC, webhook or subject', async () => {
  await handleEnquiry(
    request({
      ...enquiry,
      _subject: 'Hijacked',
      _cc: 'other@example.invalid',
      _webhook: 'https://other.example',
      _url: 'https://other.example',
    }),
    async (url, options) => {
      assert.equal(url, 'https://formsubmit.co/ajax/contact@mettglobal.com');
      const body = JSON.parse(options.body);
      assert.equal(body._cc, undefined);
      assert.equal(body._webhook, undefined);
      assert.equal(body._subject, 'New Mett Global website enquiry');
      assert.equal(body.request_id, id);
      assert.equal(options.headers.Origin, 'https://www.mettglobal.com');
      assert.ok(options.signal);
      return accepted();
    },
  );
});
test('honeypot does not send email', async () => {
  let sent = false;
  await handleEnquiry(request({ ...enquiry, _honey: 'spam' }), async () => {
    sent = true;
    return accepted();
  });
  assert.equal(sent, false);
});
const date = new Date(Date.now() + 86400000 * 2);
const meeting = {
  ...enquiry,
  phone: '+442079460018',
  _subject: 'New Mett Global meeting request',
  preferred_date: date.toISOString().slice(0, 10),
  preferred_time: '10:00',
  preferred_start: date.toISOString(),
  meeting_type: 'Online meeting',
  duration: '30 minutes',
  topic: 'General / multi-service discussion',
  visitor_timezone: 'Asia/Karachi',
};
test('valid meeting retains slot and reference', async () => {
  const r = await handleEnquiry(request(meeting), async (_url, options) => {
    const data = JSON.parse(options.body);
    assert.equal(data.preferred_date, meeting.preferred_date);
    assert.equal(data.preferred_time, '10:00');
    return accepted();
  });
  assert.equal((await r.json()).outcome, 'accepted');
});
test('expired meeting cannot be sent', async () => {
  const r = await handleEnquiry(
    request({ ...meeting, preferred_start: new Date(0).toISOString() }),
    accepted,
  );
  assert.equal(r.status, 400);
});

test('local/proxy hostname normalization still accepts the matching public Host', async () => {
  const r = await handleEnquiry(
    new Request('http://localhost:3000/api/enquiries', {
      method: 'POST',
      headers: {
        Host: '127.0.0.1:3000',
        Origin: 'http://127.0.0.1:3000',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(enquiry),
    }),
    accepted,
  );
  assert.equal((await r.json()).outcome, 'accepted');
});

test('all 24 hourly starts including midnight and late evening reach the provider', async () => {
  for (let hour = 0; hour < 24; hour++) {
    const r = await handleEnquiry(
      request({
        ...meeting,
        preferred_time: String(hour).padStart(2, '0') + ':00',
      }),
      async (_url, options) => {
        const payload = JSON.parse(options.body);
        assert.equal(
          payload.preferred_time,
          String(hour).padStart(2, '0') + ':00',
        );
        assert.match(payload.office_time, /Asia\/Karachi/);
        return accepted();
      },
    );
    assert.equal((await r.json()).outcome, 'accepted');
  }
});
test('an invalid 24:00 start is rejected', async () => {
  const r = await handleEnquiry(
    request({ ...meeting, preferred_time: '24:00' }),
    accepted,
  );
  assert.equal(r.status, 400);
});

for (const email of [
  '',
  'missing-at.example.com',
  'a@@example.com',
  'a@example',
  'a..b@example.com',
  '.a@example.com',
  'a.@example.com',
  'a@example..com',
  'a@-example.com',
  'a@example-.com',
  'a@exam_ple.com',
  'a @example.com',
  'a\r\n@example.com',
  'x'.repeat(65) + '@example.com',
]) {
  test(`malformed email is rejected before delivery: ${JSON.stringify(email)}`, async () => {
    let forwarded = false;
    const r = await handleEnquiry(request({ ...enquiry, email }), async () => {
      forwarded = true;
      return accepted();
    });
    const body = await r.json();
    assert.equal(r.status, 400);
    assert.equal(forwarded, false);
    assert.ok(body.fieldErrors.email);
  });
}

for (const email of [
  'sales+website@sub.example.co.uk',
  "o'connor@example.com",
  'First.Last@Example.COM',
]) {
  test(`legitimate email format is accepted: ${email}`, async () => {
    const r = await handleEnquiry(request({ ...enquiry, email }), accepted);
    assert.equal((await r.json()).outcome, 'accepted');
  });
}

for (const phone of [
  '123',
  'abcdefgh',
  '+999123456789',
  '++12133734253',
  '+1 123 456 7890',
  '0313426228',
  '7135550123',
  'Call +12133734253',
  '+12133734253\r\n',
]) {
  test(`invalid phone is rejected before delivery: ${JSON.stringify(phone)}`, async () => {
    let forwarded = false;
    const r = await handleEnquiry(request({ ...enquiry, phone }), async () => {
      forwarded = true;
      return accepted();
    });
    const body = await r.json();
    assert.equal(r.status, 400);
    assert.equal(forwarded, false);
    assert.ok(body.fieldErrors.phone);
  });
}

for (const [phone, expected] of [
  ['03134262282', '+923134262282'],
  ['+92 313 426 2282', '+923134262282'],
  ['923134262282', '+923134262282'],
  ['+1 (213) 373-4253', '+12133734253'],
  ['0044 20 7946 0018', '+442079460018'],
  ['+971 50 123 4567', '+971501234567'],
  ['+61 412 345 678', '+61412345678'],
  ['+91 98765 43210', '+919876543210'],
]) {
  test(`valid phone retains its country: ${phone}`, async () => {
    const r = await handleEnquiry(
      request({ ...enquiry, phone }),
      async (_url, options) => {
        assert.equal(JSON.parse(options.body).phone, expected);
        return accepted();
      },
    );
    assert.equal((await r.json()).outcome, 'accepted');
  });
}

test('enquiry without a phone field may omit phone', async () => {
  for (const phone of [undefined, '', '   ']) {
    const r = await handleEnquiry(request({ ...enquiry, phone }), accepted);
    assert.equal((await r.json()).outcome, 'accepted');
  }
});

test('meeting requires a phone before forwarding', async () => {
  for (const phone of [undefined, '', '   ']) {
    let forwarded = false;
    const response = await handleEnquiry(
      request({ ...meeting, phone }),
      async () => {
        forwarded = true;
        return accepted();
      },
    );
    assert.equal(response.status, 400);
    assert.equal(
      (await response.json()).fieldErrors.phone,
      'Enter your phone number.',
    );
    assert.equal(forwarded, false);
  }
});
