import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import test from 'node:test';
import ts from 'typescript';
const id = '12345678-1234-4234-8234-123456789abc';
function client(fetch, online = true) {
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
    fetch,
    AbortController,
    navigator: { onLine: online },
    FormData: class {
      forEach(fn) {
        fn('QA', 'name');
        fn('qa@example.invalid', 'email');
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
function response(outcome = 'accepted', requestId = id, status = 200) {
  return Response.json({ outcome, requestId }, { status });
}
test('offline is definitely unsent and does not call fetch', async () => {
  let sent = false;
  const c = client(async () => {
    sent = true;
  }, false);
  assert.equal((await c.submit()).outcome, 'offline');
  assert.equal(sent, false);
});
test('accepts only an explicit success with matching request reference', async () => {
  const c = client(async (url, options) => {
    assert.equal(url, '/api/enquiries');
    assert.equal(JSON.parse(options.body).request_id, id);
    return response();
  });
  assert.equal((await c.submit()).outcome, 'accepted');
  assert.equal(c.timers.size, 0);
});
for (const [name, fetch] of [
  ['wrong reference', async () => response('accepted', 'wrong')],
  ['unsuccessful HTTP response', async () => response('accepted', id, 503)],
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
  const c = client(async () => response('rejected', id, 422));
  assert.equal((await c.submit()).outcome, 'rejected');
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
