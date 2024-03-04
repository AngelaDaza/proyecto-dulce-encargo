// Se asignan funcionalidades al icono de menu
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const body = document.body;

abrir.addEventListener("click", () =>{
    nav.classList.add("header__nav--visible");
    body.classList.add("body--activo");
})
cerrar.addEventListener("click", () =>{
    nav.classList.remove("header__nav--visible");
    body.classList.remove("body--activo");
})
//Peticion fetch para los productos activos de la tienda
let url2 = 'http://localhost:8080/productos/obtenerProductoPorIdTienda/2';
fetch(url2)
  .then(response => {
    if (!response.ok) {
      throw new Error('Hubo un problema con la solicitud fetch:', response.statusText);
    }
    return response.json();
  })
  .then(data => mostrarProductosHtml(data))
  .catch(error => console.log(error));

  async function mostrarProductosHtml(productos) {
    try {
      let listadoProductosHtml = '';
      productos.forEach(producto => {
        // Plantilla para la card
        let cardTemplateProducto = `
          <div data-id="${producto.id}" class="paquetesDisponibles__card">
            <img src=${producto.urlImage} alt="Foto producto" class="paquetesDisponibles__cardImg">
            <h3 class="paquetesDisponibles__cardTitle">${producto.name}</h3>
            <p class="paquetesDisponibles__cardParagraph">${producto.description}</p>
            <a href="#" class="eliminar__btn"><button class="eliminar__btnA">Eliminar</button></a>
          </div>`;
        
        listadoProductosHtml += cardTemplateProducto;
      });
  
      // Actualizar el contenido de la sección 'paginacion' con las cards generadas
      document.getElementById('carrusel').innerHTML = listadoProductosHtml;
    } catch (error) {
      console.error('Error al mostrar las compras:', error);
    }
  }

//Se asignan funcionalidad al Carrusel
let posicionActual = 0;

function mostrarTarjetaAnterior() {
  if (posicionActual > 0) {
    posicionActual--;
    actualizarCarrusel();
  }
}

function mostrarSiguienteTarjeta() {
  const cantidadTarjetas = document.querySelectorAll('.paquetesDisponibles__card').length;
  if (posicionActual < cantidadTarjetas - 1) {
    posicionActual++;
  } else {
    posicionActual = 0; // Volver al principio cuando llega al final
  }
  actualizarCarrusel();
}

function actualizarCarrusel() {
  const carrusel = document.querySelector('.paquetesDisponibles__cards');
  const anchoTarjeta = document.querySelector('.paquetesDisponibles__card').offsetWidth;
  carrusel.style.transform = `translateX(-${posicionActual * anchoTarjeta}px)`;
}

document.addEventListener('DOMContentLoaded', () => {
  actualizarCarrusel(); // Ajustar la posición inicial
});

//Peticion fetch para las compras en proceso
let url = 'http://localhost:8080/compras/obtenerTodasLasCompras';
async function convertirHtmlTexto(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Hubo un problema con la solicitud fetch:', response.statusText);
    }
    return await response.text();
  } catch (error) {
    throw new Error('Hubo un problema con la solicitud fetch:', error);
  }
}
fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Hubo un problema con la solicitud fetch:', response.statusText);
    }
    return response.json();
  })
  .then(data => mostrarComprasHtml(data))
  .catch(error => console.log(error));

  async function mostrarComprasHtml(compras) {
    try {
      console.log(compras);
      let listadoComprasHtml = '';
      compras.forEach(compra => {
        // Plantilla para la card
        const cardTemplate = `
          <div data-id="${compra.id}" class="compras contenedorPaquetesProgreso__card" id="card">
            <h3 class="card__hora">${compra.hour}</h3>
            <lord-icon
              src="https://cdn.lordicon.com/hsrrkevt.json"
              trigger="hover"
              colors="primary:#ebe6ef,secondary:#3a3347,tertiary:#a866ee,quaternary:#646e78"
              style="width:100px;height:100px">
            </lord-icon>
            <div class="card">
              <p class="card__Fecha"><strong>Fecha: </strong> ${compra.date}</p>
              <p class="card__Cliente"><strong>Cliente: </strong> ${compra.usuarioCliente.name} ${compra.usuarioCliente.surname}</p>
              <p class="card__Producto"><strong>Producto: </strong> ${compra.producto.name}</p>
              <p class="card__Cantidad"><strong>Cantidad: </strong> ${compra.amount}</p>
            </div>
          </div>`;
        
        listadoComprasHtml += cardTemplate;
      });
  
      // Actualizar el contenido de la sección 'paginacion' con las cards generadas
      document.getElementById('paginacion').innerHTML = listadoComprasHtml;
    } catch (error) {
      console.error('Error al mostrar las compras:', error);
    }
  }











//Paginación
// Obtener los elementos relevantes del DOM
const contenedorElementos = document.getElementById("paginacion");
const botonesPagina = document.getElementById("botonesPagina");
const elementosPorPagina = 8; // Cambia esto según la cantidad de elementos que quieras mostrar por página
const totalElementos = contenedorElementos.children.length;
let paginaActual = 1;

// Función para mostrar elementos de la página actual
function mostrarElementosPagina(pagina) {
  const inicio = (pagina - 1) * elementosPorPagina;
  const fin = inicio + elementosPorPagina;

  for (let i = 0; i < totalElementos; i++) {
    contenedorElementos.children[i].style.display = i >= inicio && i < fin ? "block" : "none";
  }
}

// Función para generar botones de paginación
function generarBotonesPaginacion() {
  const totalPaginas = Math.ceil(totalElementos / elementosPorPagina);

  // Limpiar botones existentes
  botonesPagina.innerHTML = "";

  // Crear botones
  for (let i = 1; i <= totalPaginas; i++) {
    const boton = document.createElement("li");
    boton.classList.add("page-item");
    boton.innerHTML = `<a class="page-link" href="#contenedorMediosDePago" onclick="cambiarPagina(${i})">${i}</a>`;
    botonesPagina.appendChild(boton);
  }
}

// Función para cambiar de página
function cambiarPagina(pagina) {
  paginaActual = pagina;
  mostrarElementosPagina(pagina);
  actualizarBotonesPaginacion();
}

// Función para actualizar el estado de los botones de paginación
function actualizarBotonesPaginacion() {
  const botones = botonesPagina.querySelectorAll(".page-item");

  botones.forEach((boton, index) => {
    if (index + 1 === paginaActual) {
      boton.classList.add("active");
    } else {
      boton.classList.remove("active");
    }
  });
}

// Inicializar la paginación
mostrarElementosPagina(paginaActual);
generarBotonesPaginacion();
actualizarBotonesPaginacion();

// Función para buscar elementos y filtrar por hora
function buscarElementos() {
  let valorBusqueda = document.getElementById("buscar").value.toLowerCase();
  let cards = document.querySelectorAll(".contenedorPaquetesProgreso__card");

  cards.forEach(function(card) {
      let texto = card.textContent.toLowerCase();
      if (texto.includes(valorBusqueda)) {
          card.style.display = "block";
      } else {
          card.style.display = "none";
      }
  });
}

function filtrarPorCategoria() {
  let horaSeleccionada = document.getElementById("filtroCategoria").value;
  let cards = document.querySelectorAll(".contenedorPaquetesProgreso__card");

  cards.forEach(function(card) {
      let horaCard = card.querySelector(".hora").textContent.trim();
      if (horaSeleccionada === "" || horaCard === horaSeleccionada) {
          card.style.display = "block";
      } else {
          card.style.display = "none";
      }
  });
}

