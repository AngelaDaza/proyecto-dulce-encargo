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
async function validarLogin(){
    let usuario = document.getElementById("usuario").value;
    let contraseña = document.getElementById("contraseña").value;

    const datos={
        username: usuario,
        password: contraseña
    }
    const url = 'http://localhost:8080/usuariocliente/validarCredenciales'

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            // body: JSON.stringify(usuarioAdm)
            body: JSON.stringify(datos)
          };
          const response_guardar = await fetch(url, requestOptions)
          .then(response1=>{if (response1.status == 200) {
            window.location.href = '../perfil cliente/index.html';
            }else {
                const url2="http://localhost:8080/usuariotienda/validarCredenciales";
                const response_guardar2 = fetch(url2, requestOptions)
                .then(response2=>{if (response2.status == 200) {
                    window.location.href = '../perfil tienda/index.html';
                }else {
                    document.getElementById("contraseñaOlvidada").innerHTML = "Usuario invalido"}})
            }
            })

        }
    // Realizar la solicitud POST usando fetch



function obtenerContraseña() {
    let usuario = document.getElementById("usuario").value;

    let usuarios = obtenerUsuariosLocalStorage();

    let user = usuarios.find(user => user.nameUser == usuario);
    if (user) {
        let documento = prompt("Por favor digita tu numero de documento");        
        if (user.numberDocument == documento) {
            document.getElementById("contraseñaOlvidada").innerHTML = "Su contraseña es = " + user.password            
        } else {
            document.getElementById("contraseñaOlvidada").innerHTML = "Documento invalido"            
        }
    } else {        
        document.getElementById("contraseñaOlvidada").innerHTML = "Usuario no registrado"
    }
}
