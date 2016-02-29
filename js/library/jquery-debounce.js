/*
 * jQuery Debounce
 *
 * @author Paul Irish
 * @see http://www.paulirish.com/2009/throttled-smartresize-jquery-event-handler
 */

(function () {
  var debounce = function (func, threshold, execAsap) {
    var timeout;

    return function () {
      var obj  = this,
          args = arguments;

      function delayed() {
        if (!execAsap) {
          func.apply(obj, args);
        }
        timeout = null;
      }
      if (timeout) {
        clearTimeout(timeout);
      }
      else if (execAsap) {
        func.apply(obj, args);
      }

      timeout = setTimeout(delayed, threshold || 100);
    };
  };

  $.fn.debounceEvent = function (event, func, threshold, execAsap) {
    return func ? this.bind(event, debounce(func, threshold, execAsap)) : this.trigger(event);
  };
})(jQuery);
