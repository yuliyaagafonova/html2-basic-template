//Бургер-меню
const burgerButton = document.querySelector('.js-toggle-button');
const nav = document.querySelector('.header__list');

function ButtonClick () {
  burgerButton.classList.toggle('is-active');
  nav.classList.toggle('js-header-list');
}

burgerButton.addEventListener('click', ButtonClick);
