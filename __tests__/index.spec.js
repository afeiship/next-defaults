require('../src');

describe('nx.defaults', () => {
  test('1.null/undefined should return default value', function() {
    expect(nx.defaults(null, 'default')).toBe('default');
    expect(nx.defaults(undefined, 'default')).toBe('default');
  });

  test('2.string/nubmer/boolean should return self', function() {
    expect(nx.defaults('a', 'default')).toBe('a');
    expect(nx.defaults('', 'default')).toBe('');
    expect(nx.defaults(1, 'default')).toBe(1);
    expect(nx.defaults(0, 'default')).toBe(0);
    expect(nx.defaults(+0, 'default')).toBe(+0);
    expect(nx.defaults(-0, 'default')).toBe(-0);
    expect(nx.defaults(true, 'default')).toBe(true);
    expect(nx.defaults(false, 'default')).toBe(false);
  });

  test('3. pure array', () => {
    const a1 = [1, 2, 3];
    const a2 = nx.defaults(a1, [4, 5, 6]);
    expect(a1).toEqual([1, 2, 3]);
    expect(a2).toEqual([1, 2, 3]);
  });

  test('4. object should only return the properties that are not exist', () => {
    const obj1 = { name: 124, age: null, city: null };
    const res_obj1 = nx.defaults(obj1, { name: 'default', age: 20, city: 'beijing' });
    const res_obj2 = nx.defaults(obj1, { name: 'default', age: 0, city: '' });
    const res_obj3 = nx.defaults(obj1, { city: '' });
    expect(res_obj1).toEqual({ name: 124, age: 20, city: 'beijing' });
    expect(res_obj2).toEqual({ name: 124, age: 0, city: '' });

    // only remain city property
    expect(res_obj3).toEqual({ city: '' });
  });
});
