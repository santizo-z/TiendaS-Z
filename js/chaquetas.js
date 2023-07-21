import { chaquetas } from './database.js';

const chaquetasContainer = document.getElementById('chaquetas-container');

function crearChaqueta(data) {
  data.forEach((chaqueta, index) => {
    const chaquetaDiv = document.createElement('div');
    chaquetaDiv.classList.add('chaqueta');

    const imagen = document.createElement('img');
    imagen.src = chaqueta.img;
    imagen.alt = chaqueta.titulo;

    const titulo = document.createElement('h3');
    titulo.textContent = chaqueta.titulo;

    const precio = document.createElement('p');
    precio.textContent = chaqueta.precio;

    chaquetaDiv.appendChild(imagen);
    chaquetaDiv.appendChild(titulo);
    chaquetaDiv.appendChild(precio);
    chaquetasContainer.appendChild(chaquetaDiv);

    // Ajustamos para que haya 3 chaquetas por fila en pantalla completa
    if (window.innerWidth >= 760 && (index + 1) % 3 === 0) {
      chaquetaDiv.classList.add('chaqueta-row-end');
    }
  });
}

crearChaqueta(chaquetas);

const btnInicio = document.getElementById('btn-inicio');

btnInicio.addEventListener('click', () => {
  window.location.href = 'index.html';
});
