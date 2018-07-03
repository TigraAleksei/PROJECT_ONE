$('.line-slider-face').slick({
  autoplay: true,
  autoplaySpeed: 4000,
  speed: 3000,
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 1,
        useTransform: true,
        useCSS: 'transform: scale(1.5)'
      }
    }
  ]
});