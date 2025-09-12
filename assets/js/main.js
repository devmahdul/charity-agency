$(function(){
    "use strict";

    // Mobile Menu Custo

    var mhMenuHTML = $('.mh-mobile-menu-active > ul').clone();
    var mhOffcanvasMenu = $('.mh-offcanvas-menu > nav');

    mhOffcanvasMenu.append(mhMenuHTML);

    if($(mhOffcanvasMenu).find('.sub-menu').length !=0) {
      $(mhOffcanvasMenu).find('.sub-menu').parent().append('<button class="mh-sidemenu-close"><i class="far fa-chevron-right"></i></button>');
    }

    var mhSideMenuToggle = $('button.mh-sidemenu-close');


    // long process

    /* $(mhSideMenuToggle).on('click',function(e) {
      e.preventDefault();
      if (!($(this).parent().hasClass('active'))) {
        $(this).parent().addClass('active');
        $(this).siblings('.sub-menu').slideDown();
      } else {
        $(this).siblings('.sub-menu').slideUp();
        $(this).parent().removeClass('active');
      }
    }) */

    // short process
    $(mhSideMenuToggle).click(function(){
      $(this).siblings('.sub-menu').slideToggle();
      $(this).parent().toggleClass('active');
    })

    

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
      breakpoints: {
        300: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        992: {
            slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        }
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
      breakpoints: {
          300: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
      },
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
      breakpoints: {
        300: {
          slidesPerView: 3,
        },
        500: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 4,
        },
        992: {
          slidesPerView: 6,
        },
      }
    });
    
    // testimonial slider
    var swiper = new Swiper(".mh-testimonial-slider-active", {
      slidesPerView: 1,
      navigation: {
          prevEl: ".mh-test-arrow-prev",
          nextEl: ".mh-test-arrow-next",
      },
    });

    // gallery slider
    var swiper = new Swiper(".mh-gallery-slider-active", {
      slidesPerView: 5,
      spaceBetween: 12,
      breakpoints: {
        300: {
          slidesPerView: 2,
        },
        500: {
          slidesPerView: 4,
        },
        768: {
          slidesPerView: 4,
        },
        768: {
          slidesPerView: 5,
        },
      }
    });
    

})(jQuery);