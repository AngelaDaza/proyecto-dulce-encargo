// Se define el arreglo paquetes
// Obtenemos los paquetes del local Storage
const localCompras = localStorage.getItem("listaCompras");
// Convertir los paquetes de JSON a objeto y si no se le asigna un array vacio
let compras = JSON.parse(localCompras) ?? [];
console.log(compras);



document.addEventListener('DOMContentLoaded', () =>{
    const contenedorCompras = document.querySelector('.contenedorDos');
    
    compras.forEach(compra => {
        const {id: idProducto,
            img: imagenProducto, 
            nombre: nombreProducto,
            descripcion: desProducto,
            precioFinal: precioFinalProducto,
            cantidad: cantidadProducto
        } = compra;
        // Contenedor Principal
        const divCard = document.createElement("div");
        divCard.classList.add("contenedorP");

        // Contenedor de check
        const divCheck = document.createElement("div");
        divCheck.classList.add("contenedorP__divCheck");
        const check = document.createElement("input");
        check.classList.add("contenedorP__check");
        check.type = "checkbox";
        check.onchange = reaccionCheck;
        console.log(check.type);
        divCheck.appendChild(check);
        divCard.appendChild(divCheck);

        // Contenedor imagen
        const divImagen = document.createElement("div");
        divImagen.classList.add("contenedorP__imagen");
        const imagen = document.createElement("img");
        imagen.classList.add("contenedorP__img");
        imagen.src = "../productos/" + imagenProducto;
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
        const parrafoPrecio = document.createElement("p");
        parrafoPrecio.classList.add("contenedorP_parrafo-precio");
        parrafoPrecio.textContent = precioFinalProducto;
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
        const XD = compras.map(producto => {
            if(producto.id == this.parentElement.dataset.id){
                producto.cantidad++;
                this.nextElementSibling.value++;
                return producto;
            }else{
                return producto;
            }
        });

        localStorage.setItem('listaCompras', JSON.stringify(compras));
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
                return producto;
            }else{
                return producto;
            }
        });

        localStorage.setItem('listaCompras', JSON.stringify(compras));
    }

    function eliminarProducto(div){
        let padre = div.parentElement;
        while (padre) {
            padre = padre.parentElement;
            console.log(padre);

            if (padre.classList.contains('contenedorP')) {
                padre.remove();
                break;
            }
        }
    }
});