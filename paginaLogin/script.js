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

function validarLogin() {
    let usuario = document.getElementById("usuario").value;
    let contraseña = document.getElementById("contraseña").value;

    let usuarios = obtenerUsuariosLocalStorage();
        
    let user = usuarios.find(user => user.nameUser == usuario && user.password == contraseña)
    if (user) {
        document.getElementById("contraseñaOlvidada").innerHTML = ""
        window.location.href = '../productos/productos.html'
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
