const arrowLeft = document.querySelector('.slider-button-prev');
const arrowRight = document.querySelector('.slider-button-next');
const slides = document.querySelectorAll('.slider__item');
const bottom = document.querySelector('.slider-pagination');

let currentSlideIndex = 0;
const paginationRectangle = [];

function createPaginationRectangle() {
  const div = document.createElement('div');
  div.className = ('slider__switch');
  bottom.appendChild(div);
  paginationRectangle.push(div);
}

function addPagination() {
  slides.forEach(createPaginationRectangle);
  paginationRectangle[0].classList.add('active');
  paginationRectangle.forEach((rectangle, index) => {
    rectangle.addEventListener('click', () => changeSlide(index));
  });
}

function addActiveClass() {
  paginationRectangle[currentSlideIndex].classList.add('active');
}

function removeActiveClass() {
  paginationRectangle[currentSlideIndex].classList.remove('active');
}

function showSlide() {
  slides[currentSlideIndex].classList.add('block');
}

function hideSlide() {
  slides[currentSlideIndex].classList.remove('block');
}

function changeSlide(slideIndex) {
  hideSlide();
  removeActiveClass();
  currentSlideIndex = slideIndex;
  addActiveClass();
  showSlide();
  arrowLeft.classList.toggle('disabled', currentSlideIndex === 0);
  arrowRight.classList.toggle('disabled', currentSlideIndex === slides.length - 1);
}

function nextSlide() {
  let newSlideIndex = currentSlideIndex + 1;
  if(newSlideIndex > slides.length - 1) {
    newSlideIndex = slides.length - 1;
  }
  changeSlide(newSlideIndex);
}

function previousSlide() {
  let newSlideIndex = currentSlideIndex - 1;
  if(newSlideIndex < 0) {
    newSlideIndex = 0;
  }
  changeSlide(newSlideIndex);
}

addPagination();
arrowLeft.addEventListener('click', previousSlide);
arrowRight.addEventListener('click', nextSlide);
