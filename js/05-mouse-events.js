// Событие мыши

// - mouseenter и mouseleave (Это ховер)
// - mouseover и mouseout
// - mousemove (chatty event - болтливое событие)
// - Допчат по координатам

const boxRef = document.querySelector('.js-box');

// boxRef.addEventListener('mouseover', onMouseEnter);
// boxRef.addEventListener('mouseout', onMouseLeave);
boxRef.addEventListener('mousemove', onMouseMove)

function onMouseEnter(event) {
    const box = event.currentTarget;
    box.classList.add('box--active');
}

function onMouseLeave(event) {
    const box = event.currentTarget;
    box.classList.remove('box--active');
}

function onMouseMove(event) {
    console.log(event);
}