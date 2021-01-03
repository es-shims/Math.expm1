'use strict';

var expm1 = require('../');
var test = require('tape');
var runTests = require('./tests');

test('as a function', function (t) {
	runTests(expm1, t);

	t.end();
});
