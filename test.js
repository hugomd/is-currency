const test = require('ava');

const isCurrency = require('./index');

test('should succeed with uppercase currency code', t => {
  t.is(isCurrency('usd'), true);
});

test('should succeed with lowercase currency code', t => {
  t.is(isCurrency('aud'), true);
});

test('should fail with invalid currency code', t => {
  t.is(isCurrency('not-a-currency-code'), false);
});

test('should fail with boolean', t => {
  t.is(isCurrency(true), false);
});

test('should fail with object', t => {
  t.is(isCurrency({}), false);
});
