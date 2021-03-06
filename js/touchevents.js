/*
 * touchevents.js
 *
 * Updated 2016.09.17
 * Code and documentation licensed under the MIT license
 *
 */

(function () {
  'use strict';

  $window   = $(window);
  $document = $(document);
  $body     = $('body');

  $document.ready(function () {

   /**
    * Touch class
    * -------------------------------------------------------
    */

    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      $('body').addClass('touch');
    }

   /**
    * Progress
    * -------------------------------------------------------
    */

    $('.progress-item').on('click touchend', function () {
      var $this  = $(this);
      var $popup = $this.children('.progress-popover').first();

      $this.toggleClass('open').siblings().removeClass('open');
      $popup.css({
        'margin-left': (-1 * (Math.round($popup.outerWidth() / 2))) + 'px'
      });
    }).hover(function () {
      var $this  = $(this);
      var $popup = $this.children('.progress-popover').first();

      $this.addClass('hover').siblings().removeClass('hover');
      $popup.css({
        'margin-left': (-1 * (Math.round($popup.outerWidth() / 2))) + 'px'
      });
    }, function () {
      $(this).removeClass('hover');
    });

    $body.on('click touchstart', function (e) {
      var $t = $(e.target);

      if (!$t.is('.progress-item') && !$t.closest('.progress-item').length) {
        $('.progress-item').removeClass('open').removeClass('hover');
      }
    });

   /**
    * Gallery
    * -------------------------------------------------------
    */

    $('.gallery-item').on('touchend', function (e) {
      var $this = $(this);

      if (!$this.hasClass('active')) {
        e.preventDefault();
        $this.siblings().removeClass('active');
        $this.addClass('active');
      }
    });

   /**
    * Nav
    * -------------------------------------------------------
    */

    $body.on('click touchstart', function (e) {
      var $t = $(e.target);

      if ($('#nav-btn').is(':visible') && $('#nav').is(':visible')) {
        if (!$t.is('#nav-btn') && !$t.closest('#nav-btn').length && !$t.closest('#nav').length) {
          e.preventDefault();
          $('#nav-btn').click();
        }
      }
    });
  });
})(jQuery);