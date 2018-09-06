$(document).ready(function () {
    $("#wallet-slider").touchSlider({
        // infinite scroll
        roll: true,
        // flexible layout
        flexible: true,
        // auto resize
        resize: false,
        // custom controls
        btn_prev: null,
        btn_next: null,
        paging: null,
        // animation speed
        speed: 75,
        // how many items in one slide
        view: 1,
        range: 0.15,
        page: 1,
        sidePage: false,
        // enable CSS3 transitions
        transition: true,
        // callback
        initComplete: null,
        // counter
        counter: null,
        propagation: false,
        autoplay: {
            enable: false,
            pauseHover: true,
            addHoverTarget: "",
            interval: 3500
        },
        // whether to use mouse
        useMouse: true
    });
});