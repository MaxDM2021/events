


// debugger
// const user = {
//     name: "John",
//     surname: "Smith",
//     age: 30,
// };
// debugger;
// const number = 10;
// debugger;
// function logNumbers(number) {
//     console.log(number);
//     debugger
// }

// debugger;
// logNumbers(number);
// debugger;

// Нужно достучаться до нашего input
// 1. Повесить событие input на тег input
// 2. Каждый раз при событии можем считывать данные из инпута (value);
// 3. Получить лоступ до span
// 4. Записать значение input в стиле нашего тега span (span.styles.fontSaze = value)


const technoligies = [
{
    title: 'HTML',
    description: 'HyperText Markup Language',
},
{
    title: 'CSS',
    description: 'Cascading Style Sheets',
},
{
    title: 'JavaScript',
    description: 'JavaScript language',
},
{
    title: 'React',
    description: 'JavaScript library',
},
];



// Функция создания розметки


// function createLi(array) {
// return array.reduce((acc, item) => acc + `<li data-description = "${item.description}">${item.title}</li>`, "");
// }

function createLi(array){
    return array.map((item) => `<li data-description = "${item.description}">${item.title}</li>`).join('');
}



const result = createLi(technoligies);

const list = document.querySelector(".list")
const p = document.querySelector('.description')
list.insertAdjacentHTML('beforeend', result)


function listHandler(e) {
    const description = e.target.dataset.description;
  p.textContent = description;
    console.log(description);
}


list.addEventListener('click', listHandler)


// Включение клавиатуры при открытии модального окна 
// и отключение клавиатуры  при закрытии модальго окна

const button = document.querySelector('button');
const modal = document.querySelector('.modal');

function openModal() {
    modal.classList.add('open');
    window.addEventListener('keydown', keyboardHumbler);
}

function closeModal() {
    modal.classList.remove('open');
    window.removeEventListener('keydown', keyboardHumbler)
}

button.addEventListener('click', openModal);

