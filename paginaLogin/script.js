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