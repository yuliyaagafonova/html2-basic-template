const burgerButton = document.querySelector('.js-toggle-button');
const nav = document.querySelector('.header__list');

burgerButton.onclick = function () {
  burgerButton.classList.toggle('is-active');
  nav.classList.toggle('js-header-list');
};

const userLinkText1 = document.querySelector('.header__user-text--1');
const userLinkText2 = document.querySelector('.header__user-text--2');

if (window.matchMedia('(min-width: 1440px)').matches) {
  userLinkText1.classList.remove('visually-hidden');
  userLinkText2.classList.remove('visually-hidden');
};

