(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var UNDEFIND = 'undefined';

  nx.defaults = function(inValue, inDefault) {
    return typeof inValue !== UNDEFIND ? inValue : inDefault;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.defaults;
  }
})();
