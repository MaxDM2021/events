
// Ленивая загрузка изображений (концепция) ахахахахахах
// Нативная поддержка
// Событие загрузки изображения



if ('loading' in HTMLImageElement.prototype) {
    console.log('Браузер поддерживает lazyload')
    addSrsAttrToLazyImages();
}
 else {
    console.log('Браузер НЕ поддерживает lazyload')
    AddLazySizesScript ()
}

const lazyImages = document.querySelectorAll('img[data-src]');


lazyImages.forEach(image => {

    // { once: true } - после того как функция выполнится сними регистрацию и удались
    image.addEventListener('load', onImageLoaded, { once: true });
});


function onImageLoaded (evt) {
    console.log('Картинка загузилась');
    evt.target.classList.add('appear')
}


function addSrsAttrToLazyImages() {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    lazyImages.forEach(img => {
        img.src = img.dataset.src
});
}



function AddLazySizesScript () {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    script.integrity = 'sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ==';
    script.crossorigin = 'anonymous';
    script.referrerpolicy = "no-referrer";

    document.body.appendChild(script);
}


