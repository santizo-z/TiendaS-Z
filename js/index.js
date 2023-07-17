import { ropa } from "./database.js";

const recuadrosContainer = document.getElementById('recuadros-container');

// Función para crear y llenar los recuadros
function crearRecuadros(data) {
  data.forEach((producto) => {
    const recuadroDiv = document.createElement('div');
    recuadroDiv.classList.add('recuadro');

    const imagen = document.createElement('img');
    imagen.src = producto.img;

    const titulo = document.createElement('h3');
    titulo.textContent = producto.titulo;

    const precio = document.createElement('p');
    precio.textContent = producto.precio;

    recuadroDiv.appendChild(imagen);
    recuadroDiv.appendChild(titulo);
    recuadroDiv.appendChild(precio);
    recuadrosContainer.appendChild(recuadroDiv);
  });
}

// Crear los recuadros con los datos proporcionados
crearRecuadros(ropa);