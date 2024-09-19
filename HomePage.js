const slides = document.querySelectorAll('.feature');
let currentSlideIndex = 0;

function showNextSlide() {
  slides[currentSlideIndex].classList.add('hide');
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  slides[currentSlideIndex].classList.remove('hide');
}

setInterval(showNextSlide, 5000);