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


//Funcion Formulario cliente campo 1
const inputContrasena = document.getElementById("clave-cliente");
const iconoOjo = document.querySelector(".icono-ojo");

function mostrarContrasenaCliente() {
  if (inputContrasena.type === "password") {
    inputContrasena.type = "text";
    iconoOjo.classList.add("activo");
  } else {
    inputContrasena.type = "password";
    iconoOjo.classList.remove("activo");
  }
}
document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("formularioPerfil");
    const editarIconos = document.querySelectorAll(".editar-icono");

    editarIconos.forEach(icono => {
        icono.addEventListener("click", function () {
            const campo = this.dataset.campo;
            const input = document.getElementById(campo);
            
            if (input.disabled) {
                input.removeAttribute("disabled");
                input.focus(); 
                this.innerHTML = '<i class="fas fa-check"></i>';
            } else {
                input.setAttribute("disabled", "true");
                this.innerHTML = '<i class="fas fa-pencil-alt"></i>';
            }
        });
    });

    formulario.addEventListener("submit", function (e) {
        e.preventDefault();
    });
});
