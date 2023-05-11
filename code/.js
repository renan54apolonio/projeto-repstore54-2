
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const slideWidth = slides[0].offsetWidth;

let isDragging = false;
let startPosition = 0;
let currentTranslate = 0;
let previousTranslate = 0;
let animationId = 0;

slides.forEach((slide, index) => {
  // Touch events
  slide.addEventListener('pointerdown', e => {
    isDragging = true;
    startPosition = e.clientX || e.touches[0].clientX;
    currentTranslate = -index * slideWidth;
    previousTranslate = currentTranslate;
    cancelAnimationFrame(animationId);
  });

  slide.addEventListener('pointermove', e => {
    if (isDragging) {
      const currentPosition = e.clientX || e.touches[0].clientX;
      const diff = currentPosition - startPosition;
      currentTranslate = previousTranslate + diff;
      setSliderPosition();
    }
  });

  slide.addEventListener('pointerup', () => {
    isDragging = false;
    cancelAnimationFrame(animationId);
    const slideIndex = Math.round(-currentTranslate / slideWidth);
    currentTranslate = -slideIndex * slideWidth;
    previousTranslate = currentTranslate;
    setSliderPosition();
  });

  slide.addEventListener('pointerleave', () => {
    if (isDragging) {
      isDragging = false;
      cancelAnimationFrame(animationId);
      const slideIndex = Math.round(-currentTranslate / slideWidth);
      currentTranslate = -slideIndex * slideWidth;
      previousTranslate = currentTranslate;
      setSliderPosition();
    }
  });
});

function setSliderPosition() {
  slider.style.transform = `translateX(${currentTranslate}px)`;
  animationId = requestAnimationFrame(setSliderPosition);
}



