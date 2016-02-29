/*
 * jQuery Display
 * A simple Media Query check
 *
 * @author Stefan Winkler
 */

;(function (window) {
  var $window = $(window);
  window.displayWidth = function (comparison, value) {
    if (typeof window.matchMedia === 'function' && window.matchMedia !== undefined && window.matchMedia('screen and (max-width: 767px)') !== null) {
      if (jQuery.isNumeric(value)) {
        value = Number(value);
        if (comparison === '>=') {
          comparison = 'min-width';
        } else if (comparison === '<=') {
          comparison = 'max-width';
        } else if (comparison === '>') {
          comparison = 'min-width';
          value++;
        } else if (comparison === '<') {
          comparison = 'max-width';
          value--;
        }
        return window.matchMedia('(' + comparison + ':' + value + 'px)').matches;
      } else {
        return window.matchMedia(value).matches;
      }
    } else {
      if (!jQuery.isNumeric(value)) {
        if (typeof (console) !== 'undefined') {
          console.log('Error: This Browser doesn\'t support media queries.');
        }

        return false;
      }
      if (typeof (window.current_screen_width) === 'undefined') {
        window.current_screen_width = jQuery(window).outerWidth();
      }
      if (comparison === '>=') {
        return window.current_screen_width >= value;
      } else if (comparison === '<=') {
        return window.current_screen_width <= value;
      } else if (comparison === '>') {
        return window.current_screen_width > value;
      } else if (comparison === '<') {
        return window.current_screen_width < value;
      }
    }
  };
})(window);