const test = require('ava');

const isCurrency = require('./index');

test('should succeed with uppercase currency code', t => {
  t.is(isCurrency('USD'), true);
});

test('should succeed with lowercase currency code', t => {
  t.is(isCurrency('aud'), true);
});

test('should fail with invalid currency code', t => {
  t.is(isCurrency('not-a-currency-code'), false);
});

test('should succeed with currency symbol', t => {
  t.is(isCurrency('$'), true);
});

test('should succeed with currency amount', t => {
  t.is(isCurrency('$5.00 AUD'), true);
});

test('should succeed with valid lowercase currency code in currency amount', t => {
  t.is(isCurrency('$5.00aud'), true);
});

test('should succeed with valid lowercase currency code in currency amount with space', t => {
  t.is(isCurrency('$5.00 aud'), true);
});

test('should succeed with currency amount with space', t => {
  t.is(isCurrency('$5.00 AUD'), true);
});

test('should fail with invalid currency symbol in currency amount', t => {
  t.is(isCurrency('#5.00AUD'), false);
});

test('should fail with invalid currency code in currency amount', t => {
  t.is(isCurrency('$5.00XXX'), false);
});

test('should fail with invalid currency code and symbol in currency amount', t => {
  t.is(isCurrency('#5.00XXX'), false);
});

test('should fail with boolean', t => {
  t.is(isCurrency(true), false);
});

test('should fail with object', t => {
  t.is(isCurrency({}), false);
});
