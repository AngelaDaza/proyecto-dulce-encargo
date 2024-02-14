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
                input.focus(); // Enfocar el campo al activar la edición
                this.innerHTML = '<i class="fas fa-check"></i>'; // Cambiar el icono a un check
            } else {
                input.setAttribute("disabled", "true");
                this.innerHTML = '<i class="fas fa-pencil-alt"></i>'; // Restaurar el icono de lápiz
            }
        });
    });

    formulario.addEventListener("submit", function (e) {
        e.preventDefault();

        // Aquí puedes manejar el envío del formulario como se mostró en el ejemplo anterior
    });
});

