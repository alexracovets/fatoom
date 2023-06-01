
function Swiper4({
    ...settings
}) {
    let {
        type,
        pageName,
        selectBack,
        loop,
        dev
    } = settings;

    let atributeType4 = type;
    let atributeName4 = pageName;
    let atributeSelect4 = selectBack;
    let atributeLoop4 = loop;
    let atributeDev4 = dev;


    let swiperName4Eval4 = `localStorage.${atributeName4}`;
    let swiperName4 = String(eval(swiperName4Eval4));

    if (swiperName4 == 'undefined') {
        let currentIndexPage4Eval = '1';
        localStorage.setItem(`${atributeName4}`, `${currentIndexPage4Eval}`);
    }

    let currentIndexPage4 = eval(`localStorage.${atributeName4}`);

    function renderData4() {

        $(`[${atributeName4}]`).fadeOut();
        $(`[${atributeName4}]`).attr('style', 'display: none')
        $(`[${atributeName4}='${currentIndexPage4}']`).fadeIn();

        if (atributeType4 == 'bouncer') {
            let toNext4 = $(`[${atributeName4}='${currentIndexPage4}'] [next4]`).attr('toNext4');
            let toBack4 = $(`[${atributeName4}='${currentIndexPage4}'] [next4]`).attr('toBack4');

            if (toNext4 != undefined) {
                localStorage.toNext4 = toNext4;
            }
            if (toBack4 != undefined) {
                localStorage.toBack4 = toBack4;
            }

        }

        // Проверка: нужен ли рендерить кнопку back
        if ($(`[${atributeName4}='${currentIndexPage4}'] [next4]`).attr('isSelect') != undefined && atributeSelect4) {

            $(`[${atributeName4}='${currentIndexPage4}']`).append('<div back class="select-back"><img src="img/next4.svg" alt="back"></div>')

        }
        // Проверка: на вывод реолоудера
        if (atributeDev4 == true) {
            if ($('body .reloader').length < 1) {
                $('body').append('<div class="reloader"><img src="img/reloader.svg" alt="back"></div>')
            }

        }
    }

    // Нажатие next4
    $("body").on('click', "[next4]", function () {

        let next4IndexPage = ''
        if (atributeType4 == 'default') {
            next4IndexPage = Number(currentIndexPage4) + 1;
        } else if (atributeType4 == 'bouncer') {
            next4IndexPage = $(this).attr('toNext4');
        }

        if (next4IndexPage <= $(`[${atributeName4}]`).length) {
            currentIndexPage4 = next4IndexPage
        } else if (atributeLoop4) {
            currentIndexPage4 = next4IndexPage - $(`[${atributeName4}]`).length;
        } else {
            currentIndexPage4 = currentIndexPage4
        }
        let next4PageEval = `localStorage.${atributeName4}='${currentIndexPage4}'`
        eval(next4PageEval)


        renderData4();
    });

    // Нажатие back
    $("body").on('click', "[back4]", function () {

        let beckIndexPage4 = ''
        if (atributeType4 == 'default') {
            beckIndexPage4 = Number(currentIndexPage4) - 1;
        } else if (atributeType4 == 'bouncer') {
            beckIndexPage4 = localStorage.toBack4;
        }

        if (beckIndexPage4 > 0) {
            currentIndexPage4 = beckIndexPage4
        } else if (atributeLoop4) {
            currentIndexPage4 = beckIndexPage4 + $(`[${atributeName4}]`).length;
        } else {
            currentIndexPage4 = currentIndexPage4
        }

        let next4PageEval = `localStorage.${atributeName4}='${currentIndexPage4}'`
        eval(next4PageEval)


        renderData4();
    });

    // Нажатие reload
    $("body").on('click', ".reloader", function () {
        localStorage.page = undefined;
        localStorage.toNext4 = undefined
        localStorage.toBack4 = undefined
        currentIndexPage4 = '1';
        renderData4();
    });


    renderData4()
}