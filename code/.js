const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const slideWidth = slides[0].offsetWidth;

let position = 0;
let isDragging = false;
let startPos = 0;

slider.addEventListener('touchstart', e => {
  isDragging = true;
  startPos = e.touches[0].clientX;
});

slider.addEventListener('touchmove', e => {
  if (isDragging) {
    const currentPosition = e.touches[0].clientX;
    const distance = currentPosition - startPos;
    position = position + distance;
    slider.style.transform = `translateX(${position}px)`;
  }
});

slider.addEventListener('touchend', () => {
  isDragging = false;
  const slideIndex = Math.round(-position / slideWidth);
  position = -slideIndex * slideWidth;
  slider.style.transform = `translateX(${position}px)`;
});



