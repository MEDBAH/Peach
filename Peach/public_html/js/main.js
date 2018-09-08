$(document).ready(function () {
    $(window).scroll(function () {
        $("body.home:before").css("top", "-70px " + ($(this).scrollTop() / 2) + "px");
    });


    $("#owl-demo").owlCarousel({
        loop: true,
        center: true,
        items: 1.5,
        dots: false,
        nav: false,
        dragEndSpeed: 300,
        margin: 20
    });
});