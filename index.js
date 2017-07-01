const isCurrencyCode = require('is-currency-code');
const isCurrencySymbol = require('is-currency-symbol');

const stripAmount = input => {
  const decimalPattern = /\d+(\.\d{1,2})?/;
  const whitespacePattern = / /g;
  return input
    .replace(decimalPattern, '')
    .replace(whitespacePattern, '');
};

const validateSymbolAndCode = input => {
  const stripped = stripAmount(input);

  // Last three must be currency code
  const code = stripped.substr(-3);

  const symbol = stripped.substr(0, stripped.length - 3);

  return isCurrencyCode(code) && isCurrencySymbol(symbol);
};

module.exports = input => {
  if (typeof input === 'string') {
    return (
      isCurrencyCode(input) ||
      isCurrencySymbol(input) ||
      validateSymbolAndCode(input)
    );
  }
  return false;
};
