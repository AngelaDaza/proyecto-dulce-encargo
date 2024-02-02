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

/*//Validar
function validarYEnviar() {

    //Validación simple 
     let nombre = document.getElementById('nombre').value;
     let email = document.getElementById('email').value;
     let telefono = document.getElementById('telefono').value;
     let mensaje = document.getElementById('mensaje').value;
 
     if (nombre === '' || email === '' || telefono === '' || mensaje === '') {
         alert('');
         return('');
     } 
     //Enviar datos
     enviarDatos(nombre, email, telefono, mensaje);{
 
     }
     function enviarDatos(nombre, email, telefono, mensaje){
 
     }
  }*/
  function submitForm() {
    // Obtener valores de los campos
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const type = document.getElementById('typeDocument').value;
    const number = document.getElementById('numberDocument').value;
    const phone = document.getElementById('cel').value;
    const reason = document.getElementById('reason').value;
    const message = document.getElementById('message').value;

    // Verificar si los campos requeridos están llenos
    if (name.trim() === '' || email.trim() === '' || type.trim() === ''|| number.trim() === '' || phone.trim() === '' || reason.trim() === '' || message.trim() === '')  {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor, completa todos los campos.',
        });
    } else {
        // Aquí puedes agregar lógica para enviar el formulario (por ejemplo, mediante AJAX)
        Swal.fire({
            icon: 'success',
            title: 'Éxito',
            text: 'Formulario enviado con éxito!',
        });
    }
}

