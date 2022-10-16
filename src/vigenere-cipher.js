const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */

const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
                  "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"
                 ];

class VigenereCipheringMachine {
  constructor(normal = true) {
    this.reverse = !normal;
  }

  encrypt(message, key) {
   if(!message || !key ) throw new Error('Incorrect arguments!');

    let messageValid = message.toUpperCase().replace(/\s/g, ''),
    keyValid = key.toUpperCase().replace(/\s/g, '');

    const res = [];

    let messageCodes = [],
    keyCodes = [];

    createCodes(messageValid,messageCodes) 
    createCodes(keyValid, keyCodes)

    while (keyCodes.length < messageCodes.length) {
       keyCodes = [...keyCodes, ...keyCodes];
    }

    for (let i = 0, e = 0; i < message.length; i++, e++) {
      if (!alphabet.includes(message.toUpperCase()[i])) {
        res.push(message[i])        
        e--;
        continue;
      } 
      
      let encryptedStrSymbol = messageCodes[e] + keyCodes[e];
      res.push(alphabet[encryptedStrSymbol]);
    }

    function createCodes(string, arr) {
    string.split('').forEach((char) => {
        if (alphabet.includes(char)) {
          let charCode = char.charCodeAt(0) - 65;
          arr.push(charCode)
          return arr;
        }
    });
    }
   
    return this.reverse === true ? res.reverse().join('') :  res.join('');
  }

  decrypt(message, key) {

   if(!message || !key ) throw new Error('Incorrect arguments!');

    let messageValid = message.toUpperCase().replace(/\s/g, ''),
    keyValid = key.toUpperCase().replace(/\s/g, '');

    const res = [];

    let messageCodes = [],
    keyCodes = [];

    createCodes(messageValid,messageCodes) 
    createCodes(keyValid, keyCodes)

    while (keyCodes.length < messageCodes.length) {
       keyCodes = [...keyCodes, ...keyCodes];
    }

    for (let i = 0, e = 0; i < message.length; i++, e++) {
      if (!alphabet.includes(message.toUpperCase()[i])) {
        res.push(message[i])        
        e--;
        continue;
      } 
      
      let encryptedStrSymbol = (messageCodes[e] - keyCodes[e] + 26) % 26;
      res.push(alphabet[encryptedStrSymbol]);
    }

    function createCodes(string, arr) {
    string.split('').forEach((char) => {
        if (alphabet.includes(char)) {
          let charCode = char.charCodeAt(0) - 65;
          arr.push(charCode)
          return arr;
        }
    });
    }
   
    return this.reverse === true ? res.reverse().join('') :  res.join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};