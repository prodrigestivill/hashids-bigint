'use strict';

const Hashids = require('hashids');
const bigInt = require('big-integer');

module.exports = class HashidsBI extends Hashids {

	encodeBI(id) {

		if (!/^[0-9]+$/.test(id)) {
			return '';
		}

		const bi = bigInt(id, 10);
		return this.encodeHex(bi.toString(16));

	}

	decodeBI(id) {

		let ret = [];

		const hex = this.decodeHex(id);
		if (typeof hex === 'string' && hex.length) {
			const bi = bigInt(hex, 16);
			ret = bi.toString(10);
		}

		return ret;

	}

}
