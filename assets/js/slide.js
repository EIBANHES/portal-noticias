// SLIDE
(function ($) {
  "use strict";

  $(".slider-videos").slick({
    slidesToShow: 4,
    infinite: true,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 2000,
    dots: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      }
    ],
  });

  $(".slider-colunistas").slick({
    slidesToShow: 4,
    infinite: true,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 2000,
    dots: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      }
    ],
  });

  $(".slider-anuncios").slick({
    slidesToShow: 4,
    infinite: true,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 2000,
    dots: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      }
    ],
  });

  $(".slider-deputados").slick({
    slidesToShow: 4,
    infinite: true,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 2000,
    dots: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      }
    ],
  });
})(jQuery);

document.addEventListener("DOMContentLoaded", (e) => {

});