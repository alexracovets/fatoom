function Swiper({
    ...settings
}) {
    let {
        type,
        pageName,
        selectBack,
        loop,
        dev
    } = settings;

    let atributeType = type;
    let atributeName = pageName;
    let atributeSelect = selectBack;
    let atributeLoop = loop;
    let atributeDev = dev;

    let swiperNameEval = `localStorage.${atributeName}`;
    let swiperName = String(eval(swiperNameEval));

    if (swiperName == 'undefined') {
        let currentIndexPageEval = '1';
        localStorage.setItem(`${atributeName}`, `${currentIndexPageEval}`);
    }

    let currentIndexPage = eval(`localStorage.${atributeName}`);

    function renderData() {

        $(`[${atributeName}]`).fadeOut();
        $(`[${atributeName}]`).attr('style', 'display: none')
        $(`[${atributeName}='${currentIndexPage}']`).fadeIn();

        if (atributeType == 'bouncer') {
            let toNext = $(`[${atributeName}='${currentIndexPage}'] [next]`).attr('toNext');
            let toBack = $(`[${atributeName}='${currentIndexPage}'] [next]`).attr('toBack');

            if (toNext != undefined) {
                localStorage.toNext = toNext;
            }
            if (toBack != undefined) {
                localStorage.toBack = toBack;
            }

        }

        // Проверка: нужен ли рендерить кнопку back
        if ($(`[${atributeName}='${currentIndexPage}'] [next]`).attr('isSelect') != undefined && atributeSelect) {

            $(`[${atributeName}='${currentIndexPage}']`).append('<div back class="select-back"><img src="img/next.svg" alt="back"></div>')

        }
        // Проверка: на вывод реолоудера
        if (atributeDev == true) {
            if ($('body .reloader').length < 1) {
                $('body').append('<div class="reloader"><img src="img/reloader.svg" alt="back"></div>')
            }

        }

        // ПЕРВЫЙ СЛАЙД
        if (`${currentIndexPage}` == '1') {
            $('.section-top').addClass('slide-active')
        } else {
            $('.section-top').removeClass('slide-active')
        }
        // ПОСЛЕДНИЙ СЛАЙД

        if (`${currentIndexPage}` == $('[slider]').length) {
            $('.section-top').addClass('last-slide')
        } else {
            $('.section-top').removeClass('last-slide')
        }

 // ВЕШАЕМ НОРМЕР СЛАЙДА НА СТАРНИЦУ
 let currentSlide = localStorage.slider
 for (i = 0; i <= $('[slider]').length; i++) {
     $('.page_one').removeClass(`slide-${i}`)
 }
 $('.page_one').addClass(`slide-${currentSlide}`)
    }

    // Нажатие next
    $("body").on('click', "[next]", function () {

        let nextIndexPage = ''
        if (atributeType == 'default') {
            nextIndexPage = Number(currentIndexPage) + 1;
        } else if (atributeType == 'bouncer') {
            nextIndexPage = localStorage.toNext;
        }

        if (nextIndexPage <= $(`[${atributeName}]`).length) {
            currentIndexPage = nextIndexPage
        } else if (atributeLoop) {
            currentIndexPage = nextIndexPage - $(`[${atributeName}]`).length;
        } else {
            currentIndexPage = currentIndexPage
        }
        let nextPageEval = `localStorage.${atributeName}='${currentIndexPage}'`
        eval(nextPageEval)


        renderData();
    });

    // Нажатие back
    $("body").on('click', "[back]", function () {

        let beckIndexPage = ''
        if (atributeType == 'default') {
            beckIndexPage = Number(currentIndexPage) - 1;
        } else if (atributeType == 'bouncer') {
            beckIndexPage = localStorage.toBack;
        }

        if (beckIndexPage > 0) {
            currentIndexPage = beckIndexPage
        } else if (atributeLoop) {
            currentIndexPage = beckIndexPage + $(`[${atributeName}]`).length;
        } else {
            currentIndexPage = currentIndexPage
        }

        let nextPageEval = `localStorage.${atributeName}='${currentIndexPage}'`
        eval(nextPageEval)


        renderData();
    });

    // Нажатие reload
    $("body").on('click', ".reloader", function () {
        localStorage.page = undefined;
        localStorage.toNext = undefined
        localStorage.toBack = undefined
        currentIndexPage = '1';
        renderData();
    });

    // Кнопка "НА СЛАЙДЕР 2"
    $("body").on('click', ".nav-about", function () {
        currentIndexPage = '1';
        localStorage.slider = '1';
        renderData();
    });

    // Кнопка "НА СЛАЙДЕР 1"
    $("body").on('click', ".logo", function () {
        currentIndexPage = '1';
        localStorage.slider = '1'
        renderData();
    });
    renderData()
}

