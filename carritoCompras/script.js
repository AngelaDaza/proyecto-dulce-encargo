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
// Se define el arreglo paquetes
// Obtenemos los paquetes del local Storage
const localCompras = localStorage.getItem("listaCompras");
// Convertir los paquetes de JSON a objeto y si no se le asigna un array vacio
let compras = JSON.parse(localCompras) ?? [];
console.log(compras);



document.addEventListener('DOMContentLoaded', () =>{
    const contenedorCompras = document.querySelector('.contenedorDos');
    
    compras.forEach(compra => {
        console.log(compra);
        const {id: idProducto,
            urlImage: imagenProducto, 
            name: nombreProducto,
            description: desProducto,
            finalPrice: precioFinalProducto,
            cantidad: cantidadProducto
        } = compra;
        // Contenedor Principal
        const divCard = document.createElement("div");
        divCard.id = "card__producto";
        divCard.classList.add("contenedorP");
        divCard.dataset.id = idProducto;

        // Contenedor imagen
        const divImagen = document.createElement("div");
        divImagen.classList.add("contenedorP__imagen");
        const imagen = document.createElement("img");
        imagen.classList.add("contenedorP__img");
        imagen.src = imagenProducto;
        console.log(imagen.src);
        divImagen.appendChild(imagen);
        divCard.appendChild(divImagen);

        // Contenedor Titulo Descripcion
        const divContenido = document.createElement("div");
        divContenido.classList.add("contenedorP_titulo-descripcion");

        const divTitulo = document.createElement("div");
        divTitulo.classList.add("contenedorP_titulo");

        const hTitle = document.createElement("h4");
        hTitle.classList.add("contenedorP_h-title");
        hTitle.textContent = nombreProducto;
        divTitulo.appendChild(hTitle);
        divContenido.appendChild(divTitulo);

        const divDescripcion = document.createElement("div");
        divDescripcion.classList.add("contenedorP_descripcion");
        const parrafo = document.createElement("p");
        parrafo.classList.add("contenedorP_parrafo");
        parrafo.textContent = desProducto;
    
        divDescripcion.appendChild(parrafo);
        divContenido.appendChild(divDescripcion);
        divCard.appendChild(divContenido);

        // Contenedor precio
        const divPrecio = document.createElement("div");
        divPrecio.classList.add("contenedorP_precio");
        const ptitulo = document.createElement("h4");
        ptitulo.classList.add("contenedorP_tituloP");
        ptitulo.textContent = "Precio";
        const parrafoPrecio = document.createElement("p");
        parrafoPrecio.classList.add("contenedorP_parrafo-precio");
        parrafoPrecio.textContent = cantidadProducto * precioFinalProducto;
        divPrecio.appendChild(ptitulo);
        divPrecio.appendChild(parrafoPrecio);
        divCard.appendChild(divPrecio);

        // Contenedor cantidad
        const divMasMenos = document.createElement("div");
        divMasMenos.classList.add("contenedorP_mas-menos");
        divMasMenos.dataset.id = idProducto;

        const botonMas = document.createElement("button");
        botonMas.classList.add("contenedorP_btn-mas");
        botonMas.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
            <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clip-rule="evenodd" />
            </svg>
        `;
        botonMas.addEventListener('click', aumentarProducto);
        divMasMenos.appendChild(botonMas);

        const inputCantidad = document.createElement("input");
        inputCantidad.classList.add("contenedorP_cantidad");
        inputCantidad.disabled = true;
        inputCantidad.value = cantidadProducto;
        divMasMenos.appendChild(inputCantidad);

        const botonMenos = document.createElement("button");
        botonMenos.classList.add("contenedorP_btn-menos");
        botonMenos.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
            <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm3 10.5a.75.75 0 0 0 0-1.5H9a.75.75 0 0 0 0 1.5h6Z" clip-rule="evenodd" />
            </svg>      
        `;
        botonMenos.addEventListener('click', disminuirProducto);
        divMasMenos.appendChild(botonMenos);
        divCard.appendChild(divMasMenos);

        console.log(divCard);
        contenedorCompras.appendChild(divCard);
    });

    /** Funcion para mostrar compra en resumen de compra **/
    recorrerListaCompras();

    function reaccionCheck(e){
        if(this.checked) {
            // Checkbox is checked..
            console.log("TRUE");
        } else {
            // Checkbox is not checked..
            console.log("FALSE");
        }
    }

    function aumentarProducto(e){
        const productoAumentado = compras.map(producto => {
            console.log(producto);
            if(producto.id == this.parentElement.dataset.id){
                producto.cantidad++;
                this.nextElementSibling.value++;
                const contenedorPrecio = retornarHermano(this, 'contenedorP', 'contenedorP_precio').childNodes;
                contenedorPrecio[1].textContent = producto.cantidad * producto.finalPrice;
                return producto;
            }else{
                return producto;
            }
        });

        localStorage.setItem('listaCompras', JSON.stringify(compras));
        recorrerListaCompras();
    }

    function disminuirProducto(e) {
        if(this.previousElementSibling.value == 1){
            eliminarProducto(this);
            return;
        }

        
        compras.map(producto => {
            if(producto.id == this.parentElement.dataset.id){
                producto.cantidad--;
                this.previousElementSibling.value--;
                const contenedorPrecio = retornarHermano(this, 'contenedorP', 'contenedorP_precio').childNodes;
                contenedorPrecio[1].textContent = producto.cantidad * producto.finalPrice;
                return producto;
            }else{
                return producto;
            }
        });

        localStorage.setItem('listaCompras', JSON.stringify(compras));
        recorrerListaCompras();
    }

    function eliminarProducto(div){
        let padre = div.parentElement;
        while (padre) {
            padre = padre.parentElement;
            console.log(padre);

            if (padre.classList.contains('contenedorP')) {
                console.log(padre);
                padre.remove();
                compras = compras.filter(prod => prod.id != padre.dataset.id);
                break;
            }
        }

        localStorage.setItem('listaCompras', JSON.stringify(compras));
        recorrerListaCompras();
    }


    function retornarHermano(elemento, padre, hijoDelPadre){
        let contenedorPadre = elemento;

        while(!contenedorPadre.classList.contains(padre)){
            contenedorPadre = contenedorPadre.parentElement;
        }

        let hijosPadre = contenedorPadre.firstChild;
 
        while(!hijosPadre.classList?.contains(hijoDelPadre)){
            hijosPadre = hijosPadre.nextElementSibling;
        }
        return hijosPadre;
    }
});

