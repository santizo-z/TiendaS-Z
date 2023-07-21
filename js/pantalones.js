import { pantalones } from './database.js';

const pantalonesContainer = document.getElementById('pantalones-container');

function crearPantalones(data) {
  data.forEach((pantalon, index) => {
    const pantalonDiv = document.createElement('div');
    pantalonDiv.classList.add('pantalon');

    const imagen = document.createElement('img');
    imagen.src = pantalon.img;
    imagen.alt = pantalon.titulo;

    const titulo = document.createElement('h3');
    titulo.textContent = pantalon.titulo;

    const precio = document.createElement('p');
    precio.textContent = pantalon.precio;

    pantalonDiv.appendChild(imagen);
    pantalonDiv.appendChild(titulo);
    pantalonDiv.appendChild(precio);
    pantalonesContainer.appendChild(pantalonDiv);

    // Ajustamos para que haya 3 pantalones por fila en pantalla completa
    if (window.innerWidth >= 760 && (index + 1) % 3 === 0) {
      pantalonDiv.classList.add('pantalon-row-end');
    }
  });
}

crearPantalones(pantalones);

const btnInicio = document.getElementById('btn-inicio');

btnInicio.addEventListener('click', () => {
  window.location.href = 'index.html';
});
