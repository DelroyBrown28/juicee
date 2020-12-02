$(document).ready(function () {
    $('.can-carousel').slick({
        nextArrow: $('#next-arrow'),
        prevArrow: $('#previous-arrow'),
        // arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: false,
        speed: 1000,
        dot: false,
        cssEase: 'cubic-bezier(.9,.16,.07,1.06)', 
        infinite: false,
        centerMode: true,
        variableWidth: true,
        focusOnSelect: true,
        adaptiveHeight: true,
        asNavFor: '.flavor-title, .right-info-section',
        responsive: [{
            breakpoint: 1155,
            settings: {
                dots: false,
                // arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]
    });
    $('.flavor-title').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        dots: false,
        asNavFor: '.can-carousel',
        centerMode: true,
        draggable: false,
        variableWidth: true,
        // adaptiveHeight: true,
        focusOnSelect: true,
        arrows: false,
      });
    $('.right-info-section').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        dots: false,
        asNavFor: '.flavor-title',
        centerMode: true,
        draggable: false,
        variableWidth: true,
        adaptiveHeight: true,
        focusOnSelect: true,
        arrows: false,
      });
          
    
   
})