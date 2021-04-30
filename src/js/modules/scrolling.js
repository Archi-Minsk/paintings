const scrolling = (upSelector) => {
    //   реализация появления стрелки, которая возвращает в начало стр
    const upElem = document.querySelector(upSelector);
    // навишиваем событие,scrollTop - возвращает сколь пользователь 
    // пролистал стр в px,если больше нужного нам количества 
    // навешиваем класс активности,когда станет меньше навешиваем класс скрытия
    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 1650) {
            upElem.classList.add('animated', 'fadeIn');
            upElem.classList.remove('fadeOut');
        } else {
            upElem.classList.add('fadeOut');
            upElem.classList.remove('fadeIn');
        }
    });

    // Scrolling with raf
    // получаем все ссылки которые начинаються с шарпа
    let links = document.querySelectorAll('[href^="#"]'),
        // отвечает за скорость
        speed = 0.3;
    // навешиваем событие на каждую ссылку
    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            //  считываем количество пикселей прокрученных от верха элемента     
            let widthTop = document.documentElement.scrollTop,
                // часть адрессной строки
                hash = this.hash,
                // верхняя граница элемента к которому будем скролить
                toBlock = document.querySelector(hash).getBoundingClientRect().top,
                // стартовая позиция
                start = null;
            // указываем браузеру что хотим произвести анимацию
            requestAnimationFrame(step);

            function step(time) {
                // если старт запускаеться первый раз, н него запишем тиме
                if (start === null) {
                    start = time;
                }

                let progress = time - start,
                    // это выражение отвечает за количество пикселей
                    // которое нужно пролистать в анимаций
                    r = (toBlock < 0 ? Math.max(widthTop - progress / speed, widthTop + toBlock) : Math.min(widthTop + progress / speed, widthTop + toBlock));
                // скролим страницу 
                document.documentElement.scrollTo(0, r);
                // условие для остановки анимаций

                if (r != widthTop + toBlock) {
                    requestAnimationFrame(step);
                } else {
                    location.hash = hash;
                }
            }
        });
    });





    // реализация плавного скрола
    // Pure js scrolling
    // const element = document.documentElement,
    //     body = document.body;

    // //функция занимаеться подсчетам, сколько пролистать и как это сделать
    // const calcScroll = () => {
    //     upElem.addEventListener('click', function (event) {
    //         // scrollTop -  будет хранить значение сколько пролистано
    //         // что из этого будет существвать, то и попадет в scrollTop
    //         let scrollTop = Math.round(body.scrollTop || element.scrollTop);
    //         // у каждой ссылки есть хэш,по условию будем проверять если есть
    //         // хэш, отменяем стондартное поведение
    //         if (this.hash !== '') {
    //             event.preventDefault();
    //             // получаем тот элемент к которому будем скролить
    //             let hashElement = document.querySelector(this.hash),
    //                 // сколько надо пролистать до родителя этого хэша
    //                 hashElementTop = 0;

    //             //пока родитель hashElement существует, запускаем цикл
    //             while (hashElement.offsetParent) {
    //                 // offsetTop - определяет сколько осталось от хедэра до верхней
    //                 // границы родительского элемента 
    //                 hashElementTop += hashElement.offsetTop;
    //                 // далее перебираем всех родителей 
    //                 hashElement = hashElement.offsetParent;

    //             }

    //             hashElementTop = Math.round(hashElementTop);
    //             smoothScroll(scrollTop, hashElementTop, this.hash);

    //         }

    //     });
    // };
    // //                 (от куда, куда, хэш)
    // const smoothScroll = (from, to, hash) => {
    //     let timeInterval = 1,
    //         prevScrollTop,
    //         speed;

    //     if (to > from) {
    //         speed = 30;
    //     } else {
    //         speed = -30;
    //     }

    //     let move = setInterval(function () {
    //         let scrollTop = Math.round(body.scrollTop || element.scrollTop);

    //         if (
    //             prevScrollTop === scrollTop ||
    //             (to > from && scrollTop >= to) ||
    //             (to < from && scrollTop <= to)
    //         ) {
    //             clearInterval(move);
    //             history.replaceState(history.state, document.title, location.href.replace(/#.*$/g, '') + hash);
    //         } else {
    //             body.scrollTop += speed;
    //             element.scrollTop += speed;
    //             prevScrollTop = scrollTop;
    //         }
    //     }, timeInterval);
    // };
    // calcScroll();
};

export default scrolling;