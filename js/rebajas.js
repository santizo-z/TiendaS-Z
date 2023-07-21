import { rebajas } from './database.js';

const rebajasContainer = document.getElementById('rebajas-container');

function crearRebajas(data) {
  data.forEach((rebaja, index) => {
    const rebajaDiv = document.createElement('div');
    rebajaDiv.classList.add('rebaja');

    const imagen = document.createElement('img');
    imagen.src = rebaja.img;
    imagen.alt = rebaja.titulo;

    const titulo = document.createElement('h3');
    titulo.textContent = rebaja.titulo;

    const precioAntes = document.createElement('p');
    precioAntes.textContent = `Precio antes: Q${rebaja.precio_antes}`;
    precioAntes.classList.add('precio-antes');

    const precioAhora = document.createElement('p');
    precioAhora.textContent = `Precio ahora: Q${rebaja.percio_ahora}`;
    precioAhora.classList.add('precio-ahora');

    rebajaDiv.appendChild(imagen);
    rebajaDiv.appendChild(titulo);
    rebajaDiv.appendChild(precioAntes);
    rebajaDiv.appendChild(precioAhora);
    rebajasContainer.appendChild(rebajaDiv);

    // Ajustamos para que haya 3 rebajas por fila en pantalla completa
    if (window.innerWidth >= 760 && (index + 1) % 3 === 0) {
      rebajaDiv.classList.add('rebaja-row-end');
    }
  });
}

crearRebajas(rebajas);

const btnInicio = document.getElementById('btn-inicio');

btnInicio.addEventListener('click', () => {
  window.location.href = 'index.html';
});
