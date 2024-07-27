import nx from '@jswork/next';

const defaults = {
  isEmpty: (value) => value == null
};

nx.defaults = function(inSource, inDefaults, inOptions) {
  const options = nx.mix(null, defaults, inOptions);
  // 1. null or undefined
  if (options.isEmpty(inSource)) return inDefaults;
  // 2. string/number/boolean
  if (typeof inSource !== 'object') return inSource;
  // 3. array
  if (Array.isArray(inSource)) {
    return inSource.map((item) => nx.defaults(item, inDefaults, options));
  }
  // 4. object
  return Object.keys(inDefaults).reduce((result, key) => {
    const value = inSource[key];
    result[key] = options.isEmpty(value)
      ? nx.defaults(inDefaults[key], null, options)
      : nx.defaults(value, inDefaults[key], options);
    return result;
  }, {});
};

if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = nx.defaults;
}

export default nx.defaults;
