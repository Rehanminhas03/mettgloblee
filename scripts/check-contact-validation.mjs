import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import test from 'node:test';
import { createRequire } from 'node:module';
import ts from 'typescript';
const exports = {};
vm.runInNewContext(
  ts.transpileModule(fs.readFileSync('src/lib/contact-validation.ts', 'utf8'), {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2022,
    },
  }).outputText,
  { exports, require: createRequire(import.meta.url) },
);
const { emailError, checkedPhone } = exports;
for (const email of [
  '',
  'a@example',
  'a@@example.com',
  'a..b@example.com',
  '.a@example.com',
  'a.@example.com',
  'a@-example.com',
  'a@exam_ple.com',
  'a@example..com',
  'a b@example.com',
])
  test('rejects malformed email ' + JSON.stringify(email), () =>
    assert.ok(emailError(email)),
  );
for (const email of [
  'sales+website@sub.example.co.uk',
  "o'connor@example.com",
  'First.Last@Example.COM',
])
  test('accepts valid email ' + email, () =>
    assert.equal(emailError(email), ''),
  );
for (const phone of [
  '123',
  'abcdefgh',
  '+999123456789',
  '++12133734253',
  '+1 123 456 7890',
  '0313426228',
  '7135550123',
])
  test('rejects invalid phone ' + phone, () =>
    assert.ok(checkedPhone(phone).error),
  );
for (const [phone, expected] of [
  ['03134262282', '+923134262282'],
  ['+44 20 7946 0018', '+442079460018'],
  ['+1 (213) 373-4253', '+12133734253'],
  ['+971 50 123 4567', '+971501234567'],
  ['+61 412 345 678', '+61412345678'],
  ['+91 98765 43210', '+919876543210'],
])
  test('accepts international phone ' + phone, () => {
    assert.equal(checkedPhone(phone).error, '');
    assert.equal(checkedPhone(phone).number, expected);
  });
