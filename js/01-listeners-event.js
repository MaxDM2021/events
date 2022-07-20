const targetBtn = document.querySelector('.js-target-btn');
const addListenerBtn = document.querySelector('.js-add-listener');
const removeListenerBtn = document.querySelector('.js-remove-listener');

// Добавили слушателя события
// Список событий: https://developer.mozilla.org/ru/docs/Web/Events


addListenerBtn.addEventListener('click', event => {
    console.log(event);
// При подписке и отписке используется одна и та же колбек фунция onTargetBtnClick
    targetBtn.addEventListener('click', onTargetBtnClick);
});

removeListenerBtn.addEventListener('click', event => {
    console.log(event);
    // При подписке и отписке используется одна и та же колбек фунция onTargetBtnClick
    targetBtn.removeEventListener('click', onTargetBtnClick );
});

function onTargetBtnClick(event) {
    console.log(event);
}

function logMessage() {
    console.log('Клик по целевой кнопке');
}