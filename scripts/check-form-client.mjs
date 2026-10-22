import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import test from 'node:test';
import ts from 'typescript';
const id = '12345678-1234-4234-8234-123456789abc';
function client(
  fetch,
  online = true,
  fields = { name: 'QA', email: 'qa@example.invalid' },
) {
  const exports = {};
  const timers = new Map();
  let next = 0;
  const code = ts.transpileModule(
    fs.readFileSync('src/lib/submitForm.ts', 'utf8'),
    {
      compilerOptions: {
        module: ts.ModuleKind.CommonJS,
        target: ts.ScriptTarget.ES2022,
      },
    },
  ).outputText;
  vm.runInNewContext(code, {
    exports,
    require: () => ({
      FORM_AJAX_ENDPOINT: 'https://formsubmit.co/ajax/contact@mettglobal.com',
    }),
    fetch,
    AbortController,
    navigator: { onLine: online },
    FormData: class {
      forEach(fn) {
        for (const [key, value] of Object.entries(fields)) fn(value, key);
      }
    },
    window: {
      setTimeout(fn) {
        timers.set(++next, fn);
        return next;
      },
      clearTimeout(key) {
        timers.delete(key);
      },
    },
  });
  return {
    submit: () => exports.submitForm({}, id),
    expire: () => [...timers.values()].forEach(fn => fn()),
    timers,
  };
}
function response(success = 'true', status = 200) {
  return Response.json({ success }, { status });
}
test('offline is definitely unsent and does not call fetch', async () => {
  let sent = false;
  const c = client(async () => {
    sent = true;
  }, false);
  assert.equal((await c.submit()).outcome, 'offline');
  assert.equal(sent, false);
});
test('sends directly to original provider and retains the request reference', async () => {
  const c = client(async (url, options) => {
    assert.equal(url, 'https://formsubmit.co/ajax/contact@mettglobal.com');
    assert.equal(JSON.parse(options.body).request_id, id);
    return response();
  });
  assert.equal((await c.submit()).outcome, 'accepted');
  assert.equal(c.timers.size, 0);
});
for (const [name, fetch] of [
  [
    'missing confirmation',
    async () => Response.json({ message: 'No confirmation' }),
  ],
  ['unsuccessful HTTP response', async () => response('true', 503)],
  [
    'lost response',
    async () => {
      throw Error('network lost after forwarding');
    },
  ],
  ['invalid JSON', async () => new Response('<html>Gateway error</html>')],
])
  test(`${name} never becomes false success or definite failure`, async () => {
    const c = client(fetch);
    assert.equal((await c.submit()).outcome, 'unconfirmed');
    assert.equal(c.timers.size, 0);
  });
test('explicit rejection is distinct from uncertain delivery', async () => {
  const c = client(async () => response('false'));
  assert.equal((await c.submit()).outcome, 'rejected');
});
test('meeting email preserves Chicago selection and corresponding Pakistan time', async () => {
  const c = client(
    async (_url, options) => {
      const data = JSON.parse(options.body);
      assert.equal(data.preferred_start, '2026-10-23T00:00:00.000Z');
      assert.equal(data.visitor_timezone, 'America/Chicago');
      assert.match(data.office_time, /23 October 2026/);
      assert.match(data.office_time, /05:00 \(Asia\/Karachi\)$/);
      return response(true);
    },
    true,
    {
      name: 'QA',
      email: 'qa@example.invalid',
      _subject: 'New Mett Global meeting request',
      preferred_start: '2026-10-23T00:00:00.000Z',
      visitor_timezone: 'America/Chicago',
    },
  );
  assert.equal((await c.submit()).outcome, 'accepted');
});

test('a lost response never triggers a duplicate send', async () => {
  let attempts = 0;
  const c = client(async () => {
    attempts++;
    throw Error('lost response');
  });
  assert.equal((await c.submit()).outcome, 'unconfirmed');
  assert.equal(attempts, 1);
});
test('deadline settles even when fetch ignores AbortSignal completely', async () => {
  let signal;
  const c = client(async (_url, options) => {
    signal = options.signal;
    return new Promise(() => {});
  });
  const pending = c.submit();
  c.expire();
  assert.equal((await pending).outcome, 'unconfirmed');
  assert.equal(signal.aborted, true);
  assert.equal(c.timers.size, 0);
});
test('deadline also bounds a response body that never completes', async () => {
  const c = client(async () => ({
    ok: true,
    json: () => new Promise(() => {}),
  }));
  const pending = c.submit();
  c.expire();
  assert.equal((await pending).outcome, 'unconfirmed');
});
