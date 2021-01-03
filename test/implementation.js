'use strict';

var test = require('tape');
var functionsHaveNames = require('functions-have-names')();

var implementation = require('../implementation');
var runTests = require('./tests');

test('implementation', function (t) {
	t.equal(implementation.length, 1, 'implementation has a length of 1');

	t.test('Function name', { skip: !functionsHaveNames }, function (st) {
		st.equal(implementation.name, 'expm1', 'implementation has name "expm1"');
		st.end();
	});

	runTests(implementation, t);

	t.end();
});
