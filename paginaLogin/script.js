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

    let usuarios = JSON.parse(localStorage.getItem("users"));    
    let user = usuarios.find(user => user.nameUser == usuario && user.password == contraseña)
    
    if(user){        
        window.location.href = '../productos/productos.html'
    }
    else{        
        alert("Usuario invalido")
    }    
}