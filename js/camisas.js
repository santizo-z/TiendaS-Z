import { camisas } from './database.js';

const camisasContainer = document.getElementById('camisas-container');

function crearCamisas(data) {
  data.forEach((camisa, index) => {
    const camisaDiv = document.createElement('div');
    camisaDiv.classList.add('camisa');

    const imagen = document.createElement('img');
    imagen.src = camisa.img;
    imagen.alt = camisa.titulo;

    const titulo = document.createElement('h3');
    titulo.textContent = camisa.titulo;

    const precio = document.createElement('p');
    precio.textContent = camisa.precio;

    camisaDiv.appendChild(imagen);
    camisaDiv.appendChild(titulo);
    camisaDiv.appendChild(precio);
    camisasContainer.appendChild(camisaDiv);

    // Ajustamos para que haya 3 camisas por fila en pantalla completa
    if (window.innerWidth >= 760 && (index + 1) % 3 === 0) {
      camisaDiv.classList.add('camisa-row-end');
    }
  });
}

crearCamisas(camisas);

const btnInicio = document.getElementById('btn-inicio');

btnInicio.addEventListener('click', () => {
  window.location.href = 'index.html';
});
