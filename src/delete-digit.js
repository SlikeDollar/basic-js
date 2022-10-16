const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  narr = `${n}`.split('');
  res = [];

  for (let i = 0; i < narr.length; i++) {
    res.push(
      narr.filter((digit, pos, arr) =>  pos != i).join('')
    );
  }

  return (Math.max(...res));
}

deleteDigit(1234);

module.exports = {
  deleteDigit
};
