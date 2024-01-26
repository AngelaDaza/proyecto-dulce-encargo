// Aqui empiezan la asignacion de funcionalidades al icono de menu para la opcion hamburguesa
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () =>{
    nav.classList.add("header__nav--visible");
})

cerrar.addEventListener("click", () =>{
    nav.classList.remove("header__nav--visible");
})
// Aqui finaliza la asignacion de funcionalidades al icono de menu para la opcion hamburguesa


// Aqui empiezan la asignacion de funcionalidades para el carousel del modelo de negocio
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide() {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });
    slides[currentSlide].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide();
}

showSlide();

setInterval(() => {
    nextSlide();
}, 5000);

document.querySelector('.next').addEventListener('click', () => {
    nextSlide();
});

document.querySelector('.prev').addEventListener('click', () => {
    prevSlide();
});
// Aqui finaliza la asignacion de funcionalidades para el carousel del modelo de negocio