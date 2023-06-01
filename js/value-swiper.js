function Swiper5({
    ...settings
}) {
    let {
        type,
        pageName,
        selectBack,
        loop,
        dev
    } = settings;

    let atributeType5 = type;
    let atributeName5 = pageName;
    let atributeSelect5 = selectBack;
    let atributeLoop5 = loop;
    let atributeDev5 = dev;


    let swiperName5Eval5 = `localStorage.${atributeName5}`;
    let swiperName5 = String(eval(swiperName5Eval5));

    if (swiperName5 == 'undefined') {
        let currentIndexPage5Eval = '1';
        localStorage.setItem(`${atributeName5}`, `${currentIndexPage5Eval}`);
    }

    let currentIndexPage5 = eval(`localStorage.${atributeName5}`);

    function renderData5() {

        $(`[${atributeName5}]`).fadeOut();
        $(`[${atributeName5}]`).attr('style', 'display: none')
        $(`[${atributeName5}='${currentIndexPage5}']`).fadeIn();

        if (atributeType5 == 'bouncer') {
            let toNext5 = $(`[${atributeName5}='${currentIndexPage5}'] [next5]`).attr('toNext5');
            let toBack5 = $(`[${atributeName5}='${currentIndexPage5}'] [next5]`).attr('toBack5');

            if (toNext5 != undefined) {
                localStorage.toNext5 = toNext5;
            }
            if (toBack5 != undefined) {
                localStorage.toBack5 = toBack5;
            }

        }

        // Проверка: нужен ли рендерить кнопку back
        if ($(`[${atributeName5}='${currentIndexPage5}'] [next5]`).attr('isSelect') != undefined && atributeSelect5) {

            $(`[${atributeName5}='${currentIndexPage5}']`).append('<div back class="select-back"><img src="img/next5.svg" alt="back"></div>')

        }
        // Проверка: на вывод реолоудера
        if (atributeDev5 == true) {
            if ($('body .reloader').length < 1) {
                $('body').append('<div class="reloader"><img src="img/reloader.svg" alt="back"></div>')
            }

        }

        // Удаляем состояния TOGGLE
        $('.toggle-bar').removeClass('toggle');
        $('.item').removeClass('active');
    }

    // Нажатие next5
    $("body").on('click', "[next5]", function () {

        let next5IndexPage = ''
        if (atributeType5 == 'default') {
            next5IndexPage = Number(currentIndexPage5) + 1;
        } else if (atributeType5 == 'bouncer') {
            next5IndexPage = $(this).attr('toNext5');
        }

        if (next5IndexPage <= $(`[${atributeName5}]`).length) {
            currentIndexPage5 = next5IndexPage
        } else if (atributeLoop5) {
            currentIndexPage5 = next5IndexPage - $(`[${atributeName5}]`).length;
        } else {
            currentIndexPage5 = currentIndexPage5
        }
        let next5PageEval = `localStorage.${atributeName5}='${currentIndexPage5}'`
        eval(next5PageEval)


        renderData5();
    });

    // Нажатие back
    $("body").on('click', "[back5]", function () {

        let beckIndexPage5 = ''
        if (atributeType5 == 'default') {
            beckIndexPage5 = Number(currentIndexPage5) - 1;
        } else if (atributeType5 == 'bouncer') {
            beckIndexPage5 = localStorage.toBack5;
        }

        if (beckIndexPage5 > 0) {
            currentIndexPage5 = beckIndexPage5
        } else if (atributeLoop5) {
            currentIndexPage5 = beckIndexPage5 + $(`[${atributeName5}]`).length;
        } else {
            currentIndexPage5 = currentIndexPage5
        }

        let next5PageEval = `localStorage.${atributeName5}='${currentIndexPage5}'`
        eval(next5PageEval)


        renderData5();
    });

    // Нажатие reload
    $("body").on('click', ".reloader", function () {
        localStorage.page = undefined;
        localStorage.toNext5 = undefined
        localStorage.toBack5 = undefined
        currentIndexPage5 = '1';
        renderData5();
    });


    renderData5()
}