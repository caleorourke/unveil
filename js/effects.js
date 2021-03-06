/*
 * effects.js
 *
 * Updated 2017.07.06
 * Code and documentation licensed under the MIT license
 *
 */

jQuery(document).ready(function() {
  'use strict';

  // TOGGLE SLIDE
  // =================

  $.fn.slideFadeToggle = function(speed, easing, callback) {
    return this.animate({
      opacity: 'toggle',
      height:  'toggle'
    }, speed, easing, callback);
  };

  // ACCORDION EFFECT
  // =================

  $('.tab-content .tab-collapsed').hide();
  $('.tab-accordion .tab').on('click', function() {
    $(this).find('.tab-content > .tab-collapsed').slideToggle();
  });

  // PROGRESS EFFECT
  // =================

  $('.progress').asPieProgress({
    namespace:  'progress',
    min:        0,
    max:        100,
    goal:       100, // 100%
    size:       80,  // in px
    speed:      40,  // speed of 1/100
    barcolor:   '#1b8ade',
    barsize:    '2',
    trackcolor: '#f7f7f7',
    fillcolor:  'none',
    easing:     'ease'
  });

  $('.progress-item').hover(function() { // initiate progress item
    $(this).children('.progress').asPieProgress('start');
  });

  // QUOTE SLIDE
  // =================

  $('.quote-wrapper').flexslider({
    selector:       '.quote-flexslider > .quote-slide',
    animation:      'slide',
    controlNav:     false,
    directionNav:   true,
    animationLoop:  true,
    slideshow:      false,
    direction:      'horizontal',
    move:           1,
    maxItems:       1
  });

  // SITE LOADING
  // =================

  jQuery(window).load(function() { // makes sure the whole site is loaded
    //jQuery('.site-loading').fadeOut(); // will first fade out the loading animation
    jQuery('.site').delay(350).fadeOut('slow'); // fades out the div that covers the website
    //jQuery('.site').fadeOut('slow'); // fades out the div that covers the website
  });

  // NAVIGATION EFFECTS
  // ==================

  jQuery('.nav-btn').on('click', function() {
    jQuery('.nav-menu').slideFadeToggle();
    return false;
  });

  $('.nav-menu a[href^="#"]').on('click', function() { /*removed: .hero-arrow-down */
    jQuery('.nav-menu').hide();
    var the_id = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(the_id).offset().top - 68
    }, 'slow');
    return false;
  });

  $('.nav-top').on('click', function() {
    jQuery('.nav-menu').hide();
    var the_id = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(the_id).offset().top
    }, 'fast');
    return false;
  });

  $('.nav-menu').onePageNav({
    currentClass:     'active',
    changeHash:       false,
    scrollSpeed:      700,
    scrollThreshold:  0.5,
    filter:           ':not(.contact)',
    easing:           'swing',
    begin:            function() {},
    end:              function() {},
    scrollChange:     function() {}
  });
});