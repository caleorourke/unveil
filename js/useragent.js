/*
 * useragent.js
 *
 * Updated 2016.07.06
 * Code and documentation licensed under the MIT license
 *
 */

(function () {
  'use strict';

  $document = $(document);
  $document.ready(function () {
    if (navigator.appVersion.indexOf('Mac') !== -1) {
      $('html').addClass('MacOS');
    } else if (navigator.userAgent.toLowerCase().indexOf('android') > -1) {
      $('html').addClass('Android');
    } else if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
      var msViewportStyle = document.createElement('style');
      msViewportStyle.appendChild(
        document.createTextNode(
          '@-ms-viewport{width:auto!important}'
        )
      );
      document.querySelector('head').appendChild(msViewportStyle);
    }
  });
})(jQuery);

// BROWSER FUNCTION FOR OUTDATED ECMASCRIPT
// ========================================

if(typeof String.prototype.trim !== 'function') {
  String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, '');
  };
}

// FUNCTION FOR OLDER JQUERY VERSIONS
// ==================================

if(typeof(jQuery.isNumeric) !== 'function') {
  jQuery.isNumeric = function(obj) {
    return !isNaN(parseFloat(obj)) && isFinite(obj);
  };
}