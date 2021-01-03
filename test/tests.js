'use strict';

var almostEqual = function (actual, expected) {
	var precision = 1e-11;
	return actual - expected < precision && expected - actual < precision;
};

module.exports = function (expm1, t) {
	t.test('should be correct for NaN', function (st) {
		st.equal(expm1(NaN), NaN, 'espm1(NaN)');
		st.end();
	});

	t.test('should be correct for zeroes', function (st) {
		st.equal(expm1(+0), +0, 'expm1(+0)');
		st.equal(expm1(-0), -0, 'expm1(-0)');
		st.end();
	});

	t.test('should be correct for Infinity', function (st) {
		st.equal(expm1(Infinity), Infinity, 'expm1(Infinity)');
		st.equal(expm1(-Infinity), -1, 'expm1(-Infinity)');
		st.end();
	});

	t.test('should be correct for arbitrary numbers', function (st) {
		st.ok(almostEqual(expm1(10), 22025.465794806718), 'expm1(10)');
		st.ok(almostEqual(expm1(-10), -0.9999546000702375), 'expm1(-10)');
		st.ok(almostEqual(expm1(-2e-17), -2e-17), 'expm1(-2e-17)');
		st.end();
	});

	t.test('works with very negative numbers', function (st) {
		st.ok(almostEqual(expm1(-38), -1), 'expm1(-38)');
		st.ok(almostEqual(expm1(-8675309), -1), 'expm1(-8675309)');
		st.ok(almostEqual(expm1(-4815162342), -1), 'expm1(-4815162342)');
		st.end();
	});
};
