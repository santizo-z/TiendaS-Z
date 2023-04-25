function header (){
    let main = document.querySelector(".header");
    for (let i=0; i <= 0; i++ ){
    let div = document.createElement("div")
    div.innerHTML = `
    <header class="encabezado">
     <h1>S&Z</h1> 
     <button>
        Categoria
     </button>

     <button>
        Rebajas
     </button>
    <a class="icono">🔍</a>
    <input class="buscador" type="text">
    </header>`;
      main.appendChild(div);
    }
}
header();