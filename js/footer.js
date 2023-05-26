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
