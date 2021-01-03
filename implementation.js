'use strict';

var $isFinite = isFinite;
var $Number = Number;
var exp = Math.exp;
var abs = Math.abs;

module.exports = function expm1(value) {
	var x = $Number(value);
	if (x === -Infinity) {
		return -1;
	}
	if (!$isFinite(x) || x === 0) {
		return x;
	}
	// eslint-disable-next-line no-magic-numbers
	if (abs(x) > 0.5) {
		return exp(x) - 1;
	}
	/*
	 * A more precise approximation using Taylor series expansion
	 * from https://github.com/paulmillr/es6-shim/issues/314#issuecomment-70293986
	 */
	var t = x;
	var sum = 0;
	var n = 1;
	while (sum + t !== sum) {
		sum += t;
		n += 1;
		t *= x / n;
	}
	return sum;
};
