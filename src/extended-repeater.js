const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 *options is an object of options, that contains properties:
repeatTimes sets the number of repetitions of the str;
separator is a string separating repetitions of the str;
addition is an additional string that will be added to each repetition of the str;
additionRepeatTimes sets the number of repetitions of the addition;
*additionSeparator is a string separating repetitions of the addition.
*/
function repeater(str, options) {
    
  function additionStr(addition = options.addition, repTimes = options.additionRepeatTimes, separator = options.additionSeparator) {
    if (options.hasOwnProperty('addition')) {
      addition = String(addition);

      if (repTimes) {
        let tempArr = [];

        for (let i = 0; i < repTimes; i++) {
          tempArr.push(addition);
        }

        if (separator) {
          addition = tempArr.join(`${separator}`);
        } else {
          addition = tempArr.join(`|`);
        }
      }

      return addition;
    }
    return '';
  }


  function string(string = str, repTimes = options.repeatTimes, separator = options.separator) {
      string = String(string) + additionStr();

      if (repTimes) {
        let tempArr = [];

        for (let i = 0; i < repTimes; i++) {
          tempArr.push(string);
        }

        if (options.hasOwnProperty('separator')) {
          string = tempArr.join(`${separator}`);
        } else {
          string = tempArr.join(`+`);
        }
      }

      return string;
  }

  return string();
}

 console.log( repeater('STRING', { repeatTimes: 3, separator: '**', 
 addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' }));

// str => addition chain + adding => repeatTimes (pushing into an array) => separator (join method)
// addition => additionRepeatTimes (pushing into an array) => additionSeparator (join method)
module.exports = {
  repeater
};