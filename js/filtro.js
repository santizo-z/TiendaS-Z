function filtro (){
    let main1 = document.querySelector(".seccion2");
    for (let i=0; i <= 0; i++ ){
    let div = document.createElement("div")
    div.innerHTML = `
    <div class="seccion2">
    <div class="filtro">
        <h2>Informacion sobre el filtro</h2>
        <p>Este filtro te ayudara a uscar de
           una manera mas facil y sencilla la 
           prenda de ropa que buscas, seleccionando
           el color y la talla</p>
        
    </div>
 </div>`;
 main1.appendChild(div);
    }
}
filtro();