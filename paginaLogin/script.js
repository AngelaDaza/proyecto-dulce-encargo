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
function validarLogin(){
    let usuario = document.getElementById("usuario").value;
    let contraseña = document.getElementById("contraseña").value;

    let usuarios = obtenerUsuariosLocalStorage();
        
    let user = usuarios.find(user => user.nameUser == usuario && user.password == contraseña)
    if (user) {
        document.getElementById("contraseñaOlvidada").innerHTML = ""
        if (usuario=="pepito" || usuario=="eder"){
            window.location.href = '../perfil cliente/index.html'
        }else{
            window.location.href = '../perfil tienda/index.html'
        }
    }
    else {
        document.getElementById("contraseñaOlvidada").innerHTML = "Usuario invalido"
    }
}

function obtenerUsuariosLocalStorage(){
    let usuarios = JSON.parse(localStorage.getItem("users"));
    if(usuarios){
        return usuarios
    }
    return []
}

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
