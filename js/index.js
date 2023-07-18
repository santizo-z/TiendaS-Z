import { ropa } from "./database.js";

const recuadrosContainer = document.getElementById('recuadros-container');

// Función para crear y llenar los recuadros
function crearRecuadros(data) {
  data.forEach((producto, index) => {
    const recuadroDiv = document.createElement('div');
    recuadroDiv.classList.add('recuadro');

    const imagen = document.createElement('img');
    imagen.src = producto.img;
    imagen.alt = producto.titulo; // Agregamos un atributo alt para accesibilidad

    const titulo = document.createElement('h3');
    titulo.textContent = producto.titulo;

    const precio = document.createElement('p');
    precio.textContent = producto.precio;

    recuadroDiv.appendChild(imagen);
    recuadroDiv.appendChild(titulo);
    recuadroDiv.appendChild(precio);
    recuadrosContainer.appendChild(recuadroDiv);

    // Agregamos una clase para alinear los recuadros en filas de 3 elementos
    if ((index + 1) % 3 === 0) {
      recuadroDiv.classList.add('recuadro-row-end');
    }
  });
}

// Crear los recuadros con los datos proporcionados
crearRecuadros(ropa);