//* Recorre la lista de compras para crear los datos de la tabla}
function recorrerListaCompras(){
    //! Variable donde agregaremos la informacion
    const datosTabla = document.querySelector(".contenedorTres__tabla-body");
    limpiarHTMLPrevio(datosTabla);
    console.log(compras);
    compras.forEach(compra => {
        datosTabla.appendChild(crearFilaResumenCompra(compra));
    })
    const totalHTML = document.querySelector('.contenedorTres__cantidad');
    const total = compras.reduce((acumulador, prod) => acumulador+= prod.cantidad * prod.finalPrice, 0);
    console.log(total);
    totalHTML.value = total;
}

//* Funcion que crea la fila par insertar en la tabla
function crearFilaResumenCompra(producto){
    const {name,cantidad, finalPrice} = producto;

    const tr = document.createElement("tr");

    const tdNombre = document.createElement("td");
    tdNombre.textContent = name;

    const tdCantidad = document.createElement("td");
    tdCantidad.textContent = cantidad;

    const tdPrecioFinal = document.createElement("td");
    const totalCompra = cantidad * finalPrice;
    tdPrecioFinal.textContent = totalCompra;

    tr.appendChild(tdNombre);
    tr.appendChild(tdCantidad);
    tr.appendChild(tdPrecioFinal);

    return tr;}
//Petición fetch POST 
    // Agregar un evento para cuando se precione el boton
    async function crearCompra(){ 
        let amount = compras[0].cantidad;
        console.log(amount);
        let hora = document.querySelector("#hora").value;// Elimina acciones previas (solo con tipo submit)
        let fecha= new Date().toISOString().split('T')[0];

    //Uso de la base de datos
    let datos = {
        date: fecha,
        amount: amount,
        hour: hora,
        statusShopping: "En proceso",
        usuarioCliente: {
            id: 2
        },
        producto: {
            id: 1
        }
    };
    const url = 'http://localhost:8080/compras/crearCompra';
    const configuracion = {
        method: 'POST',
        body: JSON.stringify(datos),
        headers: {'Content-Type': 'application/json'}
    };
    try{
    const respuesta = await fetch(url, configuracion)
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data);
    })
    } catch(error){
    Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'No se pudo hacer el registro',
    });
    }
    // Redireccionandonos a pantalla de productos
    window.location.href = '../perfil cliente/index.html';
};

function limpiarHTMLPrevio(padre){
    let elemento = padre.firstChild;

    while(elemento){
        elemento.remove();
        elemento = padre.firstChild;
    }
}

