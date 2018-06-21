// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a.page-scroll').click(function () {
    $('.navbar-toggle:visible').click();
});


/* Andere manier voor bovenstaande */
/*
$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
});
*/

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top',
    offset: 80
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$('a.page-scroll').bind('click', function (event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: ($($anchor.attr('href')).offset().top - 50)
    }, 1250, 'easeInOutExpo');
    event.preventDefault();
});

// Offset for Main Navigation
$('#mainNav').affix({
    offset: {
        top: 100
    }
});



// owl carousel
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots: false,
        navText: [],
        navElement: 'div role="button" ',
        autoplay: true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })
});

/*

//initialize swiper after jquery loaded
var mySwiper = new Swiper ('.swiper-container', {
  // Optional parameters
  pagination: '.swiper-pagination',
  paginationClickable: true,
  loop: false,
  nextButton: '.swiper-button-next',
  prevButton: '.swiper-button-prev',
  autoplay: 5000,
  speed: 500,
  autoplayDisableOnInteraction: true,      
  spaceBetween: 5,
    slidesPerView: 'auto',
    centeredSlides: true
}) ;
*/

