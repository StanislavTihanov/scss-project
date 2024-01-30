import '/src/scss/style.scss';


const burgerMenu = document.querySelector('.header__burger');
const menuBody = document.querySelector('.menu');

if(burgerMenu) {
    burgerMenu.addEventListener('click', () => {
        burgerMenu.classList.toggle('active');
        menuBody.classList.toggle('open');
    })
}

