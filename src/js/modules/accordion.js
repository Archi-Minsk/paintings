const accordion = (triggerSelector) => {
    // доступ к кнопкам
    const btns = document.querySelectorAll(triggerSelector);
    // перебераем и навешиваем событие клик
    btns.forEach(btn => {
        btn.addEventListener('click', function () {
            //   этот перебор нужен для скрытия предыдущего блока
            btns.forEach((btn) => {
                if (!this.classList.contains('active-style')) {
                    btn.classList.remove('active-style');
                    btn.nextElementSibling.classList.remove('active-content');
                    btn.nextElementSibling.style.maxHeight = '0px';

                }
            });

            //   тоглим контекст если нету добавим,если есть убирает
            this.classList.toggle('active-style');
            //   тоже самое со следующим элементом контекста
            this.nextElementSibling.classList.toggle('active-content');

            //проверяем на наличие класса если true, то работаем с maxHeight
            //устанавливаем его значение scrollHeight + 80pading
            if (this.classList.contains('active-style')) {
                this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + "px";
                // если нету ставим maxHeight
            } else {
                this.nextElementSibling.style.maxHeight = '0px';
            }
        });
    });







    //     blocks = document.querySelectorAll(itemsSelector);

    // //добовляем классы анимаций блокам
    // blocks.forEach(block => {
    //     block.classList.add('animated', 'fadeInDown');
    // });
    // // навешиваем на кнопки обработчик событий,и в условий if
    // // проверяем если у контекста куда кликнули нет класса активности
    // // то убираем его совсех кнопок,и добовляем класс на контекст
    // // contains - возвращает true(если есть класс) false если нет 
    // btns.forEach(btn => {
    //     btn.addEventListener('click', function () {
    //         if (!this.classList.contains('active')) {
    //             btns.forEach(btn => {
    //                 btn.classList.remove('active', 'active-style');
    //             });
    //             this.classList.add('active', 'active-style');
    //         }
    //     });
    // });
};

export default accordion;