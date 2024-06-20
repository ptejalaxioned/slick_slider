$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        arrows: true,
        centerMode: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        adaptiveHeight: true,
        fade: false,
        cssEase: 'linear',
        prevArrow: $('.custom-prev-arrow'),
        nextArrow: $('.custom-next-arrow'),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    vertical:true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 995,
                settings: {
                    dots: true,
                    arrows: true,
                    centerMode: true,
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 776,
                settings: {
                    dots: true,
                    arrows: true,
                    centerMode: true,
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 640,
                settings: {
                    dots: true,
                    arrows: true,
                    centerMode: true,
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    vertical:true,
                    centerMode: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 375,
                settings: {
                    vertical:true,
                    centerMode: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    arrows: false,
                    dots: true
                }
            }
        ]
    });
});
















