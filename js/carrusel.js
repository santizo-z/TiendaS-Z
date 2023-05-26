const carouselContainer = document.querySelector('.carousel-container');
const carouselImages = carouselContainer.querySelectorAll('img');

let currentIndex = 0;

function showImage(index) {
  carouselContainer.style.transform = `translateX(-${index * 100}%)`;
}

function nextImage() {
  currentIndex = (currentIndex + 1) % carouselImages.length;
  showImage(currentIndex);
}

function previousImage() {
  currentIndex = (currentIndex - 1 + carouselImages.length) % carouselImages.length;
  showImage(currentIndex);
}

setInterval(nextImage, 3000); // Cambiar imagen cada 3 segundos

// Event listeners para botones de siguiente y anterior
document.getElementById('btnNext').addEventListener('click', nextImage);
document.getElementById('btnPrevious').addEventListener('click', previousImage);
