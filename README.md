# Math.expm1 <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![github actions][actions-image]][actions-url]
[![coverage][codecov-image]][codecov-url]
[![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

An ESnext spec-compliant `Math.expm1` shim/polyfill/replacement that works as far down as ES3.

This package implements the [es-shim API](https://github.com/es-shims/api) interface. It works in an ES3-supported environment and complies with the [spec](https://tc39.es/ecma262/#sec-map-objects).

## Getting started

```sh
npm install --save math.expm1
```

## Usage/Examples

```js
console.log(Math.expm1(-1)); // -0.6321205588285577
console.log(Math.expm1(0)); // 0
console.log(Math.expm1(1)); // 1.718281828459045
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[package-url]: https://npmjs.org/package/math.expm1
[npm-version-svg]: https://versionbadg.es/es-shims/Math.expm1.svg
[deps-svg]: https://david-dm.org/es-shims/Math.expm1.svg
[deps-url]: https://david-dm.org/es-shims/Math.expm1
[dev-deps-svg]: https://david-dm.org/es-shims/Math.expm1/dev-status.svg
[dev-deps-url]: https://david-dm.org/es-shims/Math.expm1#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/math.expm1.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/math.expm1.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/math.expm1.svg
[downloads-url]: https://npm-stat.com/charts.html?package=math.expm1
[codecov-image]: https://codecov.io/gh/es-shims/Math.expm1/branch/main/graphs/badge.svg
[codecov-url]: https://app.codecov.io/gh/es-shims/Math.expm1/
[actions-image]: https://img.shields.io/endpoint?url=https://github-actions-badge-u3jn4tfpocch.runkit.sh/es-shims/Math.expm1
[actions-url]: https://github.com/es-shims/Math.expm1/actions
