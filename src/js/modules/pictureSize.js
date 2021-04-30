const pictureSize = (imgSelector) => {
    // поучаем каждый блок
    const blocks = document.querySelectorAll(imgSelector);

    function showImg(block) {
        // доступ к картинке
        const img = block.querySelector('img');
        // меняем название картинки
        img.src = img.src.slice(0, -4) + '-1.png';
        // убираем <p> c текстом,кроме хита продаж
        block.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
            p.style.display = 'none';
        });
    }

    function hideImg(block) {
        const img = block.querySelector('img');

        img.src = img.src.slice(0, -6) + '.png';
        // возвращаем текст
        block.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
            p.style.display = 'block';
        });
    }

    blocks.forEach(block => {
        // mouseover - курсор в блоке
        block.addEventListener('mouseover', () => {
            showImg(block);
        });
        // mouseout - курсор не в блоке
        block.addEventListener('mouseout', () => {
            hideImg(block);
        });
    });
};

export default pictureSize;