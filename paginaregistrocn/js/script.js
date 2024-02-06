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



// Aqui empieza la funcionalidad para cambiar de formularios (cliente - negocio) con los botones al hacer click.


/*El código JavaScript anterior funciona de la siguiente manera:

Cuando se carga la página, el formulario de negocio se oculta.
Cuando se hace clic en el botón "Cliente", se oculta el formulario de negocio, se inserta el formulario de cliente al principio del elemento div con id vista y luego se muestra el formulario de cliente.
Cuando se hace clic en el botón "Negocio", se oculta el formulario de cliente, se inserta el formulario de negocio al principio del elemento div con id vista y luego se muestra el formulario de negocio. */
$(document).ready(function() {
    $("#formularioNegocio").hide();
    $("#botonCliente").click(function() {
      $("#formularioNegocio").css("display", "none");
      $("#vista").append($("#formularioCliente"));
      $("#formularioCliente").show();
    });
  
    $("#botonNegocio").click(function() {
      $("#formularioCliente").css("display", "none");
      $("#vista").append($("#formularioNegocio"));
      $("#formularioNegocio").show();
    });
  });
// Aqui finaliza la funcionalidad para cambiar de formularios (cliente - negocio) con los botones al hacer click.


//Aqui empieza la funcionalidad para abrir el PDF de tratamiento de datos personales que esta asociado al checkbox al final del formualario.
function abrirPDF() {
  window.open("/pdf/Autorización para el Tratamiento de Datos Personales.pdf", "_blank");
}
//Aqui finaliza la funcionalidad para abrir el PDF de tratamiento de datos personales que esta asociado al checkbox al final del formualario.


//Aqui empieza la funcionalidad para activar el icono que muestra u oculta la contraseña a peticion del usuario en el campo de contraseña de ambos formularios.

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

//Funcion Formulario cliente campo 2
const inputContrasenaRepetida = document.getElementById("clave-cliente-2");
const iconoOjoRepetida = document.querySelector(".icono-ojo-cliente2");

function repetirMostrarContrasenaCliente() {
  if (inputContrasenaRepetida.type === "password") {
    inputContrasenaRepetida.type = "text";
    iconoOjoRepetida.classList.add("activo");
  } else {
    inputContrasenaRepetida.type = "password";
    iconoOjoRepetida.classList.remove("activo");
  }
}

//Funcion Formulario negocio campo 1
const inputContrasena2 = document.getElementById("clave-negocio");
const iconoOjo2 = document.querySelector(".icono-ojo2");

function mostrarContrasenaNegocio() {
  if (inputContrasena2.type === "password") {
    inputContrasena2.type = "text";
    iconoOjo2.classList.add("activo");
  } else {
    inputContrasena2.type = "password";
    iconoOjo2.classList.remove("activo");
  }
}

//Funcion Formulario negocio campo 1
const inputContrasena2Negocio = document.getElementById("clave-negocio-2");
const iconoOjo2Negocio = document.querySelector(".icono-ojo2Negocio");

function repetirMostrarContrasenaNegocio() {
  if (inputContrasena2Negocio.type === "password") {
    inputContrasena2Negocio.type = "text";
    iconoOjo2Negocio.classList.add("activo");
  } else {
    inputContrasena2Negocio.type = "password";
    iconoOjo2Negocio.classList.remove("activo");
  }
}
//Aqui finaliza la funcionalidad para activar el icono que muestra u oculta la contraseña a peticion del usuario en el campo de contraseña de ambos formularios.



//Aqui empieza la funcionalidad que verifica que ambas contraseñas del formulario cliente y negocio sean iguales para permitir el registro en el formulario.

//Funcion verificar contraseñas cliente
function validarContrasenasCliente() {
  // Obtener los valores de los campos de contraseña
  const contrasenaCliente1 = document.getElementById('clave-cliente').value;
  const contrasenaCliente2 = document.getElementById('clave-cliente-2').value;

  // Validar si las contraseñas coinciden
  if (contrasenaCliente1 !== contrasenaCliente2) {
    // Mostrar mensaje de error con Sweet Alert
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Las contraseñas no coinciden. Inténtalo de nuevo.',
    });

    // Evitar que se envíe el formulario
    return false;
  }

  // Si las contraseñas coinciden, permitir que se envíe el formulario
  return true;
}

// Agregar la función al evento "submit" del formulario
document.getElementById('submit').addEventListener('click', validarContrasenasCliente);


//Funcion verificar contraseñas negocio
function validarContrasenasNegocio() {
  // Obtener los valores de los campos de contraseña
  const contrasenaNegocio1 = document.getElementById('clave-negocio').value;
  const contrasenaNegocio2 = document.getElementById('clave-negocio-2').value;

  // Validar si las contraseñas coinciden
  if (contrasenaNegocio1 !== contrasenaNegocio2) {
    // Mostrar mensaje de error con Sweet Alert
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Las contraseñas no coinciden. Inténtalo de nuevo.',
    });

    // Evitar que se envíe el formulario
    return false;
  }

  // Si las contraseñas coinciden, permitir que se envíe el formulario
  return true;
}

