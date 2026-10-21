import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import test from 'node:test';
import { createRequire } from 'node:module';
import ts from 'typescript';
const nodeRequire = createRequire(import.meta.url);
function load(file) {
  const exports = {};
  vm.runInNewContext(
    ts.transpileModule(fs.readFileSync(file, 'utf8'), {
      compilerOptions: {
        module: ts.ModuleKind.CommonJS,
        target: ts.ScriptTarget.ES2022,
      },
    }).outputText,
    {
      exports,
      process,
      setTimeout,
      clearTimeout,
      require(name) {
        return name.startsWith('.')
          ? load(path.resolve(path.dirname(file), name) + '.ts')
          : nodeRequire(name);
      },
    },
    { filename: file },
  );
  return exports;
}
const { sendSmtpEnquiry } = load(path.resolve('src/lib/smtp-delivery.ts'));
const env = {
  SMTP_HOST: 'smtppro.zoho.com',
  SMTP_USER: 'contact@mettglobal.com',
  SMTP_PASSWORD: 'synthetic-test-secret',
};
const payload = {
  name: 'QA',
  email: 'visitor@example.com',
  message: 'Test only',
  phone: '+442079460018',
  request_id: '12345678-1234-4234-8234-123456789abc',
  _subject: 'New Mett Global website enquiry',
};

test('SMTP requires explicit complete configuration before opening a connection', async () => {
  for (const config of [
    {},
    { ...env, SMTP_PASSWORD: '' },
    { ...env, SMTP_PORT: '25' },
    { ...env, SMTP_USER: 'invalid' },
  ]) {
    let opened = false;
    const result = await sendSmtpEnquiry(payload, config, () => {
      opened = true;
    });
    assert.equal(result.outcome, 'rejected');
    assert.equal(opened, false);
  }
});
test('SMTP acceptance follows acknowledged send, with fixed recipient and authenticated sender', async () => {
  let closed = 0;
  const result = await sendSmtpEnquiry(payload, env, options => {
    assert.equal(options.secure, true);
    assert.equal(options.port, 465);
    assert.equal(options.requireTLS, true);
    assert.equal(options.tls.rejectUnauthorized, true);
    assert.equal(options.auth.pass, 'synthetic-test-secret');
    assert.equal(options.disableFileAccess, true);
    assert.equal(options.disableUrlAccess, true);
    return {
      close() {
        closed++;
      },
      async sendMail(mail) {
        assert.equal(mail.to, 'contact@mettglobal.com');
        assert.equal(mail.from.address, env.SMTP_USER);
        assert.equal(mail.replyTo, payload.email);
        assert.equal(
          mail.headers['X-Mett-Submission-Reference'],
          payload.request_id,
        );
        assert.ok(mail.text.includes('Project brief: Test only'));
        assert.ok(!mail.text.includes('synthetic-test-secret'));
        return { accepted: ['contact@mettglobal.com'] };
      },
    };
  });
  assert.equal(result.outcome, 'accepted');
  assert.equal(closed, 1);
});
test('port 587 requires STARTTLS', async () => {
  await sendSmtpEnquiry(payload, { ...env, SMTP_PORT: '587' }, options => {
    assert.equal(options.secure, false);
    assert.equal(options.requireTLS, true);
    return {
      close() {},
      async sendMail() {
        return { accepted: ['contact@mettglobal.com'] };
      },
    };
  });
});
test('missing recipient acceptance is never reported as success', async () => {
  const result = await sendSmtpEnquiry(payload, env, () => ({
    close() {},
    async sendMail() {
      return { accepted: [] };
    },
  }));
  assert.equal(result.outcome, 'unconfirmed');
});
for (const [failure, expected] of [
  [{ code: 'EAUTH' }, 'rejected'],
  [{ responseCode: 550 }, 'rejected'],
  [{ code: 'ESOCKET', command: 'DATA' }, 'unconfirmed'],
  [{ code: 'ETIMEDOUT' }, 'unconfirmed'],
])
  test(`SMTP failure ${JSON.stringify(failure)} produces ${expected} without a retry`, async () => {
    let attempts = 0;
    const result = await sendSmtpEnquiry(payload, env, () => ({
      close() {},
      async sendMail() {
        attempts++;
        throw failure;
      },
    }));
    assert.equal(result.outcome, expected);
    assert.equal(attempts, 1);
  });
