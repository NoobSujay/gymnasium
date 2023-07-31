// preloder
var preloder = document.getElementById("loding");

function Loding(){
    preloder.style.display='none';
}
// 


$(".banner-slider").slick({
    arrows:false,
    dots:true,  
})

$('.venobox').venobox({
    titleattr: 'data-title'
});

$(".team-slider").slick({  
})

$(".testimonial-slider").slick({
    arrows:false,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
});

$('.counter').counterUp({
    delay: 10,
    time: 1000
});

$(".partner-slider").slick({
    slidesToShow: 5,
    slidesToScroll: 2,
    prevArrow:'<i class="fas fa-chevron-left prev"></i>',
    nextArrow:'<i class="fas fa-chevron-right next"></i>',
    centerMode: true,
    centerPadding: '0px',
    autoplay: true,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows:false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows:false
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }
    ]
});