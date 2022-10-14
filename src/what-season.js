const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }
  
  if (date instanceof Date === false || Object.getOwnPropertyNames(date).length > 0) {
    throw new Error('Invalid date!');
  }
  month = date.getMonth();
  
  if (month == 0 || month == 1 || month == 11 || month == 12) {
    return 'winter'
  } else if (month < 5 && month > 1){
    return 'spring'
  } else if (month < 8 && month > 4) {
    return 'summer'
  } else if (month < 11 && month > 7) {
    return 'autumn'
  }
}
// console.log(getSeason());
  
module.exports = {
  getSeason
};
