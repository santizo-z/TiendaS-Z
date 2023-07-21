import { accesorios2 } from './database.js';

const accesoriosContainer = document.getElementById('accesorios-container');

function crearAccesorios(data) {
  data.forEach((accesorio, index) => {
    const accesorioDiv = document.createElement('div');
    accesorioDiv.classList.add('accesorio');

    const imagen = document.createElement('img');
    imagen.src = accesorio.img;
    imagen.alt = accesorio.titulo;

    const titulo = document.createElement('h3');
    titulo.textContent = accesorio.titulo;

    const precio = document.createElement('p');
    precio.textContent = accesorio.precio;

    accesorioDiv.appendChild(imagen);
    accesorioDiv.appendChild(titulo);
    accesorioDiv.appendChild(precio);
    accesoriosContainer.appendChild(accesorioDiv);

    // Ajustamos para que haya 3 accesorios por fila en pantalla completa
    if (window.innerWidth >= 760 && (index + 1) % 3 === 0) {
      accesorioDiv.classList.add('accesorio-row-end');
    }
  });
}

crearAccesorios(accesorios2);

const btnInicio = document.getElementById('btn-inicio');

btnInicio.addEventListener('click', () => {
  window.location.href = 'index.html';
});
