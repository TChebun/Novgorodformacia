
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        items: 3, // Number of visible cards
        margin: 21, // Space between cards
        loop: true, // Infinite loop
        nav: true, // Show navigation arrows
        navText: [
            $('.pharmacy-section__control--prev'),
            $('.pharmacy-section__control--next')
        ]
    });
});