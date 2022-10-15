const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  deleteChain() {
    this.currChain.length = 0;
  },
  currChain: [],
  getLength() {
    return this.currChain.length
  },
  addLink(value) {
    this.currChain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (typeof position == 'number') {
      if (position >= 1 && position <= this.getLength()) {
        this.currChain = this.currChain.filter((item, n, arr) => {
          return n + 1 !== position;
        });
        return this;
      }
      this.deleteChain();
      throw new Error("You can't remove incorrect link!");
    }

    this.deleteChain();
    throw new Error("You can't remove incorrect link!");
  },
  reverseChain() {
    this.currChain.reverse();
    return this; 
  },
  finishChain() {
    let concat = this.currChain.join('~~');
    this.deleteChain();
    return concat;
  }
};

module.exports = {
  chainMaker
};
