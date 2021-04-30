const calc = (size, material, options, promocod, result) => {
    // size -размер    material - материал    options - доп.опций
    // promocod - промо из коробки      result - итоговая сумма 
    const sizeBlock = document.querySelector(size),
        materialBlock = document.querySelector(material),
        optionsBlock = document.querySelector(options),
        promocodBlock = document.querySelector(promocod),
        resultBlock = document.querySelector(result);

    // сюда будем помещять общую сумму  
    let sum = 0;
    const calcFunc = () => {
        // окр до ближайшего целого
        sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value));

        if (sizeBlock.value == '' || materialBlock.value == '') {
            resultBlock.textContent = "Выберите размер и материал картины";
        } else if (promocodBlock.value === 'IWANTPOPART') {
            resultBlock.textContent = Math.round(sum * 0.7);
        } else {
            resultBlock.textContent = sum;
        }
    };

    sizeBlock.addEventListener('change', calcFunc);
    materialBlock.addEventListener('change', calcFunc);
    optionsBlock.addEventListener('change', calcFunc);
    promocodBlock.addEventListener('input', calcFunc);

};

export default calc;