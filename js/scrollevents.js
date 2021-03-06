/*
 * scrollevents.js
 *
 * Updated 2016.09.17
 * Code and documentation licensed under the MIT license
 *
 */

jQuery(document).ready(function($) {

  /**
   * Header spacing
   * -------------------------------------------------------
   */

  $('header').sticky({
    topSpacing: 0
  });

  /**
   * Nav slide-in effect
   * -------------------------------------------------------
   */
  var MQL = 1170;


  if ($(window).width() > MQL) {
    var headerHeight = $('.nav-header').height();
    $(window).on('scroll', {
      previousTop: 0
    },
    function() {
      var currentTop = $(window).scrollTop();

      // Check if user is scrolling up
      if (currentTop < this.previousTop) {
        // If scrolling up
        //
        if (currentTop > 0 && $('.nav-header').hasClass('is-sticky')) {
          $('.nav-header').addClass('is-visible');
        } else {
          $('.nav-header').removeClass('is-visible is-sticky');
        }
      } else if (currentTop > this.previousTop) {
        // If scrolling down
        //
        $('.nav-header').addClass('is-visible'); /* previously removeClass */
        if (currentTop > headerHeight && !$('.nav-header').hasClass('is-sticky')) {
          $('.nav-header').addClass('is-sticky');
        }
      }
      this.previousTop = currentTop;
    });
  }
});