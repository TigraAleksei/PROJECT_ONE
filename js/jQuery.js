$('#owl-carousel-top').owlCarousel({
    loop:true,
    margin:10,
    autoplay: true,
    autoplaySpeed: 3555,
    stopOnHover: true,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        1024:{
            items:2
        },
        1500:{
            items:3
        }
    }
})

$('#owl-carousel-bottom').owlCarousel({
    loop:true,
    margin:10,
    autoplay: true,
    autoplaySpeed: 4444,
    stopOnHover: true,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})