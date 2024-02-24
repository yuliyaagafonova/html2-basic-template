const burgerButton = document.querySelector('.js-toggle-button');
const nav = document.querySelector('.header__list');

burgerButton.onclick = function () {
  burgerButton.classList.toggle('is-active');
  nav.classList.toggle('js-header-list');
}
