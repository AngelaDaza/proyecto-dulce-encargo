// Se asignan funcionalidades al icono de menu
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () =>{
    nav.classList.add("header__nav--visible");
})
cerrar.addEventListener("click", () =>{
    nav.classList.remove("header__nav--visible");
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


//Se asigna funcionalidades con Bootstrap al buscador en los paquetes en progreso
import { Input, Ripple, initMDB } from "mdb-ui-kit";

initMDB({ Input, Ripple });

const searchFocus = document.getElementById('search-focus');
const keys = [
  { keyCode: 'AltLeft', isTriggered: false },
  { keyCode: 'ControlLeft', isTriggered: false },
];

window.addEventListener('keydown', (e) => {
  keys.forEach((obj) => {
    if (obj.keyCode === e.code) {
      obj.isTriggered = true;
    }
  });

  const shortcutTriggered = keys.filter((obj) => obj.isTriggered).length === keys.length;

  if (shortcutTriggered) {
    searchFocus.focus();
  }
});

window.addEventListener('keyup', (e) => {
  keys.forEach((obj) => {
    if (obj.keyCode === e.code) {
      obj.isTriggered = false;
    }
  });
});

