$('.owl-carousel').owlCarousel({
    loop:true,
    margin:24,
    nav:false,
    smartSpeed: 660,
    responsive:{
        0:{
            items:1,
        },

        600:{
            items:3,
            center: true,
        },

        1000:{
            items:2,
            
        }
    }
})

