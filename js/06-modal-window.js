
// 1. Открыть и закрыть по кнопке: onModalOpen и onModalClose
// 2. Закрыть по клику в бекдроп: onBackDropClick
// 3. Закрыть по ESC: onEscapeKeypress

// В СSS есть класс show-modal, который необходимо добавить на body при открытии модалки


const refs = {
    openModalBtn: document.querySelector('[data-action="open-modal"]'),
    closeModalBtn: document.querySelector('[data-action="close-modal"]'),
    backdrop: document.querySelector('.js-backdrop'),

};

refs.openModalBtn.addEventListener('click', onOpenModal);
refs. closeModalBtn.addEventListener('click', onCloseModal);
refs.backdrop.addEventListener('click', onBackdropClick);

function onOpenModal () {
    document.body.classList.add('show-modal');
}

function onCloseModal () {
    document.body.classList.remove('show-modal');
}

function onBackdropClick(event) {
    console.log('Клик по backdrop')
    console.log(event.currentTarget)
    console.log(event.target);
}