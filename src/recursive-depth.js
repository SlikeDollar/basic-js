const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr, depth = 1) {
      let result = depth;
      for (let el of arr) {
          if (Array.isArray(el)) {
            const current = this.calculateDepth(el, depth + 1);
            result = current > result ? current : result;
            console.log(`res - ${result}; curr - ${current}`);
          }
      }
      return result;
  };
}

module.exports = {
  DepthCalculator
};