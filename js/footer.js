function footer() {
  let footer_al_dom = document.querySelector("#footer1");
  let variable = document.createElement("div");
  variable.innerHTML = `
  <div id="footerContainer">
      <div id="info">
        <h4>Información de la Tienda</h4>
        <p>Tienda de Ropa para Hombres</p>
        <p>Dirección: Calle Principal, Ciudad</p>
        <p>Teléfono: 123-456-789</p>
      </div>
      <div id="contacto">
        <h4>Contacto</h4>
        <p>Email: info@tiendaropa.com</p>
        <p>Teléfono: 123-456-789</p>
      </div>
      <div id="redes-sociales">
        <h4>Síguenos en redes sociales</h4>
        <ul id="social-icons">
          <li><a href="#"><img src="https://i.pinimg.com/736x/a3/02/8d/a3028d99d7ffd29636116de43c9f00db.jpg" alt=></a></li>
          <li><a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/769px-Instagram-Icon.png" alt=></a></li>
          <li><a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/2491px-Logo_of_Twitter.svg.png" alt=></a></li>
        </ul>
      </div>
    </div>`
  ;
  footer_al_dom.appendChild(variable);
}
footer();
// Elementos del DOM
const infoContainer = document.getElementById("info");
const contactoContainer = document.getElementById("contacto");
const redesSocialesContainer = document.getElementById("redes-sociales");

// Datos de ejemplo para el footer
const info = {
  nombreTienda: "Tienda de Ropa para Hombres",
  direccion: "Calle Principal, Ciudad",
  telefono: "123-456-789"
};

const contacto = {
  email: "info@tiendaropa.com",
  telefono: "123-456-789"
};

const redesSociales = [
  { nombre: "Facebook", url: "#" },
  { nombre: "Instagram", url: "#" },
  { nombre: "Twitter", url: "#" }
];

// Función para mostrar la información del footer
function mostrarInformacion() {
  const infoHTML = `
    <h4>Información de la Tienda</h4>
    <p>${info.nombreTienda}</p>
    <p>Dirección: ${info.direccion}</p>
    <p>Teléfono: ${info.telefono}</p>
  `;
  infoContainer.innerHTML = infoHTML;
}

// Función para mostrar los datos de contacto del footer
function mostrarContacto() {
  const contactoHTML = `
    <h4>Contacto</h4>
    <p>Email: ${contacto.email}</p>
    <p>Teléfono: ${contacto.telefono}</p>
  `;
  contactoContainer.innerHTML = contactoHTML;
}

// Función para mostrar los íconos de redes sociales del footer
function mostrarRedesSociales() {
  const redesSocialesHTML = `
    <h4>Síguenos en redes sociales</h4>
    <ul id="social-icons">
      ${redesSociales
        .map(
          (redSocial) =>
            `<li><a href="${redSocial.url}"><img src="${redSocial.nombre.toLowerCase()}.png" alt="${redSocial.nombre}"></a></li>`
        )
        .join("")}
    </ul>
  `;
  redesSocialesContainer.innerHTML = redesSocialesHTML;
}

// Mostrar la información del footer
mostrarInformacion();

// Mostrar los datos de contacto del footer
mostrarContacto();

// Mostrar los íconos de redes sociales del footer
mostrarRedesSociales();
