 $('.bestseller-slider').slick({
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
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          arrows:false,
          centerMode:true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll:2,
          arrows:false,         

        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode:true,
          arrows:false

        }
      }
     
    ]
  });