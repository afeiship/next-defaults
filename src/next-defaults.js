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
