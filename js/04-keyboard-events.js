const refs = {
    output: document.querySelector('.js-output'),
    clearBtn: document.querySelector('.js-clear'),
}
// keydown - реагирует на все клавиши и команды
// window.addEventListener('keydown', onKeypress)
// keypress - реагирует только на символы
window.addEventListener('keypress', onKeypress)
refs.clearBtn.addEventListener('click', onClearOutput);

function onKeypress(event){
// console.log(event);
console.log('event.key: ', event.key);
console.log('event.cod: ', event.code);

refs.output.textContent += event.key;

}

function onClearOutput() {
    refs.output.textContent = "";
}