# next-defaults
> Set defaults value.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-defaults
```

## usage
```js
import '@jswork/next-defaults';

// primitive value
nx.defaults(currentValue, defaultValue);
nx.defaults(0, -1);           // 0
nx.defaults(undefeind, -1);   //-1

// object
nx.defaults({ name: 'fei' }, { name: 'afei', age: 18 });
// { name: 'fei', age: 18 }
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-defaults/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-defaults
[version-url]: https://npmjs.org/package/@jswork/next-defaults

[license-image]: https://img.shields.io/npm/l/@jswork/next-defaults
[license-url]: https://github.com/afeiship/next-defaults/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-defaults
[size-url]: https://github.com/afeiship/next-defaults/blob/master/dist/next-defaults.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-defaults
[download-url]: https://www.npmjs.com/package/@jswork/next-defaults
