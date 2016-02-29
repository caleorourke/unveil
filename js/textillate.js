/*
 * textillate.js
 *
 * Updated 2015.11.04
 * Code and documentation licensed under the MIT license
 *
 */

var Main = Main || {};

function HeadlineHandler() {

  self      = this,
  container = jQuery('.hero-container'),
  clone     = container.clone( false );

  this.init = function () {
    var textillate_options = {
      loop:           false,
      minDisplayTime: 0,
      initialDelay:   0,
      autoStart:      false,
      inEffects:      ['fadeIn'],
      outEffects:     ['fadeOutDown'],
      in: {
        effect:       'fadeIn',
        delayScale:   1.5,
        delay:        12,
        sync:         false,
        shuffle:      true,
        reverse:      false
      },
      out: {
        effect:       'fadeOutDown',
        delayScale:   1.5,
        delay:        8,
        sync:         false,
        shuffle:      true,
        reverse:      false
      }
    };

    var slides  = container.find('.slide');
    var max_s_h = 0;

    slides.each(function () {
      jQuery(this).css({ height: 'auto' });
      var s_h = jQuery(this).outerHeight();
      max_s_h = (s_h > max_s_h) ? s_h : max_s_h;
    });

    slides.each(function () {
      jQuery(this).css({ height: max_s_h + 'px', display: 'none' });
      jQuery(this).children('.hero-title, .hero-tagline').textillate(textillate_options);
    });

    container.flexslider({
      selector:       '.flexslider > .slide',
      animation:      'fade',
      controlNav:     false,
      directionNav:   false,
      animationLoop:  true,
      slideshow:      false,
      slideshowSpeed: 6000,
      direction:      'horizontal',
      itemMargin:     0,
      move:           1,
      minItems:       1,
      maxItems:       1,

      before: function (slider) {
        var $currentSlide = slider.slides.eq(slider.currentSlide);
        $currentSlide.children('.hero-title').first().textillate('out');
        $currentSlide.children('.hero-tagline').first().textillate('out');
      },

      after: function (slider) {
        var $prevSlide    = slider.slides.eq(slider.currentSlide - 1);
        var $currentSlide = slider.slides.eq(slider.currentSlide);
        setTimeout(
          function () {
            $prevSlide.find('span[class^="char"]').removeClass('animated').css({ visibility:'hidden' });
          }, 1000
          );
        $currentSlide.children('.hero-title').first().textillate('start');
        $currentSlide.children('.hero-tagline').first().textillate('start');
      },

      start: function (slider) {
        var $currentSlide = slider.slides.eq(slider.currentSlide);
        $currentSlide.children('.hero-title').first().textillate('start');
        $currentSlide.children('.hero-tagline').first().textillate('start');
      }
    });
  };

  this.update = function () {
    container.replaceWith(clone);
    container = clone;
    clone     = container.clone( false );
    this.init();
  };
  this.init();
}

(function () {
  $window   = $(window),
  $document = $(document),
  $body     = $('body');

  var resizeHandler = function () {
    if (Main.headlineHandler && typeof(Main.headlineHandler.update) == 'function') {
      Main.headlineHandler.update();
    }
  };

  $window.debounceEvent('resize', resizeHandler, 120);

  $window.load(function () {
    if ($('.site').length) {
      Main.headlineHandler = new HeadlineHandler();
    }
  });
})();