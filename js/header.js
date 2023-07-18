document.addEventListener('DOMContentLoaded', function() {
   const tituloTienda = document.getElementById('tituloTienda');
   
   tituloTienda.textContent = 'S&Z';
 });
// Datos de ejemplo de categorías con URL asociadas
const categorias = [
   { nombre: "Camisetas", url: "camisetas.html" },
   { nombre: "Pantalones", url: "pantalones.html" },
   { nombre: "Chaquetas", url: "chaquetas.html" },
   { nombre: "Accesorios", url: "accesorios.html" }
 ];
 
 // Elementos del DOM
 const categoriasBtn = document.getElementById("categoriasBtn");
 const categoriasList = document.getElementById("categoriasList");
 
 // Función para mostrar las categorías
 function mostrarCategorias() {
   categoriasList.innerHTML = ""; // Limpiar la lista antes de mostrar las categorías
 
   categorias.forEach((categoria) => {
     const li = document.createElement("li");
     const link = document.createElement("a");
     link.textContent = categoria.nombre;
     link.href = categoria.url;
     li.appendChild(link);
     categoriasList.appendChild(li);
   });
 }
 
 // Evento clic para mostrar/ocultar las categorías
 categoriasBtn.addEventListener("click", () => {
   categoriasList.classList.toggle("show");
 });
 
 // Mostrar las categorías inicialmente
 mostrarCategorias();

 // boton de regreso al inicio 
 const btnInicio = document.getElementById('btn-inicio');

 btnInicio.addEventListener('click', () => {
   window.location.href = 'index.html';
 });
 
 
 