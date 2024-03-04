// Aqui empiezan la asignacion de funcionalidades al icono de menu para la opcion hamburguesa
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

const name = document.querySelector('#nombre-producto');
const urlImage = document.querySelector('#imagen-producto');
const divImg = document.querySelector(".formulario__imagen");
const description = document.querySelector('#descripcion-producto');
const regularPrice = document.querySelector('#precio-regular');
const finalPrice = document.querySelector('#precio-final');
const stock = document.querySelector('#formStock');
let category = '';

abrir.addEventListener("click", () =>{
    nav.classList.add("header__nav--visible");
})

cerrar.addEventListener("click", () =>{
    nav.classList.remove("header__nav--visible");
})

urlImage.addEventListener("change", function(){
    
    divImg.src = this.value;
    console.log(this.value);
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
let url = `http://localhost:8080/productos/obtenerProductoPorId/${userId}`;

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
            category = data.category;
            return data;
        })
        .catch(error => {
            console.error('Error en la solicitud:', error);
            Swal.fire({
                icon: 'error',
                title: 'Ha ocurrido un error',
                text: 'Error en la solicitud'
              });
        });
    return outDTO;
}

let datos = obtenerDatosUsuarioId().then(datos => {
    name.value = datos.name;
    urlImage.value = datos.urlImage;
    divImg.src = datos.urlImage;
    description.value = datos.description;
    regularPrice.value = datos.regularPrice;
    finalPrice.value = datos.finalPrice;
    stock.value = datos.stock;
});


// Fetch para modificar usuario

const boton = document.querySelector(".formulario__btn");

boton.addEventListener("click", async function (e) {
    e.preventDefault();
    
    let usuarioModificado = {
        name: name.value,
        urlImage: urlImage.value,
        description: description.value,
        regularPrice: regularPrice.value,
        finalPrice: finalPrice.value,
        stock: stock.value,
        category
    }

    console.log(usuarioModificado);
    let url = `http://localhost:8080/productos/modificarProducto/${userId}`;

    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuarioModificado)
    };
    await fetch(url, options)
            .then(response => response.json())
            .then(data => {
                Swal.fire({
                    icon: 'success',
                    title: '¡Felicitaciones',
                    text: 'Producto modificado con exito'
                  });
                console.log(data);
            })
            .catch(error => console.error('Error al enviar la solicitud PUT:', error));
});
