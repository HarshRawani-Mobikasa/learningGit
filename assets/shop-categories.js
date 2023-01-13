$('.categories-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    prevArrow: '<button class="prev"><i class="fa-solid fa-chevron-left"></i></button>',
    nextArrow: '<button class="next"> <i class="fa-solid fa-chevron-right"></i></button>',
    slidesToShow: 6,
    slidesToScroll: 4,
    responsive: [
      {
        
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          centerMode:true
        }
      },
      {
        
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          arrows:false,
          infinite: true,
          dots: true,
          centerMode:true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows:false,
          slidesToScroll: 1,
          centerMode:true,
        }
      }
     
    ]
  });
