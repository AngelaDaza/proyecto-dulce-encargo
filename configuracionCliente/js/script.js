// Se asignan funcionalidades al icono de menu
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const body = document.body;
const typeDocument = document.querySelector('#tipo-documento');
const numberDocument = document.querySelector('#numero-documento');
const name = document.querySelector('#nombres-cliente');
const surname = document.querySelector('#apellidos-cliente');
const locality = document.querySelector('#tipo-localidad');
const address = document.querySelector('#direccion-cliente');
const email = document.querySelector('#email-cliente');
const phone = document.querySelector('#telefono-cliente');
const username = document.querySelector('#usuario-cliente');
const password = document.querySelector('#clave-cliente');

abrir.addEventListener("click", () => {
    nav.classList.add("header__nav--visible");
    body.classList.add("body--activo");
})
cerrar.addEventListener("click", () => {
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

//  Fetch para mostrar info del usuario
let userId = 1;
let url = `http://localhost:8080/usuariocliente/obtenerUsuarioClientePorId/${userId}`;

// Realizamos la solicitud GET utilizando fetch
async function obtenerDatosUsuarioId() {
    const outDTO = await fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Error al obtener la información del usuario');
        })
        .then(data => {
            return data;
        })
        .catch(error => {
            Swal.fire({
                icon: 'error',
                title: 'Ha ocurrido un error',
                text: 'Error en la solicitud'
              });
        });
    return outDTO;
}

let datos = obtenerDatosUsuarioId().then(datos => {
    console.log(datos);


    typeDocument.value = datos.typeDocument;    
    numberDocument.value = datos.numberDocument;
    name.value = datos.name;
    surname.value = datos.surname;
    locality.value = datos.locality;
    address.value = datos.address;
    email.value = datos.email;
    phone.value = datos.phone;
    username.value = datos.username;
    password.value = datos.password;

    console.log(typeDocument);
});


// Fetch para modificar usuario

const boton = document.querySelector("#submit");

boton.addEventListener("click", function () {
    let usuarioModificado = {
        typeDocument: typeDocument.value,
        numberDocument: numberDocument.value,
        name: name.value,
        surname: surname.value,
        locality: locality.value,
        address: address.value,
        email: email.value,
        phone: phone.value,
        username: username.value,
        password: password.value
    }

    let url = `http://localhost:8080/usuariocliente/modificarUsuarioCliente/${userId}`;

    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuarioModificado)
    };
    fetch(url, options)
        .then(response => response.json())
        .then(data => {
            Swal.fire({
                icon: 'success',
                title: '¡Felicitaciones!',
                text: 'Usuario modificado con exito'
              });
        })
        .catch(error => console.error('Error al enviar la solicitud PUT:', error));
});


