jQuery(function () {

    function drop_down() {
        $('._drop_down_title').click(function () {
            $('._drop_down_title').not(this).parent().removeClass('_active');
            $('._drop_down_title').not(this).siblings().slideUp();
            $(this).siblings().slideToggle();
            $(this).parent().toggleClass('_active');
        });
        $('._drop_item').click(function () {
            $(this).parent().slideUp();
            $(this).parent().parent().removeClass('_active');
            $(this).parent().siblings().children('p').text($(this).text());
        });
    }
    function slider() {

        $('.main_slider_body').slick({
            infinite: false,
            rows: 0,
            speed: 300,
            easing: 'ease',
            waitForAnimate: false,
            touchMove: true,
            touchTreshhold: 50,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            appendDots: $('.slider_controls'),
        });

        $('.main_img_slider').slick({
            infinite: false,
            rows: 0,
            speed: 300,
            easing: 'ease',
            waitForAnimate: false,
            touchMove: true,
            touchTreshhold: 50,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
        });

        $('.slider_hits_body').slick({
            infinite: false,
            rows: 0,
            speed: 300,
            easing: 'ease',
            waitForAnimate: false,
            touchMove: true,
            touchTreshhold: 50,
            slidesToShow: 4,
            slidesToScroll: 1,
            nextArrow: $('.slider_hits_arrows>.arrow_next'),
            prevArrow: $('.slider_hits_arrows>.arrow_prev'),
            responsive: [

                {
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 600,
                    settings: {
                        arrows: false,
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 350,
                    settings: {
                        arrows: false,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
            ]
        });
        $('.brands_body').slick({
            infinite: false,
            rows: 0,
            speed: 300,
            easing: 'ease',
            waitForAnimate: false,
            touchMove: true,
            touchTreshhold: 50,
            slidesToShow: 5,
            slidesToScroll: 1,
            nextArrow: $('.brands_arrows>.arrow_next'),
            prevArrow: $('.brands_arrows>.arrow_prev'),
            responsive: [

                {
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 350,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
            ]
        });
        // $('.js-other_color_2').slick({
        //     dots: false,
        //     infinite: false,
        //     slidesToScroll: 1,
        //     slidesToShow: 3,
        //     waitForAnimate: false,
        //     speed: 300,
        //     easing: 'ease',
        //     arrows: false,
        //     prevArrow: false,
        // });
        $('.img_item').click(function () {
            $('.main_img_slider').slick('slickGoTo', parseInt($(this).index()));
        })
        $('.main_img_slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
            $('.img_item').removeClass('_active');
            $('.img_item').eq(currentSlide).addClass('_active');
        });


    }
    function burger() {
        $('.burger').click(function () {
            $('.black_href').toggleClass('_active');
            $('.menu').toggleClass('_active');
            $('body').toggleClass('_lock');
        })
        $('.menu_cross').click(function () {
            $('.black_href').removeClass('_active');
            $('.menu').removeClass('_active');
            $('body').removeClass('_lock');
        })
        $('.black_href').click(function () {
            $('.black_href').removeClass('_active');
            $('.menu').removeClass('_active');
            $('body').removeClass('_lock');
        })
    }
    function accordion() {
        $('.show_more').click(function () {
            if ($(this).children('.text').text() === "Свернуть") {
                $(this).children('.text').text("Подробнее")
            } else {
                $(this).children('.text').text("Свернуть")
            }
            $(this).parent().siblings('.acc_body').slideToggle();
            $(this).parent().parent().toggleClass('_active');
        })
    }
    function dynamic_adaptive() {
        if ($('html').width() < 1000) {
            $('.search_form').prependTo($('.menu'));
        }
        $(window).resize(function () {
            if ($('html').width() < 1000) {
                $('.search_form').prependTo($('.menu'));
            } else {
                $('.search_form').insertAfter($('.big_logo'));
            }
        })
    }
    dynamic_adaptive();
    accordion();
    burger();
    drop_down();
    slider();
});