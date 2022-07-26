// ====== Chatty events =====
// ====== Болтливые события =====

// Приёмы thottling и debouncing с Lodash

// Mousemove и throttle

const coordsOutputRefs = document.querySelector('.js-coords');
let mouseMoveCbInvocationCounter = 0;


// _.throttle - вызывает каждые 500мм функцию, используется когда что-то нужно скролить, перетаскивать окно, 
// window.addEventListener('mousemove', _.throttle(onMouseMove, 500));



function onMouseMove(event) {
    mouseMoveCbInvocationCounter += 1;

    coordsOutputRefs.textContent = `
    Кол-во вызовов onMouseMove: ${mouseMoveCbInvocationCounter},
    X: ${event.clientX},
    Y: ${event.clientY}`;
}


// Input и debounce

const inputRef = document.querySelector('.js-input');
const outputRef = document.querySelector('.js-output');
let inputCbInvocationCounter = 0;


// _.debounce вызывает функцию после того как перестал вводить данные после 2000мс
// Используется при вводе пользователя при поиске (что-бы не фильтровать каждую букву)
inputRef.addEventListener('input', _.debounce(onInputChange, 2000));

function onInputChange(event) {
    inputCbInvocationCounter +=1;


outputRef.textContent = `
Кол-во вызовов onInputChange: ${inputCbInvocationCounter},
Значение: ${event.target.value}`;
}