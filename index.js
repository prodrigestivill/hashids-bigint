'use strict';

const Hashids = require('hashids');
const bigInt = require('big-integer');

export default class BIHashids extends Hashids {

  encodeBI(id) {
    // bigInt throws an exception on wrong input
    const bi = bigInt(id, 10);
    return this.encodeHex(bi.toString(16));
  }

  decodeBI(oid) {
    if (typeof oid === 'string' && oid.length) {
      const hex = this.decodeHex(oid);
      if (typeof hex === 'string' && hex.length) {
        const bi = bigInt(hex, 16);
        return bi.toString(10);
      }
    }
    throw new Error('Invalid id provided');
  }

}
