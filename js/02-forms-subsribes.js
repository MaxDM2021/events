// --Событие submit
// --Действия браузера по умолчанию
// --Свойство elements

const form = document.querySelector('.js-register-form')

form.addEventListener('submit', onFormSubmit);

function onFormSubmit (event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    console.log(formData);
    formData.forEach((value, name) => {
    console.log('onFormSubmit -> name', name);
    console.log('onFormSubmit -> value', value);
});
}
