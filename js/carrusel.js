const carouselContainer = document.getElementById('carousel-container');
const carousel = document.getElementById('carousel');
const images = carousel.getElementsByTagName('img');
const imageWidth = images[0].offsetWidth;

let currentPosition = 0;
let totalImages = images.length;

function moveCarousel() {
  currentPosition -= imageWidth;

  if (currentPosition <= -imageWidth * (totalImages - 1)) {
    currentPosition = 0;
  }

  carousel.style.transform = `translateX(${currentPosition}px)`;
}

setInterval(moveCarousel, 3000); // Cambia la imagen cada 3 segundos (ajusta el tiempo según sea necesario)


// Event listeners para botones de siguiente y anterior
document.getElementById('btnNext').addEventListener('click', nextImage);
document.getElementById('btnPrevious').addEventListener('click', previousImage);