function Swiper2({
    ...settings
}) {
    let {
        type,
        pageName,
        selectBack,
        loop,
        dev
    } = settings;

    let atributeType2 = type;
    let atributeName2 = pageName;
    let atributeSelect2 = selectBack;
    let atributeLoop2 = loop;
    let atributeDev2 = dev;


    let swiperName2Eval2 = `localStorage.${atributeName2}`;
    let swiperName2 = String(eval(swiperName2Eval2));

    if (swiperName2 == 'undefined') {
        let currentIndexPage2Eval = '1';
        localStorage.setItem(`${atributeName2}`, `${currentIndexPage2Eval}`);
    }

    let currentIndexPage2 = eval(`localStorage.${atributeName2}`);

    function renderData2() {

        $(`[${atributeName2}]`).fadeOut();
        $(`[${atributeName2}]`).attr('style', 'display: none')
        $(`[${atributeName2}='${currentIndexPage2}']`).fadeIn();

        if (atributeType2 == 'bouncer') {
            let toNext2 = $(`[${atributeName2}='${currentIndexPage2}'] [next2]`).attr('toNext2');
            let toBack2 = $(`[${atributeName2}='${currentIndexPage2}'] [next2]`).attr('toBack2');

            if (toNext2 != undefined) {
                localStorage.toNext2 = toNext2;
            }
            if (toBack2 != undefined) {
                localStorage.toBack2 = toBack2;
            }

        }

        // Проверка: нужен ли рендерить кнопку back
        if ($(`[${atributeName2}='${currentIndexPage2}'] [next2]`).attr('isSelect') != undefined && atributeSelect2) {

            $(`[${atributeName2}='${currentIndexPage2}']`).append('<div back class="select-back"><img src="img/next2.svg" alt="back"></div>')

        }
        // Проверка: на вывод реолоудера
        if (atributeDev2 == true) {
            if ($('body .reloader').length < 1) {
                $('body').append('<div class="reloader"><img src="img/reloader.svg" alt="back"></div>')
            }

        }
        var currentPage = $('.navigation li')[currentIndexPage2 - 1];
        $('.nav-block').removeClass('active')
        $('.navigation li').removeClass('active')
        $(currentPage).addClass('active')
        
    }

    // Нажатие next2
    $("body").on('click', "[next2]", function () {

        let next2IndexPage = ''
        if (atributeType2 == 'default') {
            next2IndexPage = Number(currentIndexPage2) + 1;
        } else if (atributeType2 == 'bouncer') {
            next2IndexPage = $(this).attr('toNext2');
        }

        if (next2IndexPage <= $(`[${atributeName2}]`).length) {
            currentIndexPage2 = next2IndexPage
        } else if (atributeLoop2) {
            currentIndexPage2 = next2IndexPage - $(`[${atributeName2}]`).length;
        } else {
            currentIndexPage2 = currentIndexPage2
        }
        let next2PageEval = `localStorage.${atributeName2}='${currentIndexPage2}'`
        eval(next2PageEval)


        renderData2();
    });

    // Нажатие back
    $("body").on('click', "[back2]", function () {

        let beckIndexPage2 = ''
        if (atributeType2 == 'default') {
            beckIndexPage2 = Number(currentIndexPage2) - 1;
        } else if (atributeType2 == 'bouncer') {
            beckIndexPage2 = localStorage.toBack2;
        }

        if (beckIndexPage2 > 0) {
            currentIndexPage2 = beckIndexPage2
        } else if (atributeLoop2) {
            currentIndexPage2 = beckIndexPage2 + $(`[${atributeName2}]`).length;
        } else {
            currentIndexPage2 = currentIndexPage2
        }

        let next2PageEval = `localStorage.${atributeName2}='${currentIndexPage2}'`
        eval(next2PageEval)


        renderData2();
    });

    // Нажатие reload
    $("body").on('click', ".reloader", function () {
        localStorage.page = undefined;
        localStorage.toNext2 = undefined
        localStorage.toBack2 = undefined
        currentIndexPage2 = '1';
        renderData2();
    });


    // Кнопка "НА СЛАЙДЕР 2"
    $("body").on('click', ".nav-about", function () {
        currentIndexPage2 = '1';
        localStorage.pagers = '1'
        renderData2();
    });
    // Кнопка "НА СЛАЙДЕР 1"
    $("body").on('click', ".logo", function () {
        currentIndexPage2 = '1';
        localStorage.pagers = '1'
        renderData2();
    });
    renderData2()
}

