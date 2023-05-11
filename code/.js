
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('nav a');
const navLinksCount = navLinks.length;

// Clone o menu e adicione-o ao final para criar um efeito de slider infinito
nav.innerHTML += nav.innerHTML;

let isDragging = false;
let startX, scrollLeft;

nav.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.pageX - nav.offsetLeft;
  scrollLeft = nav.scrollLeft;
  nav.classList.add('active');
});

nav.addEventListener('mouseup', () => {
  isDragging = false;
  nav.classList.remove('active');
  snapToClosestNavItem();
});

nav.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX - nav.offsetLeft;
  const walk = (x - startX) * 3;
  nav.scrollLeft = scrollLeft - walk;
});

nav.addEventListener('touchstart', (e) => {
  isDragging = true;
  startX = e.touches[0].clientX - nav.offsetLeft;
  scrollLeft = nav.scrollLeft;
  nav.classList.add('active');
});

nav.addEventListener('touchend', () => {
  isDragging = false;
  nav.classList.remove('active');
  snapToClosestNavItem();
});

nav.addEventListener('touchmove', (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.touches[0].clientX - nav.offsetLeft;
  const walk = (x - startX) * 3;
  nav.scrollLeft = scrollLeft - walk;
});

function snapToClosestNavItem() {
  // Encontre o índice do item mais próximo do centro do menu
  let closestIndex = 0;
  let closestDistance = Infinity;
  const center = nav.offsetWidth / 2;
  navLinks.forEach((link, i) => {
    const distance = Math.abs(link.offsetLeft - center);
    if (distance < closestDistance) {
      closestIndex = i;
      closestDistance = distance;
    }
  });

  // Se o item mais próximo for um item clonado, mude o índice para o item original correspondente
  if (closestIndex >= navLinksCount) {
    closestIndex -= navLinksCount;
  }

  // Rola para o item mais próximo
  const closestLink = navLinks[closestIndex];
  nav.scrollTo({
    left: closestLink.offsetLeft - nav.offsetWidth / 2 + closestLink.offsetWidth / 2,
    behavior: 'smooth'
  });
}



