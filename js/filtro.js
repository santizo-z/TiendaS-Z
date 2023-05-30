document.addEventListener('DOMContentLoaded', function() {
    const tallaSelect = document.getElementById('talla');
    const colorSelect = document.getElementById('color');
    const buscadorInput = document.getElementById('buscador');
    const productosList = document.getElementById('productos');
    const categoriasList = document.getElementById('categorias');
    
    tallaSelect.addEventListener('change', filtrarProductos);
    colorSelect.addEventListener('change', filtrarProductos);
    buscadorInput.addEventListener('input', filtrarProductos);
    
    function filtrarProductos() {
      const talla = tallaSelect.value;
      const color = colorSelect.value;
      const buscador = buscadorInput.value.toLowerCase();
      
      const productos = Array.from(productosList.children);
      
      productos.forEach(producto => {
        const mostrar = (
          (talla === '' || producto.textContent.toLowerCase().includes(talla)) &&
          (color === '' || producto.textContent.toLowerCase().includes(color)) &&
          (buscador === '' || producto.textContent.toLowerCase().includes(buscador))
        );
        
        producto.style.display = mostrar ? 'block' : 'none';
      });
    }
    
    // Generar categorías
    const categorias = ['Camisetas', 'Pantalones', 'Chaquetas', 'Accesorios'];
    
    categorias.forEach(categoria => {
      const li = document.createElement('li');
      li.textContent = categoria;
      categoriasList.appendChild(li);
    });
  });
  // Obtener referencia al botón de buscar
const btnBuscar = document.getElementById('btn-buscar');

// Agregar evento de clic al botón de buscar
btnBuscar.addEventListener('click', buscarElementos);

// Función para buscar elementos
function buscarElementos() {
  const tallaSeleccionada = document.getElementById('input-talla').value;
  const colorSeleccionado = document.getElementById('input-color').value;

  // Realizar la lógica de búsqueda aquí
  // ...

  // Ejemplo de salida en la consola
  console.log('Talla seleccionada:', tallaSeleccionada);
  console.log('Color seleccionado:', colorSeleccionado);
}

  