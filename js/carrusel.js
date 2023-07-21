function caruusel() {
  let carou_al_dom = document.querySelector("#carrusel");
  let variable = document.createElement("div");
  variable.innerHTML = `
  <div class="carousel-container">
      <img src="https://media.gq.com.mx/photos/632b39a722c97ee0ad66e56e/1:1/w_2000,h_2000,c_limit/ropa-de-hombre-que-puedes-usar-todo-el-ano.jpg" alt="Imagen 1">
      <img src="https://media.gq.com.mx/photos/6398d2adf773a1a8874e3a12/1:1/w_2000,h_2000,c_limit/mejor-ropa-de-hombre-en-2023.jpg" alt="Imagen 2">
      <img src="https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2022/06/03/16542530896671.jpg" alt="Imagen 3">
      <img src="https://i.pinimg.com/originals/82/05/96/8205969a6bc049665bd547423dddc774.jpg" alt="Imagen 4">
      
    </div>`
  ;
  carou_al_dom.appendChild(variable);
}
caruusel();

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
