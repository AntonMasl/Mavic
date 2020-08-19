$(function () {
    'use strict';

    $('.products__slider').slick({
        prevArrow: '<button type = "button" class = "slick-prev"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.21839 1L1 9L9.21839 17" stroke="white"/></svg></button>',
        nextArrow: '<button type = "button" class = "slick-next"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.78161 17L9 9L0.78161 1" stroke="white"/></svg></button>',
        touchMove: false,
        draggable: false
    });

    $('.questions__item').on('click', function () {
        let target = $(this);
        let items = $('.questions__item');
        for (let i = 0; i < items.length; i++) {
            if (target[0] != items[i]) {
                $(items[i]).removeClass('active');
            }
        }
        target.toggleClass('active');
        let elem;
        for (let i = 0; i < items.length; i++) {
            if ($(items[i]).hasClass('active')) {
                elem = $(items[i]).find('.questions__content-text');
                $(elem).slideDown()
            } else {
                elem = $(items[i]).find('.questions__content-text');
                $(elem).slideUp()
            }
        }
    });

    let $isAnimatedThird = $('.advantages .is-animated'),
        $isAnimatedFourth = $('.specification .is-animated');
    $('#fullpage').fullpage({
        autoScrolling: true,
        scrollHorizontally: true,
        sectionSelector: '.page-section',
        navigation: true,
        onLeave: function (origin, destination, direction) {
            if (origin.index == 1 && direction == 'down') {
                $isAnimatedThird.addClass('animated fadeIn');
                $isAnimatedThird.eq(0).css('animation-delay', '1s');
                $isAnimatedThird.eq(1).css('animation-delay', '1s');
                $isAnimatedThird.eq(2).css('animation-delay', '2s');
                $isAnimatedThird.eq(3).css('animation-delay', '3s');
                $isAnimatedThird.eq(4).css('animation-delay', '3s');
                $isAnimatedThird.eq(5).css('animation-delay', '4s');
                $isAnimatedThird.eq(6).css('animation-delay', '5s');
                $isAnimatedThird.eq(7).css('animation-delay', '5s');
                $isAnimatedThird.eq(8).css('animation-delay', '6s');
                $isAnimatedThird.eq(9).css('animation-delay', '7s');
                $isAnimatedThird.eq(10).css('animation-delay', '7s');
            }
            if (origin.index == 2 && direction == 'down') {
                $isAnimatedFourth.addClass('animated fadeIn');
                $isAnimatedFourth.eq(0).css('animation-delay', '1s');
                $isAnimatedFourth.eq(1).css('animation-delay', '2s');
                $isAnimatedFourth.eq(2).css('animation-delay', '3s');
                $isAnimatedFourth.eq(3).css('animation-delay', '4s');
            }
        }

    });
    $(".menu__list-link").on("click", function (e) {
        let links = $(".menu__list-link");
        let target = $(this);
        for (let i = 0; i < links.length; i++) {
            if (links[i] == target[0]) {
                e.preventDefault();
                fullpage_api.moveTo(i + 2);
                let instance = fullpage_api
                    .getActiveSection()
                    .item.querySelector(".fp-scrollable");
            }
        }
    });

    $('.logo').on('click', function (e) {
        e.preventDefault();
        fullpage_api.moveTo(1);
        let instance = fullpage_api
            .getActiveSection()
            .item.querySelector(".fp-scrollable");
    });
});