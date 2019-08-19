/*!
 * name: next-defaults
 * url: https://github.com/afeiship/next-defaults
 * version: 1.0.0
 * date: 2019-08-19T07:14:06.984Z
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var UNDEFIND = 'undefined';

  nx.defaults = function(inValue, inDefault) {
    return typeof inValue !== UNDEFIND ? inValue : inDefault;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.defaults;
  }
})();

//# sourceMappingURL=next-defaults.js.map
