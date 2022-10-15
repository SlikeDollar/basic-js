const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  //console.debug(arguments);
  if (!Array.isArray(arr)) {
    throw new Error(
      "'arr' parameter must be an instance of the Array!"
    );
  }
  let filter = [...arr];
  filter.forEach((item, n, array) => {
    if (item == '--discard-next') {
      array[n + 1] = 'discard'
      array[n] = 'discard'
    } else if (item == '--discard-prev') {
      array[n - 1] = 'discard'
      array[n] = 'discard'
    } else if (item == '--double-next') {
      array[n] = array[n + 1];
    } else if (item == '--double-prev') {
      array[n] = array[n - 1];
    }
    
    if (item == '--double-prev' && n == 0 || item == '--discard-prev' && n == 0 || 
    item == '--double-next' && n == array.length - 1 
    || item == '--discard-next' && n == array.length - 1 )
    {
      array[n] = 'discard';
    }
  });  
  return filter.filter(item => item !== 'discard');
}


//transform([1, 2, 3, '--double-next', 4, 5]);
//transform([1, 2, 3, '--discard-prev', 4, 5]); 
module.exports = {
  transform
};