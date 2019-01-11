var nx = require('next-js-core2');
require('../src/next-defaults');

test('nx.defaults', function() {
  function abc(vaule) {
    return nx.defaults(vaule, -1);
  }

  expect(abc()).toBe(-1);
  expect(abc(0)).toBe(0);
  expect(abc(null)).toBe(null);
  expect(abc('')).toBe('');
  expect(abc(1)).toBe(1);
  expect(abc(true)).toBe(true);
  expect(abc(false)).toBe(false);
  expect(abc(2)).toBe(2);
  expect(abc(NaN)).toBe(NaN);
});
