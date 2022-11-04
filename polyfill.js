'use strict';

var implementation = require('./implementation');

module.exports = function getPolyfill() {
	var original = Math.expm1;
	if (!original
		// FF 35 on Linux reports 22025.465794806725 for Math.expm1(10)
		|| original(10) !== 22025.465794806718 // eslint-disable-line no-magic-numbers
	) {
		return implementation;
	}

	return original;
};
