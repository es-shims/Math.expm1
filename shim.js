'use strict';

var define = require('define-properties');
var getPolyfill = require('./polyfill');

module.exports = function shimMathExpm1() {
	var polyfill = getPolyfill();
	define(
		Math,
		{ expm1: polyfill },
		{ expm1: function () { return Math.expm1 !== polyfill; } }
	);
	return polyfill;
};
