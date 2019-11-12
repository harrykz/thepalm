
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots: false,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

var owl = $('.sliderWrapper');
owl.owlCarousel();
// Go to the next item
$('.nextBtn').click(function() {
    owl.trigger('next.owl.carousel');
    console.log('Hello');
})
// Go to the previous item
$('.previousBtn').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
});

$('.my-carousel').owlCarousel({
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

AOS.init({
    duration: 2000,
});

$('#container').picturehover({
    duration:'slow',
    fontColor:'#fff',
    caption:'alt',
    target:'img',
});

$(function(){
    $('.my-button').pointLight({
    bg_innerColor: "#00FF00",
    bg_outerColor: "transparent",
    border_innerColor: "#00FF00"
    });
});
    