$(function () {
    AOS.init({
        disable: function () {
            var maxWidth = 992;
            return window.innerWidth < maxWidth;
        }
    });

    $('.owl-carousel').owlCarousel({
        items: 4,
        loop: true,
        margin: 20,
        autoWidth: true,
        dots: false
    });

    $('.menu-items-scroll').on('click', function (e) {
        e.preventDefault();
        let thisMenu = $(this).attr('href');
        let target = $(thisMenu);
        $('html, body').animate({
            scrollTop: target.offset().top - 250
        }, 1000, 'easeInOutExpo');
    });
});