function Swiper3({
    ...settings
}) {
    let {
        type,
        pageName,
        selectBack,
        loop,
        dev
    } = settings;

    let atributeType3 = type;
    let atributeName3 = pageName;
    let atributeSelect3 = selectBack;
    let atributeLoop3 = loop;
    let atributeDev3 = dev;

    let swiperName3Eval3 = `localStorage.${atributeName3}`;
    let swiperName3 = String(eval(swiperName3Eval3));

    if (swiperName3 == 'undefined') {
        let currentIndexPage3Eval = '1';
        localStorage.setItem(`${atributeName3}`, `${currentIndexPage3Eval}`);
    }

    let currentIndexPage3 = eval(`localStorage.${atributeName3}`);

    function renderData3() {

        $(`[${atributeName3}]`).fadeOut();
        $(`[${atributeName3}]`).attr('style', 'display: none')
        $(`[${atributeName3}='${currentIndexPage3}']`).fadeIn();

        if (atributeType3 == 'bouncer') {
            let toNext3 = $(`[${atributeName3}='${currentIndexPage3}'] [next3]`).attr('toNext3');
            let toBack3 = $(`[${atributeName3}='${currentIndexPage3}'] [next3]`).attr('toBack3');

            if (toNext3 != undefined) {
                localStorage.toNext3 = toNext3;
            }
            if (toBack3 != undefined) {
                localStorage.toBack3 = toBack3;
            }

        }

        // Проверка: нужен ли рендерить кнопку back
        if ($(`[${atributeName3}='${currentIndexPage3}'] [next3]`).attr('isSelect') != undefined && atributeSelect3) {

            $(`[${atributeName3}='${currentIndexPage3}']`).append('<div back class="select-back"><img src="img/next3.svg" alt="back"></div>')

        }
        // Проверка: на вывод реолоудера
        if (atributeDev3 == true) {
            if ($('body .reloader').length < 1) {
                $('body').append('<div class="reloader"><img src="img/reloader.svg" alt="back"></div>')
            }

        }
    }

    // Нажатие next3
    $("body").on('click', "[next3]", function () {

        let next3IndexPage = ''
        if (atributeType3 == 'default') {
            next3IndexPage = Number(currentIndexPage3) + 1;
        } else if (atributeType3 == 'bouncer') {
            next3IndexPage = $(this).attr('toNext3');
        }

        if (next3IndexPage <= $(`[${atributeName3}]`).length) {
            currentIndexPage3 = next3IndexPage
        } else if (atributeLoop3) {
            currentIndexPage3 = next3IndexPage - $(`[${atributeName3}]`).length;
        } else {
            currentIndexPage3 = currentIndexPage3
        }
        let next3PageEval = `localStorage.${atributeName3}='${currentIndexPage3}'`
        eval(next3PageEval)


        renderData3();
    });

    // Нажатие back
    $("body").on('click', "[back3]", function () {

        let beckIndexPage3 = ''
        if (atributeType3 == 'default') {
            beckIndexPage3 = Number(currentIndexPage3) - 1;
        } else if (atributeType3 == 'bouncer') {
            beckIndexPage3 = localStorage.toBack3;
        }

        if (beckIndexPage3 > 0) {
            currentIndexPage3 = beckIndexPage3
        } else if (atributeLoop3) {
            currentIndexPage3 = beckIndexPage3 + $(`[${atributeName3}]`).length;
        } else {
            currentIndexPage3 = currentIndexPage3
        }

        let next3PageEval = `localStorage.${atributeName3}='${currentIndexPage3}'`
        eval(next3PageEval)


        renderData3();
    });

    // Нажатие reload
    $("body").on('click', ".reloader", function () {
        localStorage.page = undefined;
        localStorage.toNext3 = undefined
        localStorage.toBack3 = undefined
        currentIndexPage3 = '1';
        renderData3();
    });


    renderData3()
}