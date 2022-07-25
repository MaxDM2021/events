
const refs = {
    parent: document.querySelector('#parent'),
    child: document.querySelector('#child'),
    innerChild: document.querySelector('#inner-child'),
};

refs.parent.addEventListener('click', onParentClick);
refs.child.addEventListener('click', onChildClick);
refs.innerChild.addEventListener('click', onInnerChildClick);

function onParentClick(evt) {
    console.log('onParentClick');

    // Выдает то на что кликнул, остается без изменений!
    console.log('onParentClick -> evt.target: ', evt.target);
    // Выдает то на чем висит слушатель событий, и идет ввер и выдает всех выше на которых висит слушатель событий
    console.log('onParentClick -> evt.currentTarget: ', evt.currentTarget)
}

function onChildClick(evt) {
    console.log('onChildClick');
    console.log('onChildClick -> evt.target: ', evt.target);
    console.log('onChildClick -> evt.currentTarget: ', evt.currentTarget);
}

function onInnerChildClick(evt) {
    console.log('onInnerChildClick');
    console.log('onInnerChildClick -> evt.target: ', evt.target);
    console.log('onInnerChildClick -> evt.currentTarget: ', evt.currentTarget);
}