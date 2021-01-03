import expm1, * as expm1Module from 'math.expm1';
import test from 'tape';
import runTests from './tests.js';

test('as a function', (t) => {
	runTests(expm1, t);

	t.end();
});

test('named exports', async (t) => {
	t.deepEqual(
		Object.keys(expm1Module).sort(),
		['default', 'shim', 'getPolyfill', 'implementation'].sort(),
		'has expected named exports',
	);

	const { shim, getPolyfill, implementation } = expm1Module;
	t.equal(await import('math.expm1/shim'), shim, 'shim named export matches deep export');
	t.equal(await import('math.expm1/implementation'), implementation, 'implementation named export matches deep export');
	t.equal(await import('math.expm1/polyfill'), getPolyfill, 'getPolyfill named export matches deep export');

	t.end();
});
