// Generated by CoffeeScript 1.11.1
(function() {
  var deepClone, window_or_global;

  deepClone = function() {
    return JSON.parse(JSON.stringify(this));
  };

  window_or_global = function() {
    if (typeof window === 'undefined') {
      return global;
    } else {
      return window;
    }
  };

  (function(root, factory) {
    return root.Object.prototype.deepClone = factory;
  })(window_or_global(), deepClone);

}).call(this);
