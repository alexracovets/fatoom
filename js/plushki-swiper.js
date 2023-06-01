function Swiper6({
    ...settings
}) {
    let {
        type,
        pageName,
        selectBack,
        loop,
        dev
    } = settings;

    let atributeType6 = type;
    let atributeName6 = pageName;
    let atributeSelect6 = selectBack;
    let atributeLoop6 = loop;
    let atributeDev6 = dev;

    let swiperName6Eval6 = `localStorage.${atributeName6}`;
    let swiperName6 = String(eval(swiperName6Eval6));

    if (swiperName6 == 'undefined') {
        let currentIndexPage6Eval = '1';
        localStorage.setItem(`${atributeName6}`, `${currentIndexPage6Eval}`);
    }

    let currentIndexPage6 = eval(`localStorage.${atributeName6}`);

    function renderData6() {

        $(`[${atributeName6}]`).fadeOut();
        $(`[${atributeName6}]`).attr('style', 'display: none')
        $(`[${atributeName6}='${currentIndexPage6}']`).fadeIn();

        if (atributeType6 == 'bouncer') {
            let toNext6 = $(`[${atributeName6}='${currentIndexPage6}'] [next6]`).attr('toNext6');
            let toBack6 = $(`[${atributeName6}='${currentIndexPage6}'] [next6]`).attr('toBack6');

            if (toNext6 != undefined) {
                localStorage.toNext6 = toNext6;
            }
            if (toBack6 != undefined) {
                localStorage.toBack6 = toBack6;
            }

        }

        // Проверка: нужен ли рендерить кнопку back
        if ($(`[${atributeName6}='${currentIndexPage6}'] [next6]`).attr('isSelect') != undefined && atributeSelect6) {

            $(`[${atributeName6}='${currentIndexPage6}']`).append('<div back class="select-back"><img src="img/next6.svg" alt="back"></div>')

        }
        // Проверка: на вывод реолоудера
        if (atributeDev6 == true) {
            if ($('body .reloader').length < 1) {
                $('body').append('<div class="reloader"><img src="img/reloader.svg" alt="back"></div>')
            }

        }
    }

    // Нажатие next6
    $("body").on('click', "[next6]", function () {

        let next6IndexPage = ''
        if (atributeType6 == 'default') {
            next6IndexPage = Number(currentIndexPage6) + 1;
        } else if (atributeType6 == 'bouncer') {
            next6IndexPage = $(this).attr('toNext6');
        }

        if (next6IndexPage <= $(`[${atributeName6}]`).length) {
            currentIndexPage6 = next6IndexPage
        } else if (atributeLoop6) {
            currentIndexPage6 = next6IndexPage - $(`[${atributeName6}]`).length;
        } else {
            currentIndexPage6 = currentIndexPage6
        }
        let next6PageEval = `localStorage.${atributeName6}='${currentIndexPage6}'`
        eval(next6PageEval)


        renderData6();
    });

    // Нажатие back
    $("body").on('click', "[back6]", function () {

        let beckIndexPage6 = ''
        if (atributeType6 == 'default') {
            beckIndexPage6 = Number(currentIndexPage6) - 1;
        } else if (atributeType6 == 'bouncer') {
            beckIndexPage6 = localStorage.toBack6;
        }

        if (beckIndexPage6 > 0) {
            currentIndexPage6 = beckIndexPage6
        } else if (atributeLoop6) {
            currentIndexPage6 = beckIndexPage6 + $(`[${atributeName6}]`).length;
        } else {
            currentIndexPage6 = currentIndexPage6
        }

        let next6PageEval = `localStorage.${atributeName6}='${currentIndexPage6}'`
        eval(next6PageEval)


        renderData6();
    });

    // Нажатие reload
    $("body").on('click', ".reloader", function () {
        localStorage.page = undefined;
        localStorage.toNext6 = undefined
        localStorage.toBack6 = undefined
        currentIndexPage6 = '1';
        renderData6();
    });


    renderData6()
}