const { notimplementederror } = require('../extensions/index.js');

/**
 * given an array of domains, return the object with the appearances of the dns.
 *
 * @param {array} domains
 * @return {object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * the result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let arr = [],
  arr2 = [];

  domains.forEach(domain => {
    arr.push(domain.split('.'));
  });

  arr.forEach(item => {
  let sum = '';
    item.reverse().forEach((prev) => {
     sum = sum + `.${prev}`;
     arr2.push(sum);
    });
  });

  let temp = {}

  arr2.forEach(i => {
   temp[i] = (temp[i] || 0) + 1 
  });

  return temp;
}

getDNSStats(['code.yandex.ru','music.yandex.ru','yandex.ru']);

module.exports = {
  getDNSStats
};
