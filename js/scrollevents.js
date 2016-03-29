/*
 * scrollevents.js
 *
 * Updated 2016.03.21
 * Code and documentation licensed under the MIT license
 *
 */

jQuery(document).ready(function($) {
  var MQL = 1170;

  //primary navigation slide-in effect
  if ($(window).width() > MQL) {
    var headerHeight = $('.nav-header').height();
    $(window).on('scroll', {
      previousTop: 0
    },
    function() {
      var currentTop = $(window).scrollTop();
      // check if user is scrolling up
      if (currentTop < this.previousTop) {
        // if scrolling up...
        if (currentTop > 0 && $('.nav-header').hasClass('is-sticky')) {
          $('.nav-header').addClass('is-visible');
        } else {
          $('.nav-header').removeClass('is-visible is-sticky');
        }
      } else if (currentTop > this.previousTop) {
        // if scrolling down...
        $('.nav-header').removeClass('is-visible');
        if (currentTop > headerHeight && !$('.nav-header').hasClass('is-sticky')) $('.nav-header').addClass('is-sticky');
      }
      this.previousTop = currentTop;
    });
  }
});