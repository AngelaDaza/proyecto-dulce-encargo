// Aqui empiezan la asignacion de funcionalidades al icono de menu para la opcion hamburguesa
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const body = document.body;
const typeDocumentBusiness = document.querySelector('#tipo-documento');
const numberDocumentBusiness = document.querySelector('#numero-documento');
const nameBusiness = document.querySelector('#nombre-tienda');
const localityBusiness = document.querySelector('#tipo-localidad');
const addressBusiness = document.querySelector('#direccion-tienda');
const typeBusiness = document.querySelector('#tipo-negocio');
const emailBusiness = document.querySelector('#email-negocio');
const phoneBusiness = document.querySelector('#telefono-negocio');
const usernameBusiness = document.querySelector('#usuario-negocio');
const passwordBusiness = document.querySelector('#clave-negocio');

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
const inputContrasena = document.getElementById("clave-negocio");


function mostrarContrasenaCliente() {
    if (inputContrasena.type === "password") {
        inputContrasena.type = "text";
    } else {
        inputContrasena.type = "password";
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
let url = `http://localhost:8080/usuariotienda/obtenerUsuarioTiendaPorId/${userId}`;

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


    typeDocumentBusiness.value = datos.typeDocument;
    numberDocumentBusiness.value = datos.numberDocument;
    nameBusiness.value = datos.name;
    typeBusiness.value = datos.typeBussines;
    localityBusiness.value = datos.locality;
    addressBusiness.value = datos.address;
    emailBusiness.value = datos.email;
    phoneBusiness.value = datos.phone;
    usernameBusiness.value = datos.username;
    passwordBusiness.value = datos.password;
});


// Fetch para modificar usuario

const boton = document.querySelector("#submit");

boton.addEventListener("click", function () {
    let usuarioModificado = {
        typeDocument: typeDocumentBusiness.value,
        numberDocument: numberDocumentBusiness.value,
        name: nameBusiness.value,
        typeBussines: typeBusiness.value,
        locality: localityBusiness.value,
        address: addressBusiness.value,
        email: emailBusiness.value,
        phone: phoneBusiness.value,
        username: usernameBusiness.value,
        password: passwordBusiness.value
    }

    let url = `http://localhost:8080/usuariotienda/modificarUsuarioTienda/${userId}`;

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
                    title: '¡Felicitaciones',
                    text: 'Usuario modificado con exito'
                  });
            })
            .catch(error => console.error('Error al enviar la solicitud PUT:', error));
});
