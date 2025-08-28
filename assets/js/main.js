$(function(){
    "use strict";

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

    // border color
    $("[data-border-color]").each(function () {
        $(this).css("border-color", $(this).attr("data-border-color"))
    })

    // video popup
    $('.popup-video').magnificPopup({
        type: 'iframe'
        // other options
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
          slidesPerView: 2,
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
    

})(jQuery);