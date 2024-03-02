// Se asignan funcionalidades al icono de menu
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const body = document.body;

abrir.addEventListener("click", () => {
  nav.classList.add("header__nav--visible");
  body.classList.add("body--activo");
})
cerrar.addEventListener("click", () => {
  nav.classList.remove("header__nav--visible");
  body.classList.remove("body--activo");
})
// Aqui finaliza la asignacion de funcionalidades al icono de menu para la opcion hamburguesa



// Aqui empieza la funcionalidad para cambiar de formularios (cliente - negocio) con los botones al hacer click.


/*El código JavaScript anterior funciona de la siguiente manera:

Cuando se carga la página, el formulario de negocio se oculta.
Cuando se hace clic en el botón "Cliente", se oculta el formulario de negocio, se inserta el formulario de cliente al principio del elemento div con id vista y luego se muestra el formulario de cliente.
Cuando se hace clic en el botón "Negocio", se oculta el formulario de cliente, se inserta el formulario de negocio al principio del elemento div con id vista y luego se muestra el formulario de negocio. */
$(document).ready(function () {
  $("#formularioNegocio").hide();
  $("#botonCliente").click(function () {
    $("#formularioNegocio").css("display", "none");
    $("#vista").append($("#formularioCliente"));
    $("#formularioCliente").show();
  });

  $("#botonNegocio").click(function () {
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

// async function formRegistro(datos, url) {
//   // try {
//   //   const respuesta = await fetch(url, {
//   //     method: "POST",
//   //     headers: { "Content-Type": "application/json" },
//   //     body: JSON.stringify(datos)
//   //   });

//   //   if (!respuesta.ok) {
//   //     throw new Error("Error al enviar los datos");
//   //   }

//   //   const data = await respuesta.json();
//   //   console.log("Datos recibidos: ", data);

//   //   return data;
//   // } catch (error) {
//   //   console.error("Error: ", error);
//   //   throw error;
//   // }
// }

//Aqui empieza la funcionaliad para guardar la información en el localstorage de la inscripción de cliente

function formRegistro(datos, url){
  const configuracion = {
    method: 'POST',
    body: JSON.stringify(datos),
    headers: {'Content-type': 'application/json'}
  };
  fetch(url, configuracion)
  .then(response => {
    return response.json()
  })
  .then(data => {
    console.log(data);
  })
}
const signupFormCliente = document.querySelector('#formulario-clientes');

signupFormCliente.addEventListener('submit', async (e) => {
  e.preventDefault();
  const typeDocument = document.querySelector('#tipo-documento').value;
  const numberDocument = document.querySelector('#numero-documento').value;
  const name = document.querySelector('#nombres-cliente').value;
  const surname = document.querySelector('#apellidos-cliente').value;
  const locality = document.querySelector('#tipo-localidad').value;
  const address = document.querySelector('#direccion-cliente').value;
  const email = document.querySelector('#email-cliente').value;
  const phone = document.querySelector('#telefono-cliente').value;
  const username = document.querySelector('#usuario-cliente').value;
  const password = document.querySelector('#clave-cliente').value;
  const password2 = document.querySelector('#clave-cliente-2').value;


  // Validar si las contraseñas son iguales
  if (password !== password2) {
    e.preventDefault();

    // Mostrar mensaje de error con Sweet Alert
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Las contraseñas no coinciden. Inténtalo de nuevo.',
    });

    // Evitar que se envíe el formulario
    return false;
  }

  // Validar la complejidad de la contraseña

  /*Explicación de la expresión regular:

  ^: Inicio de la cadena.
  (?=.*[a-z]): Afirmación previa que busca al menos una letra minúscula.
  (?=.*[A-Z]): Afirmación previa que busca al menos una letra mayúscula.
  (?=.*[0-9]): Afirmación previa que busca al menos un número.
  (?=.*[!@#$%^&*()_+=-]): Afirmación previa que busca al menos un símbolo.
  .: Coincide con cualquier carácter.
  {8,}: Coincide con al menos 8 caracteres.
  $: Fin de la cadena.
  */
  const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+=-]).{8,}$/;

  if (!regexPassword.test(password)) {
    e.preventDefault();
    Swal.fire({
      icon: 'info',
      title: 'Oops...',
      text: 'La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una minúscula, un número y un símbolo.',
    });
    return false;
  }

  // Validar el correo electrónico

  /*Explicación de la expresión regular:
  
  ^: Inicio de la cadena.
  (([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+")): Coincide con la parte local del correo electrónico.
  @: Coincide con el símbolo "@".
  ((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$: Coincide con el nombre de dominio del correo electrónico.
  $: Fin de la cadena.
  */
  const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!regexEmail.test(email)) {
    e.preventDefault();
    Swal.fire({
      icon: 'info',
      title: 'Oops...',
      text: 'Por favor ingresa un correo electrónico válido.',
    });
    return false;
  }

  // Inicializar una variable que reciba los datos que serán guardados en el JSON (array de datos)
  const Users = JSON.parse(localStorage.getItem('users')) || []
  // Verificamos si el correo electrónico que se trata de ingresar se encuentra registrado o no
  const isUserRegistered = Users.find(user => user.email === email) || Users.find(user => user.username === username)

  // Si el correo ya existe, nos mostrara un mensaje de alerta diciendo que ya se encuentra registrado el correo
  if (isUserRegistered) {
    // Mostrar mensaje de error con Sweet Alert
    Swal.fire({
      icon: 'warning',
      title: 'Oops...',
      text: 'El correo o nombre de usuario que ingresaste, ya se encuentra registrado.',
    });
    return false;
  }
  // Si el correo no se encuentra registrado, que le permita guardarlo
  Users.push({
    name: name,
    email: email,
    username: username
  })
  //Convertimos los datos en cadenas para almacenarlos
  localStorage.setItem('users', JSON.stringify(Users))
  // Mostraremos que el usuario se registro con exito
  
  // Aqui inicia el fetch
  let datos = {
    typeDocument: typeDocument, 
    numberDocument: numberDocument, 
    name: name, 
    surname: surname, 
    locality: locality,
    address: address,
    email: email, 
    phone: phone, 
    username: username,
    password: password
  };
  let url = 'http://localhost:8080/usuariocliente/crearUsuarioCliente';
  try{
    const respuesta = await formRegistro(datos, url);
  } catch(error){
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'No se pudo hacer el registro',
    });
  }

  Swal.fire({
    icon: 'success',
    title: '¡felicitaciones!',
    text: 'Registro fue exitoso.',
    onClose: () => {
      window.locality.href = "../paginaLogin/index.html";
    }
  });
  // Limpiar el formulario
  signupFormCliente.reset();
});
//Aqui termina la funcionaliad para guardar la información en el localstorage de la inscripción de cliente


