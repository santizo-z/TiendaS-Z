// Definición de la base de datos
const database = [
    { id: 1, nombre: 'Camisa', talla: 'S', color: 'Azul', precio: 29.99 },
    { id: 2, nombre: 'Pantalón', talla: 'M', color: 'Negro', precio: 39.99 },
    { id: 3, nombre: 'Zapatos', talla: 'L', color: 'Marrón', precio: 59.99 },
    // Agrega más objetos según tus necesidades
  ];
  
  // Función para obtener todos los elementos de la base de datos
  function obtenerElementos() {
    return database;
  }
  
  // Función para agregar un nuevo elemento a la base de datos
  function agregarElemento(elemento) {
    database.push(elemento);
  }
  
  // Función para buscar elementos por talla y color
  function buscarElementos(talla, color) {
    return database.filter((elemento) => {
      return elemento.talla === talla && elemento.color === color;
    });
  }
  
  // Ejemplo de uso
  console.log(obtenerElementos());
  
  const nuevoElemento = { id: 4, nombre: 'Chaqueta', talla: 'XL', color: 'Rojo', precio: 49.99 };
  agregarElemento(nuevoElemento);
  console.log(obtenerElementos());
  
  const elementosFiltrados = buscarElementos('M', 'Negro');
  console.log(elementosFiltrados);
  