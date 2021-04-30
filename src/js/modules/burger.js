const burger = (menuSelector, burgerSelector) => {
    //    burger == btn открытия menu

    const menuElem = document.querySelector(menuSelector),
        burgerElem = document.querySelector(burgerSelector);

    // на всякий случай скрываем меню  
    menuElem.style.display = 'none';
    // при клике открытие меню 
    burgerElem.addEventListener('click', () => {
        // availWidth - взвращает ширину экрана пользователя
        //по условию если меню скрыто и ширина экрана меньше 993px, 
        //показываем меню  
        if (menuElem.style.display == 'none' && window.screen.availWidth < 993) {
            menuElem.style.display = 'block';
        } else {
            menuElem.style.display = 'none';
        }
    });
    // событие resize - отслеживает изменение размеров экрана пользователя
    // и по условию если его ширина будут шире 992 прячем меню  
    window.addEventListener('resize', () => {
        if (window.screen.availWidth > 992) {
            menuElem.style.display = 'none';
        }
    });

};

export default burger;