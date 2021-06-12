$(function () {
    AOS.init({
        disable: function() {
            var maxWidth = 992;
            return window.innerWidth < maxWidth;
        }
    });
    
    $('.owl-carousel').owlCarousel({
        items:4,
        loop: true,
        margin: 20,
        autoWidth:true,
        dots: false
    });
});

