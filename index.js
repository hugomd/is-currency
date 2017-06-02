const currencyCodes = require('./currency-codes');

module.exports = code => {
  if (typeof code === 'string') {
    return currencyCodes.includes(code.toLowerCase());
  }
  return false;
};
