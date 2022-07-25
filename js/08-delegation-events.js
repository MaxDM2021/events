

// ======delegation-events========

const container = document.querySelector('.js-container');

container.addEventListener('click', onClick);

function onClick(evt) {
    // Если это не кнопка, сворачиваем функцию
    if(evt.target.nodeName !== 'BUTTON'){
        return;
    }
    // Выдает тип элемента заглавными буквами 'BUTTON'
    console.log(evt.target.nodeName);
    // выдает элемент на который кликнули
    console.log(evt.target)
    // Выдает текст элемента на который кликнули
    console.log(evt.target.textContent)
}


// Добавление новой кнопки 

const addBtn = document.querySelector('.js-add-btn');
let labelCounter = 6;

addBtn.addEventListener('click', onAddBtnClick);

function onAddBtnClick() {
    const btn = document.createElement('button');
    btn.textContent = `Кнопка ${labelCounter}`;
    btn.type = 'bytton';

    container.appendChild(btn);
    labelCounter += 1;
}