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
    boton.innerHTML = `<a class="page-link" href="#" onclick="cambiarPagina(${i})">${i}</a>`;
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