// Agregar la función al evento "submit" del formulario
document.getElementById('submit').addEventListener('click', validarContrasenasNegocio);
//Aqui finaliza la funcionalidad que verifica que ambas contraseñas del formulario cliente y negocio sean iguales para permitir el registro en el formulario.


//Aqui empieza la funcionaliad para guardar la información en el localstorage de la inscripción de cliente
const signupFormCliente = document.querySelector('#formulario-clientes');

signupFormCliente.addEventListener('submit', (e)=>{
  e.preventDefault();
  const typeDocument = document.querySelector('#tipo-documento').value;
  const numberDocument = document.querySelector('#numero-documento').value;
  const name = document.querySelector('#nombres-cliente').value;
  const surname = document.querySelector('#apellidos-cliente').value;
  const location = document.querySelector('#tipo-localidad').value;
  const adress = document.querySelector('#direccion-cliente').value;
  const email = document.querySelector('#email-cliente').value;
  const telephone = document.querySelector('#telefono-cliente').value;
  const nameUser = document.querySelector('#usuario-cliente').value;
  const password = document.querySelector('#clave-cliente').value;

   // Inicializar una variable que reciba los datos que serán guardados en el JSON (array de datos)
   const Users = JSON.parse(localStorage.getItem('users')) || []
   // Verificamos si el correo electrónico que se trata de ingresar se encuentra registrado o no
   const isUserRegistered = Users.find(user => user.email === email) || Users.find(user=> user.nameUser === nameUser)
   // Si el correo ya existe, nos mostrara un mensaje de alerta diciendo que ya se encuentra registrado el correo
   if(isUserRegistered){
       return alert ('El correo o nombre de usuario que ingresaste, ya se encuentra registrado')
   }
   // Si el correo no se encuentra registrado, que le permita guardarlo
   Users.push({
      typeDocument: typeDocument,
      numberDocument: numberDocument,
      name: name,
      surname: surname,
      location: location,
      adress: adress, 
      email: email, 
      telephone: telephone,
      nameUser: nameUser,
      password: password
    })
       //Convertimos los datos en cadenas para almacenarlos
       localStorage.setItem('users', JSON.stringify(Users))
       // Mostraremos que el usuario se registro con exito
       alert('Registro fue exitoso')
       // Que nos redireccione al login
       console.log("Entro aca")
       window.location.href = '../paginaLogin/index.html'
});
//Aqui termina la funcionaliad para guardar la información en el localstorage de la inscripción de cliente

//Aqui empieza la funcionaliad para guardar la información en el localstorage de la inscripción de negocio
const signupFormBusiness = document.querySelector('#formulario-negocio');

signupFormBusiness.addEventListener('submit', (e)=>{
  e.preventDefault();
  const typeDocumentBusiness = document.querySelector('#tipo-documento-negocio').value;
  const numberDocumentBusiness = document.querySelector('#numero-documento-negocio').value;
  const nameBusiness = document.querySelector('#nombres-negocio').value;
  const locationBusiness = document.querySelector('#tipo-localidad-negocio').value;
  const adressBusiness = document.querySelector('#direccion-negocio').value;
  const typeBusiness= document.querySelector('#tipo-negocio').value;
  const emailBusiness = document.querySelector('#email-negocio').value;
  const telephoneBusiness = document.querySelector('#telefono-negocio').value;
  const nameUserBusiness = document.querySelector('#usuario-negocio').value;
  const passwordBusiness = document.querySelector('#clave-negocio').value;

   // Inicializar una variable que reciba los datos que serán guardados en el JSON (array de datos)
   const Users = JSON.parse(localStorage.getItem('users')) || []
   // Verificamos si el correo electrónico que se trata de ingresar se encuentra registrado o no
   const isUserRegisteredBusiness = Users.find(user => user.email === emailBusiness) || Users.find(user=> user.nameUser === nameUserBusiness)
   // Si el correo ya existe, nos mostrara un mensaje de alerta diciendo que ya se encuentra registrado el correo
   if(isUserRegisteredBusiness){
       return alert ('El correo o nombre de usuario que ingresaste, ya se encuentra registrado')
   }
   // Si el correo no se encuentra registrado, que le permita guardarlo
   Users.push({
      typeDocument: typeDocumentBusiness,
      numberDocument: numberDocumentBusiness,
      name: nameBusiness,
      location: locationBusiness,
      adress: adressBusiness, 
      typeBusiness: typeBusiness,
      email: emailBusiness, 
      telephone: telephoneBusiness,
      nameUser: nameUserBusiness,
      password: passwordBusiness
    })
       //Convertimos los datos en cadenas para almacenarlos
       localStorage.setItem('users', JSON.stringify(Users))
       // Mostraremos que el usuario se registro con exito
       alert('Registro fue exitoso')
       // Que nos redireccione al login       
       window.location.href = '../paginaLogin/index.html'
});