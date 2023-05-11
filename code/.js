const nav = document.querySelector('nav');
let isDragging = false;
let startX, scrollLeft;

nav.addEventListener('touchstart', (e) => {
  isDragging = true;
  startX = e.touches[0].clientX - nav.offsetLeft;
  scrollLeft = nav.scrollLeft;
});

nav.addEventListener('touchend', () => {
  isDragging = false;
});

nav.addEventListener('touchmove', (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.touches[0].clientX - nav.offsetLeft;
  const walk = (x - startX) * 3;
  nav.scrollLeft = scrollLeft - walk;
});
