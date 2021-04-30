// показывает скрытые картинки из базы данных,и удаляет после кнопку

import {
    getResoursce
} from '../services/requests';

const showMoreStyles = (trigger, wrapper) => {
    //  trigger -кнопка
    //  wrapper - блок куда будем помещать карточки
    const btn = document.querySelector(trigger);

    // подгружаем элементы с сервера
    // fetch возврвщает промис
    btn.addEventListener('click', function () {
        getResoursce('assets/db.json')
            .then(res => createCards(res.styles))
            .catch(error => errorCard());
        // удаляем кнопку
        // что-бы сработал this меняем стр.функцию на анонимную
        this.remove();
    });
    // функция обрабатывает ошибку в catch
    function errorCard() {
        let err = document.createElement('div');

        err.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
        err.style.color = 'red';
        err.style.textAlign = 'center';
        err.textContent = 'извините,что-то пошло не так';
        document.querySelector(wrapper).appendChild(err);
    }

    // функция формирует карточки,и выводит на экран
    function createCards(response) {
        response.forEach(({
            src,
            title,
            link
        }) => {
            // создали див
            let card = document.createElement('div');
            // добавляем класс
            card.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');

            card.innerHTML = `
               <div class="styles-block">
                  <img src=${src} alt="style">
                  <h4>${title}</h4>
                  <a href=${link}>Подробнее</a>
               </div>
            `;
            // размещаем на странице в блоке wrapper
            document.querySelector(wrapper).appendChild(card);
        });
    }
};

export default showMoreStyles;