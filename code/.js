const nav = document.querySelector('nav');
let isDragging = false;
let startX, scrollLeft;

nav.addEventListener('touchstart', (e) => {
  isDragging = true;
  startX = e.touches[0].clientX;
  scrollLeft = nav.scrollLeft;
});

nav.addEventListener('touchend', () => {
  isDragging = false;
});

nav.addEventListener('touchmove', (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.touches[0].clientX;
  const scrollX = x - startX;
  nav.scrollLeft = scrollLeft - scrollX;
});
