const filter = () => {

    const menu = document.querySelector('.portfolio-menu'),
        items = menu.querySelectorAll('li'),
        btnAll = menu.querySelector('.all'),
        btnLovers = menu.querySelector('.lovers'),
        btnChef = menu.querySelector('.chef'),
        btnGirl = menu.querySelector('.girl'),
        btnGuy = menu.querySelector('.guy'),
        btnGrandmother = menu.querySelector('.grandmother'),
        btnGranddad = menu.querySelector('.granddad'),
        wrapper = document.querySelector('.portfolio-wrapper'),
        markAll = wrapper.querySelectorAll('.all'),
        markGirl = wrapper.querySelectorAll('.girl'),
        markLovers = wrapper.querySelectorAll('.lovers'),
        markChef = wrapper.querySelectorAll('.chef'),
        markGuy = wrapper.querySelectorAll('.guy'),
        no = document.querySelector('.portfolio-no');


    const typeFilter = (markType) => {
        // перебераем все картинки,убираем их и удаляем класс
        markAll.forEach(mark => {
            mark.style.display = 'none';
            mark.classList.remove('animated', 'fadeIn');
        });
        // поскольку у этого блока отсутствует класс all,
        // убираем и удаляем класс отдельно    
        no.style.display = "none";
        no.classList.remove('animated', 'fadeIn');

        // если передали аргумент,перебераем его выводим на экран
        // и добоаляем класс
        if (markType) {
            markType.forEach(mark => {
                mark.style.display = 'block';
                mark.classList.add('animated', 'fadeIn');
            });
            // если true показываем блок  no 
        } else {
            no.style.display = 'block';
            no.classList.add('animated', 'fadeIn');
        }
    };
    // навешиваем событие клик,при котором вызываем фильтрующую
    // функцию   
    btnAll.addEventListener('click', () => {
        typeFilter(markAll);
    });

    btnLovers.addEventListener('click', () => {
        typeFilter(markLovers);
    });

    btnChef.addEventListener('click', () => {
        typeFilter(markChef);
    });

    btnGuy.addEventListener('click', () => {
        typeFilter(markGuy);
    });

    btnGirl.addEventListener('click', () => {
        typeFilter(markGirl);
    });

    btnGrandmother.addEventListener('click', () => {
        typeFilter();
    });

    btnGranddad.addEventListener('click', () => {
        typeFilter();
    });

    // с помощью события клик и e.target,меняем класс активности
    // в меню
    menu.addEventListener('click', (e) => {
        let target = e.target;

        if (target && target.tagName == "LI") {
            items.forEach(btn => btn.classList.remove('active'));
            target.classList.add('active');
        }
    });

};

export default filter;