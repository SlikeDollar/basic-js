const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a str, return its encoding version.
 *
 * @param {str} str
 * @return {str}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
    let x = 1;    
    let res = '';
    for(let i=0; i < str.length; i++){
        if(str[i] === str[i+1]){
            x += 1;
        } else {
            res += x+str[i];
            x = 1;
        }
    }
    return res.replace(/1/g, '');
}

module.exports = {
  encodeLine
};
