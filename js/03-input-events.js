
// Патерн объект ссылок
// События:
// -- focus и blur
// -- input и change
// -- Чекбоксы и свойство checked


const refs = {
    input: document.querySelector('.js-input'),
    nameLable: document.querySelector('.js-button > span'),
    licenseCheckbox: document.querySelector('.js-license'),
    btn: document.querySelector('.js-button'),
};

// refs.input.addEventListener('focus', onInputFocus);
// refs.input.addEventListener('blur', onInputBlur);
// refs.input.addEventListener('change', onInputChange);
    // Ввод текста используется input
// refs.input.addEventListener('input', onInputChange);

refs.input.addEventListener('input', onInputChange);
// Для радибатонов используется change
refs.licenseCheckbox.addEventListener('change', onLicenseChange);



function onInputFocus(){
    console.log('Инпут получил фокус - событие focus');   
}

function onInputBlur(){
    console.log('Инпут потеря фокус - событие blur');
}

function onInputChange(event) {
    refs.nameLable.textContent = event.currentTarget.value;
}

function onLicenseChange() {
    // Кнопка выключена, когда не чекнут чекбокс!
    refs.btn.disabled = !event.currentTarget.checked;
}

