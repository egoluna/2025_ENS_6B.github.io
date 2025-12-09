document.addEventListener("DOMContentLoaded", () => {

  /* === ANIMACIÓN DEL CONTENEDOR === */
  const contenedor = document.querySelector(".contenedor");
  contenedor.classList.add("animar");

  /* === EFECTO HOVER EN FOTO DE PERFIL === */
  const foto = document.querySelector(".foto-perfil");
  foto.addEventListener("mouseenter", () => {
    foto.style.transform = "scale(1.05)";
  });
  foto.addEventListener("mouseleave", () => {
    foto.style.transform = "scale(1)";
  });

  /* === ACORDEÓN === */
  const botones = document.querySelectorAll(".acordeon-btn");

  botones.forEach(btn => {
    btn.addEventListener("click", () => {
      const contenido = btn.nextElementSibling;

      // Cerrar otros acordeones
      document.querySelectorAll(".acordeon-contenido").forEach(c => {
        if (c !== contenido) {
          c.classList.remove("activo");
        }
      });

      // Alternar el actual
      contenido.classList.toggle("activo");
    });
  });

  /* === ANIMACIÓN DE CARDS AL APARECER === */
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

  /* === CLIC EN CARDS PARA IR A LA PÁGINA === */
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const link = card.getAttribute('data-link');
      if (link) window.location.href = link;
    });
  });

  /* === CARRUSELES INDEPENDIENTES === */
  document.querySelectorAll('.carousel-fade').forEach(carousel => {

    let slides = carousel.querySelectorAll('.slide');
    let current = 0;

    function showSlide(idx) {
      slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === idx) slide.classList.add('active');
      });
    }

    const nextBtn = carousel.querySelector('.next');
    const prevBtn = carousel.querySelector('.prev');

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        current = (current + 1) % slides.length;
        showSlide(current);
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        current = (current - 1 + slides.length) % slides.length;
        showSlide(current);
      });
    }

    // Mostrar primera slide
    showSlide(current);
  });

});
