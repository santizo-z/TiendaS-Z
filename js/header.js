function header() {
  let inicio_al_dom = document.querySelector("#header1");
  let variable = document.createElement("div");
  variable.innerHTML = `
  <div class="logo">
  <img src="https://i.pinimg.com/originals/72/85/40/7285401123e4a2d6f5dd29e6fada6a3e.png" alt="Inicio" id="btn-inicio">
  </div>
  <h1 id="tituloTienda"></h1>
  <div id="headerRight">

  <input class="buscar" type="text" id="buscador" name="busca" placeholder="Buscar por nombre">

  <div class="dropdown">
    <button id="categoriasBtn" class="dropdownBtn">Categorías</button>
    <ul id="categoriasList" class="dropdownContent"></ul>
  </div>
  <a href="./rebajas.html">
  <button id="rebajasBtn" class="dropdownBtn">Rebajas</button>
  </a>
  <ul id="productosList" class="dropdownContent" ></ul>
  
  
</div>`
  ;
  inicio_al_dom.appendChild(variable);
}
header();

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

 document.addEventListener("keyup", e=>{

  if (e.target.matches("#buscador")){

      if (e.key ==="Escape")e.target.value = ""

      document.querySelectorAll(".recuadro").forEach(fruta =>{

          fruta.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ?fruta.classList.remove("filtro")
            :fruta.classList.add("filtro")
      })

  }


})
 
 
 