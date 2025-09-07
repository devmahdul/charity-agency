$(function(){
    "use strict";

    // offcanvas
    $(".mh-header-toggle").on('click',function(){
      $(".mh-offcanvas-area").addClass("mh-offcanvas-open");
      $(".mh-offcanvas-overlay").addClass("mh-offcanvas-overlay-open");
    });

    $(".mh-offcanvas-close-button,.mh-offcanvas-overlay").on('click',function(){
      $(".mh-offcanvas-area").removeClass("mh-offcanvas-open");
      $(".mh-offcanvas-overlay").removeClass("mh-offcanvas-overlay-open");
    });


    // color
    $("[data-color]").each(function () {
        $(this).css("color", $(this).attr("data-color"))
    })

    // bg color
    $("[data-bg-color]").each(function () {
        $(this).css("background-color", $(this).attr("data-bg-color"))
    })

    // bg img
    $("[data-bg-img]").each(function () {
        $(this).css("background-image", "url(" + $(this).attr("data-bg-img") + ")")
    })
    // bg circle bar
    $("[data-circle-bar]").each(function () {
        $(this).css("background-image",$(this).attr("data-circle-bar"))
    })

    // border color
    $("[data-border-color]").each(function () {
        $(this).css("border-color", $(this).attr("data-border-color"))
    })

    // video popup
    $('.popup-video').magnificPopup({
        type: 'iframe'
        // other options
    });

    // image popup
    $('.popup-image').magnificPopup({
        type: 'image'
        // other options
    });

    // menu toggle
    $(".mh-lang-toggle").on('click',function(){
        $(".mh-header-full-lang-submenu").slideToggle();
    });

    // causes slider
    var swiper = new Swiper(".mhcauses-slider-active", {
      slidesPerView: 3,
      spaceBetween: 30,
      navigation: {
        prevEl: ".mh-arrow-prev",
        nextEl: ".mh-arrow-next",
      },
      breakpoints: {
        991: {
          slidesPerView: 3,
        },
        576: {
          slidesPerView: 2,
        },
        300: {
          slidesPerView: 1,
        },
    },
    });

    // causes slider
    var swiper = new Swiper(".mhcharity-slider-active", {
      slidesPerView: 3,
      spaceBetween: 24,
      navigation: {
        prevEl: ".mh-arrow-prev",
        nextEl: ".mh-arrow-next",
      },
    });

    // causes slider
    var swiper = new Swiper(".mh-text-slider-active", {
      slidesPerView: "auto",
      spaceBetween: 40,
      freemode: true,
      centeredSlides: true,
      loop: true,
      speed: 4000,
      allowTouchMove: false,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      }
    });

    // blog slider
    var swiper = new Swiper(".mhlpblog-slider-active", {
      slidesPerView: 3,
      spaceBetween: 24,
    });

    // hero slider
    var swiper = new Swiper(".mh-slider-active", {
      slidesPerView: 1,
      navigation: {
          prevEl: ".mh-slider-arrow-prev",
          nextEl: ".mh-slider-arrow-next",
      },
    });

    // brand slider
    var swiper = new Swiper(".mhbrand-slider-active", {
      slidesPerView: 6,
      spaceBetween: 24,
    });
    

})(jQuery);