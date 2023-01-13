$('.newProduct-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    prevArrow: '<button class="prev"><i class="fa-solid fa-chevron-left"></i></button>',
    nextArrow: '<button class="next"> <i class="fa-solid fa-chevron-right"></i></button>',
    slidesToShow: 5,
    slidesToScroll: 3,
       responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          arrows:false,
          dots: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          arrows:false,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          centerMode:true,
          arrows:false,
          dots:true,
        }
      }   
    ]
  });


if ($(window).width() <= 768) {

 $('.newProducts-button').slick({
    dots: false,
    infinite: true,
    speed: 300,
    arrows:false,
    slidesToShow: 2,
    slidesToScroll: 2,
    centerMode:true,
  });

  
}