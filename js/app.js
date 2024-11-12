const menu = document.querySelector('.menu');
const openMenuBtn = document.querySelector('.open-menu');
const closeMenuBtn = document.querySelector('.close-menu');

function toggleMenu() {
  menu.classList.toggle('menu_opened');
}

openMenuBtn.addEventListener('click', toggleMenu);
closeMenuBtn.addEventListener('click', toggleMenu);

const menuLinks = document.querySelectorAll('.menu a[href^="#"]');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute('id');
      const menuLink = document.querySelector(`.menu a[href="#${id}"]`);

      if (entry.isIntersecting) {
        document.querySelector('.menu a.selected').classList.remove('selected');
        menuLink.classList.add('selected');
      }
    });
  },
  { rootMargin: '-60% 0px -40% 0px' }
);

menuLinks.forEach((menuLink) => {
  menuLink.addEventListener('click', function () {
    menu.classList.remove('menu_opened');
  });

  const hash = menuLink.getAttribute('href');
  const target = document.querySelector(hash);
  if (target) {
    observer.observe(target);
  }
});

document
  .getElementById('inicio-link')
  .addEventListener('click', function (event) {
    event.preventDefault();

    const target = document.getElementById('inicio');

    target.scrollIntoView({
      behavior: 'smooth',
    });
  });

document
  .getElementById('inicio-link')
  .addEventListener('click', function (event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del enlace

    // Encuentra la sección de destino por ID
    const target = document.getElementById('profile');

    // Calcula la distancia desde la parte superior del documento hasta la sección de destino
    const headerHeight = document.querySelector('header').offsetHeight; // Altura del header
    const targetPosition = target.offsetTop - headerHeight; // Desplazamiento con el ajuste para el header

    // Desplazamiento suave hacia la sección
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth',
    });
  });

// STARS EFFECTS //
const starContainer = document.querySelector('.star-background');
const numberOfStars = 200;

for (let i = 0; i < numberOfStars; i++) {
  const star = document.createElement('div');
  star.classList.add('star');

  // Posición aleatoria para cada estrella
  star.style.width = `${Math.random() * 3}px`; // Tamaño aleatorio
  star.style.height = star.style.width;
  star.style.top = `${Math.random() * 100}vh`;
  star.style.left = `${Math.random() * 100}vw`;
  star.style.animationDelay = `${Math.random() * 2}s`; // Retraso aleatorio

  starContainer.appendChild(star);
}
