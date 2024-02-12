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


