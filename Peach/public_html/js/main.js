$(document).ready(function () {
//    $(".wallet-container").flickity({
//        freeScroll: true,
//        contain: false,
//        dragThreshold: 10,
//        freeScrollFriction: 0.10,
//        wrapAround: true,
//        prevNextButtons: false,
//        pageDots: false
//    });
    $("#owl-demo").owlCarousel({
        loop: true,
        center: true,
        items: 1.5,
        dots: false,
        nav: false,
        dragEndSpeed: 500,
        margin: 30
    });
});