// --- Efecto parallax dinámico ---
window.addEventListener('scroll', function() {
    const scroll = window.pageYOffset;
    const parallax = document.querySelector('.parallax');
    parallax.style.backgroundPositionY = scroll * 0.4 + 'px';
  });
  
  // --- Animación de aparición de las cards ---
  const cards = document.querySelectorAll('.card');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'fadeUpZoom 0.8s ease forwards';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  
  cards.forEach(card => observer.observe(card));
  
  // --- Interactividad: clic lleva a página del alumno ---
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const link = card.getAttribute('data-link');
      window.location.href = link;
    });
  });

  // --- CARRUSEL CON EFECTO FADE ---
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) slide.classList.add('active');
  });
}

document.querySelector('.next').addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
});

document.querySelector('.prev').addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide(currentSlide);
});

// Cambio automático cada 5 segundos
setInterval(() => {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}, 5000);