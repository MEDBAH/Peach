$(document).ready(function () {



    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 10) {
            $("body").addClass("scrolled");
            $(".navigator .page-title span").addClass("scrolled");
            $("body").css("margin-top", "1rem");
            $(".navigator .menu-icon div").css("background-color", "black");
            $("main.home .wallets-container .wallet").css("margin-top", "3rem");
        } else {
            $("body").removeClass("scrolled");
            $(".navigator .page-title span").removeClass("scrolled");
            $("body").css("margin-top", "0");
            $(".navigator .menu-icon div").css("background-color", "white");
            $("main.home .wallets-container .wallet").css("margin-top", "4.5rem");
        }
    });


    $("#owl-demo").owlCarousel({
        loop: true,
        center: true,
        items: 1.5,
        dots: false,
        nav: false,
        dragEndSpeed: 300,
        margin: 20,
        responsive: {
            // breakpoint from 480 up
            480: {
                items: 1.8,
                margin: 20
            },
            // breakpoint from 768 up
            768: {
                items: 1.99,
                margin: 10
            }
        }
    });
});