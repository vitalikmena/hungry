$(document).ready(function(){
    $('.carousel__specialties').slick({
        
        infinite: true,
        speed: 900,
        slidesToShow: 1,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/right.svg"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                dots: true,
                arrows: false
                }
            }

        ]
    });
    
    $('ul.price__tabs').on('click', 'li:not(.price__tab_active)', function() {
        $(this)
          .addClass('price__tab_active').siblings().removeClass('price__tab_active')
          .closest('div.container').find('div.price__content').removeClass('price__content_active').eq($(this).index()).addClass('price__content_active');
      });
  });