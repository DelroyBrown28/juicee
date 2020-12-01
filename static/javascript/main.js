$(document).ready(function () {
    $('.slickMe').slick({
        nextArrow: $('#next-arrow'),
        prevArrow: $('#previous-arrow'),
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        arrows: true,
        cssEase: 'cubic-bezier(.9,.16,.07,1.06)', 
        infinite: false,
        centerMode: true,
        variableWidth: true,
        focusOnSelect: true,
        adaptiveHeight: true,
        responsive: [{
            breakpoint: 1155,
            settings: {
                dots: false,
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]
    });
   
})