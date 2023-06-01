// СЛАЙДЕР

$(function () {

    // SHOW БЛОК ABOUT US НА СЛАЙДЕРАХ
    $('.about-btn').click(function () {
        $(this).closest('.slider').addClass('show');
    });
    $('.dot-beck').click(function () {
        $(this).closest('.slider').removeClass('show')
    });

    // БУРГЕР
    $('.burger').click(function () {
        if ($('.nav-block').hasClass('active')) {
            $('.nav-block nav').fadeOut(0)
            $('.nav-block').removeClass('active')
        } else {
            $('.nav-block nav').fadeIn(0)
            $('.nav-block').addClass('active')
        }

    });



    // VALUES TOGGLE
    $('.toggle-bar .item-title').click(function () {
        let item = $(this).closest('.item');
        let status = $(this).closest('.toggle-bar')
        if (item.hasClass('active')) {
            item.removeClass('active');
            status.removeClass('toggle')
        } else {
            $('.toggle-bar .item').removeClass('active');
            status.addClass('toggle')
            item.addClass('active');
        }

    })
    $('.toggle-bar2 .item-title').click(function () {
        let item = $(this).closest('.item');
        let status = $(this).closest('.toggle-bar2')
        if (item.hasClass('active')) {
            item.removeClass('active');
            status.removeClass('toggle')
        } else {
            $('.toggle-bar2 .item').removeClass('active');
            status.addClass('toggle')
            item.addClass('active');
        }

    })

 
});

// ПЕРЕЛЮЧАТЕЛЬ СТРАНИЦ

$(function () {
    Swiper({
        type: 'default',
        pageName: 'slider',
        selectBack: false,
        loop: true,
        dev: false
    });
    Swiper2({
        type: 'bouncer',
        pageName: 'pagers',
        selectBack: false,
        loop: false,
        dev: false
    });
});

$(function () {
    Swiper3({
        type: 'bouncer',
        pageName: 'develepment',
        selectBack: false,
        loop: false,
        dev: false
    });
});
$(function () {
    Swiper4({
        type: 'bouncer',
        pageName: 'digital',
        selectBack: false,
        loop: false,
        dev: false
    });
});
$(function () {
    Swiper5({
        type: 'bouncer',
        pageName: 'values',
        selectBack: false,
        loop: false,
        dev: false
    });
});
$(function () {
    Swiper6({
        type: 'bouncer',
        pageName: 'pushki',
        selectBack: false,
        loop: false,
        dev: false
    });
});