/* Cuando hago CLICK en .button, .nav TOGGLE 'activo'*/
const btn = document.querySelector('.header__ulCliente');
const nav = document.querySelector('.header__nav');

btn.addEventListener('click', ()=>{
    nav.classList.toggle('header__ulCliente--activo');
});