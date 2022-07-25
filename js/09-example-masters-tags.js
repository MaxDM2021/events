

// === Пример 1 

// const tagsContainer = document.querySelector('.js-tags')
// let selectedTag = null;

// console.log(tagsContainer);

// tagsContainer.addEventListener('click', onTagsContainerClick)


// Логика: Усли есть активная кнопка, то с нее класс снимаем, а куда клацнули - добавили


// function onTagsContainerClick(evt) {
   
// if(evt.target.nodeName !== 'BUTTON'){
// return
// }

// const currentActiveBtn = document.querySelector('.tags__btn--active')

// if (currentActiveBtn) {
//     currentActiveBtn.classList.remove('tags__btn--active');
// }

// Новая запись if при доступе к свойству:

// currentActiveBtn?.classList.remove('tags__btn--active')

// const nextActiveBtn = evt.target;
// nextActiveBtn.classList.add('tags__btn--active')
// selectedTag = nextActiveBtn.dataset.value;

// console.log(selectedTag);
// }


// === Пример 2 Логика: Усли есть активная кнопка, то с нее класс НЕ снимаем, + куда клацнули - добавили


const tagsContainer = document.querySelector('.js-tags');

// new Set() - убирает дубляжи в объекте
const selectedTags = new Set();

tagsContainer.addEventListener('click', onTagsContainerClick);


function onTagsContainerClick(evt) {
   
    if(evt.target.nodeName !== 'BUTTON'){
    return
    }
const btn = evt.target;
// dataset.value - это значение атрибута data-value в html
const tag = btn.dataset.value

// .contains - проверяет есть ли класс или нет, выдает true или false
const isActive = btn.classList.contains('tags__btn--active');

// Если при отключении удалять атрибут data-value() из объекта или добавлять 

if (isActive) {
    selectedTags.delete(tag);
} else{
    selectedTags.add(tag);
}

// toggle - если класса нет то добавит, если есть - уберет! 
btn.classList.toggle('tags__btn--active');
console.log(selectedTags);
}







// =========Ещё пример обновленного IF

// const settings = {
//     theme: {
//         userDufined: {
//             color: 'qwqeqw'
//         }
//     }
// }

// if (setting && settings.theme && settings.theme.userDefind) {
//     console.log(setting.theme.userDefined.color);
// }

// Обновленная замена if:

// settings?.theme?.userDufined?.color;