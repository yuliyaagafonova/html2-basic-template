//Бургер-меню
const burgerButton = document.querySelector('.js-toggle-button');
const nav = document.querySelector('.header__list');

function ButtonClick () {
  burgerButton.classList.toggle('is-active');
  nav.classList.toggle('js-header-list');
};

burgerButton.addEventListener('click', ButtonClick);

//Visually-hidden
const paginationButtonText1 = document.querySelector('.catalog__pagination-button-text--1');
const paginationButtonText2 = document.querySelector('.catalog__pagination-button-text--2');
const paginationButtonIcon1 = document.querySelector('.catalog__pagination-icon--1');
const paginationButtonIcon2 = document.querySelector('.catalog__pagination-icon--2');
const userLinkText1 = document.querySelector('.header__user-text--1');
const userLinkText2 = document.querySelector('.header__user-text--2');

window.addEventListener("resize", (e) => {
  const windowWidth = window.innerWidth;
  if (windowWidth > 768) {
    paginationButtonText1.classList.remove('visually-hidden');
    paginationButtonText2.classList.remove('visually-hidden');
    paginationButtonIcon1.classList.add('visually-hidden');
    paginationButtonIcon2.classList.add('visually-hidden');
  }
  if (windowWidth < 768) {
    paginationButtonText1.classList.add('visually-hidden');
    paginationButtonText2.classList.add('visually-hidden');
    paginationButtonIcon1.classList.remove('visually-hidden');
    paginationButtonIcon2.classList.remove('visually-hidden');
   }
});

window.addEventListener("resize", (e) => {
  const windowWidth = window.innerWidth;
  if (windowWidth > 1440) {
    userLinkText1.classList.remove('visually-hidden');
    userLinkText2.classList.remove('visually-hidden');
  }
  if (windowWidth < 1440) {
    userLinkText1.classList.add('visually-hidden');
    userLinkText2.classList.add('visually-hidden');
   }
});

//Disabled
const filterControl = document.querySelectorAll('.filter__control');
const filterRadio = document.querySelectorAll('.filter__radio');

function disabledRadio () {
  if (filterRadio.disabled = true) {
    filterControl.classList.add('disabled');
  }
}