//Aqui empieza la funcionaliad para guardar la información en el localstorage de la inscripción de negocio
const signupFormBusiness = document.querySelector('#formulario-negocio');

signupFormBusiness.addEventListener('submit', async(e) => {
  e.preventDefault();
  const typeDocumentBusiness = document.querySelector('#tipo-documento-negocio').value;
  const numberDocumentBusiness = document.querySelector('#numero-documento-negocio').value;
  const nameBusiness = document.querySelector('#nombres-negocio').value;
  const localityBusiness = document.querySelector('#tipo-localidad-negocio').value;
  const addressBusiness = document.querySelector('#direccion-negocio').value;
  const typeBusiness = document.querySelector('#tipo-negocio').value;
  const emailBusiness = document.querySelector('#email-negocio').value;
  const phoneBusiness = document.querySelector('#telefono-negocio').value;
  const usernameBusiness = document.querySelector('#usuario-negocio').value;
  const passwordBusiness = document.querySelector('#clave-negocio').value;
  const passwordBusiness2 = document.querySelector('#clave-negocio-2').value;

  // Validar si las contraseñas son iguales
  if (passwordBusiness !== passwordBusiness2) {
    e.preventDefault();

    // Mostrar mensaje de error con Sweet Alert
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Las contraseñas no coinciden. Inténtalo de nuevo.',
    });

    // Evitar que se envíe el formulario
    return false;
  }

  // Validar la complejidad de la contraseña

  /*Explicación de la expresión regular:

  ^: Inicio de la cadena.
  (?=.*[a-z]): Afirmación previa que busca al menos una letra minúscula.
  (?=.*[A-Z]): Afirmación previa que busca al menos una letra mayúscula.
  (?=.*[0-9]): Afirmación previa que busca al menos un número.
  (?=.*[!@#$%^&*()_+=-]): Afirmación previa que busca al menos un símbolo.
  .: Coincide con cualquier carácter.
  {8,}: Coincide con al menos 8 caracteres.
  $: Fin de la cadena.
  */
  const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+=-]).{8,}$/;
  if (!regexPassword.test(passwordBusiness)) {
    e.preventDefault();
    Swal.fire({
      icon: 'info',
      title: 'Oops...',
      text: 'La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una minúscula, un número y un símbolo.',
    });
    return false;
  }

  // Validar el correo electrónico

  /*Explicación de la expresión regular:

  ^: Inicio de la cadena.
  (([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+")): Coincide con la parte local del correo electrónico.
  @: Coincide con el símbolo "@".
  ((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$: Coincide con el nombre de dominio del correo electrónico.
  $: Fin de la cadena.
  */
  const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!regexEmail.test(emailBusiness)) {
    e.preventDefault();
    Swal.fire({
      icon: 'info',
      title: 'Oops...',
      text: 'Por favor ingresa un correo electrónico válido.',
    });
    return false;
  }

  // Inicializar una variable que reciba los datos que serán guardados en el JSON (array de datos)
  const Users = JSON.parse(localStorage.getItem('users')) || []
  // Verificamos si el correo electrónico que se trata de ingresar se encuentra registrado o no
  const isUserRegisteredBusiness = Users.find(user => user.email === emailBusiness) || Users.find(user => user.username === usernameBusiness)
  // Si el correo ya existe, nos mostrara un mensaje de alerta diciendo que ya se encuentra registrado el correo
  if (isUserRegisteredBusiness) {
    // Mostrar mensaje de error con Sweet Alert
    Swal.fire({
      icon: 'warning',
      title: 'Oops...',
      text: 'El correo o nombre de usuario que ingresaste, ya se encuentra registrado.',
    });
    return false;
  }
  // Si el correo no se encuentra registrado, que le permita guardarlo
  Users.push({
    name: nameBusiness,
    email: emailBusiness,
    username: usernameBusiness,
  })
  //Convertimos los datos en cadenas para almacenarlos
  localStorage.setItem('users', JSON.stringify(Users))
  
   // Aqui inicia el fetch
   let datos = {
    typeDocument: typeDocumentBusiness, 
    numberDocument: numberDocumentBusiness, 
    name: nameBusiness,
    locality: localityBusiness,
    address: addressBusiness,
    typeBusiness: typeBusiness,
    email: emailBusiness, 
    phone: phoneBusiness, 
    username: usernameBusiness,
    password: passwordBusiness
  };
  let url = 'http://localhost:8080/usuariotienda/crearUsuarioTienda';
  try{
    const respuesta = await formRegistro(datos, url);
  } catch(error){
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'No se pudo hacer el registro',
    });
  }
  // Mostraremos que el usuario se registro con exito

  Swal.fire({
    icon: 'success',
    title: '¡felicitaciones!',
    text: 'Registro fue exitoso.',
    onClose: () => {
      window.locality.href = '../paginaLogin/index.html'
    }
  });
  signupFormBusiness.reset();
});
//Aqui finaliza la funcionaliad para guardar la información en el localstorage de la inscripción de negocio.

