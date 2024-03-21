document.addEventListener("DOMContentLoaded", (e) => {

  // Area video pagina inicial
  const glightboxVideo = GLightbox({
    selector: '.glightbox-video'
  });

  // Area video categorias
  const glightbox = GLightbox({
    selector: '.glightbox-categoria'
  });

  // Area galeria
  const glightboxGaleria = GLightbox({
    selector: '.glightbox-galeria'
  });

  const swiperClassificados = new Swiper('.swiper-classificado', {
    speed: 400,
  });
});