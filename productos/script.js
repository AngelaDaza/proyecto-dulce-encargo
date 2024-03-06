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

// Se crea la clase de productos
// class Paquete {
//     id = 0;
//     img = "";
//     nombre = "";
//     tienda = "";
//     ubicacion = "";
//     descripcion = "";
//     cantidad = 0;
//     precioRegular = 0.0;
//     precioFinal = 0.0;
//     categoria = "";
//     descuento = 0.0;
//     stock = 0;

//     constructor(id, img, nombre, tienda, ubicacion, descripcion, cantidad, precioRegular, precioFinal, categoria, stock) {
//         this.id = id;
//         this.img = img;
//         this.nombre = nombre;
//         this.tienda = tienda;
//         this.ubicacion = ubicacion;
//         this.descripcion = descripcion;
//         this.cantidad = cantidad;
//         this.precioRegular = precioRegular;
//         this.precioFinal = precioFinal;
//         this.categoria = categoria;
//         this.stock = stock;
//         this.descuento = this.calcularDescuento();
//     }
//     calcularDescuento() {
//         return this.precioRegular - this.precioFinal;
//     }
// }

// // Se crean los productos y se agregan al arreglo paquetes 

// // Se define el arreglo paquetes
// // Obtenemos los paquetes del local Storage
// const localPaquetes = localStorage.getItem("paquetes");
// // Convertir los paquetes de JSON a objeto y si no se le asigna un array vacio
let paquetes = [];

// if (!JSON.parse(localPaquetes)) {
//     let paquete1 = new Paquete(
//         1101,
//         './img/paqueteDulce.jpg',
//         "Paquete dulce",
//         "Cafeteria los antojitos de la Abuela",
//         "Calle del Sueño Dorado, Nº 23",
//         "Rollos de canela dulces horneados hechos con una masa de pan suave y esponjosa.",
//         1,
//         5000,
//         2500,
//         "Panaderia",
//         5
//     );

//     let paquete2 = new Paquete(
//         1102,
//         './img/rollosCanela.jpg',
//         "Rollos de Canela",
//         "Palmeritas",
//         "Avenida de los Suspiros, Nº 7B",
//         "Rollos de canela dulces horneados hechos con una masa de pan suave y esponjosa.",
//         1,
//         2000,
//         1500,
//         "Antojitos",
//         5
//     );

//     let paquete3 = new Paquete(
//         1103,
//         './img/baguette.jpg',
//         "Baguette",
//         "Horno Celestial",
//         "Rincón Estrellas, Calle Luna, Nº 42",
//         "Rollos de canela dulces horneados hechos con una masa de pan suave y esponjosa.",
//         1,
//         2000,
//         1200,
//         "Panaderia",
//         5
//     );

//     let paquete4 = new Paquete(
//         1104,
//         './img/croissants.jpg',
//         "Croissants del Paraíso",
//         "Cafeteria Hybrid",
//         "Paseo de los Deseos, Nº 11A",
//         "Rollos de canela dulces horneados hechos con una masa de pan suave y esponjosa.",
//         1,
//         2000,
//         1500,
//         "Panaderia",
//         5
//     );

//     let paquete5 = new Paquete(
//         1105,
//         './img/galletas.jpg',
//         "Variedad de Galletas",
//         "Pan de la Abuela",
//         "Plaza del Arcoíris, Nº 9C",
//         "Rollos de canela dulces horneados hechos con una masa de pan suave y esponjosa.",
//         1,
//         5000,
//         2500,
//         "Antojitos",
//         5
//     );

//     let paquete6 = new Paquete(
//         1106,
//         './img/donas.jpg',
//         "Donas",
//         "Dunkin Donuts",
//         "Travesía de la Imaginación, Nº 88",
//         "Rollos de canela dulces horneados hechos con una masa de pan suave y esponjosa.",
//         1,
//         2000,
//         1500,
//         "Pasteleria",
//         5
//     );

//     let paquete7 = new Paquete(
//         1107,
//         './img/tartas.jpg',
//         "Tartas Frescas",
//         "Dulce Éxtasis",
//         "Calle del Silencio Mágico, Nº 3D",
//         "Rollos de canela dulces horneados hechos con una masa de pan suave y esponjosa.",
//         1,
//         20000,
//         15000,
//         "Pasteleria",
//         5
//     );

//     let paquete8 = new Paquete(
//         1108,
//         './img/panesIntegral.jpg',
//         "Panes Integrales",
//         "Panaderia J.J.",
//         "Avenida Mariposas Brillantes, Nº 27",
//         "Rollos de canela dulces horneados hechos con una masa de pan suave y esponjosa.",
//         1,
//         2500,
//         2000,
//         "Panaderia",
//         5
//     );

//     let paquete9 = new Paquete(
//         1109,
//         './img/tortaChocolate.jpg',
//         "Torta de Chocolate",
//         "Panaderia J.J.",
//         "Avenida Mariposas Brillantes, Nº 27",
//         "Rollos de canela dulces horneados hechos con una masa de pan suave y esponjosa.",
//         1,
//         20000,
//         15000,
//         "Antojitos",
//         5
//     );

//     let paquete10 = new Paquete(
//         1110,
//         './img/muffin.jpg',
//         "Muffin",
//         "El Rincon del Pan",
//         "Carrera de los Fantásticos, Nº 64",
//         "Rollos de canela dulces horneados hechos con una masa de pan suave y esponjosa.",
//         1,
//         2000,
//         1500,
//         "Antojitos",
//         5
//     );

//     let paquete11 = new Paquete(
//         1111,
//         './img/panQueso.jpg',
//         "Panecillos de Queso",
//         "Sabor Artesano",
//         "Pasaje de los Sueños, Nº 13E",
//         "Rollos de canela dulces horneados hechos con una masa de pan suave y esponjosa.",
//         1,
//         2000,
//         1500,
//         "Panaderia",
//         5
//     );

//     // Se agregan al arreglo los objetos 
//     paquetes.push(
//         paquete1,
//         paquete2,
//         paquete3,
//         paquete4,
//         paquete5,
//         paquete6,
//         paquete7,
//         paquete8,
//         paquete9,
//         paquete10,
//         paquete11,
//     );

//     localStorage.setItem("paquetes",JSON.stringify(paquetes));
// }

// Creando productos en el HTML
const urlProducto="http://localhost:8080/productos/obtenerTodosLosProductos";
async function convertirHtmlTexto(plantillaHTML) {
    try {
        const response = await fetch(plantillaHTML);
        if (!response.ok) {
            throw new Error(`Hubo un problema con la solicitud fetch: ${response.statusText}`);
        }
        return await response.text();
    } catch (error) {
        throw new Error(`Hubo un problema con la solicitud fetch: ${error.message}`);
    }
}
fetch(urlProducto)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Hubo un problema con la solicitud fetch: ${response.statusText}`);
        }
        return response.json(); // Llama a response.json() para obtener los datos
    })
    .then(data =>{
        if (document.getElementById('cards')) {
                mostrarProductosHtml(data);
            }paquetes = data})
    .catch(error => console.log(error));
    


// async function cargarComponenteHtml(urlProducto, component) {
//     const data = await convertirHtmlTexto(urlProducto);
//     if (document.getElementById(component)) {
//         document.getElementById(component).innerHTML = data;
//     }
// }
async function mostrarProductosHtml(productos) {
    try {
        let listadopaquetes = '';
        const cardTemplate = await convertirHtmlTexto('card.html');
        limpiarHTMLPrevio(document.getElementById("cards"));
        console.log(productos);
        productos.forEach(producto => {
            listadopaquetes += reemplazarAtributos(cardTemplate, producto);
        });
        console.log(listadopaquetes);

        document.getElementById('cards').innerHTML = listadopaquetes;
        
    } catch (error) {
        console.error('Error al mostrar los productos:', error);
    }
}

function reemplazarAtributos(text, productos) {
    const localPaquetes = [productos]; // Usar productos obtenidos en lugar de localStorage
    const cantidadCarritoCompras = localPaquetes.find(x => x.id === productos.id)?.aumont;
    console.log(productos);
    text = text.replaceAll('{{id}}', productos.id);
    text = text.replace('{{img}}', productos.urlImage);
    text = text.replace('{{nombre}}', productos.name);
    text = text.replace('{{descripcion}}', productos.description);
    text = text.replace('{{tienda}}', productos.idTienda.name);
    text = text.replace('{{ubicacion}}', productos.idTienda.address);
    text = text.replace('{{precioRegular}}', productos.regularPrice);
    text = text.replace('{{precioFinal}}', productos.finalPrice);
    text = text.replace('{{descuento}}', productos.discount);
    text = text.replace('{{clasesInput}}', cantidadCarritoCompras >0 ? 'card__contenedorBtn-stoke card__contenedorBtn-stoke--activo' : 'card__contenedorBtn-stoke');
    text = text.replace('{{cantidad}}', cantidadCarritoCompras);
    
    return text;
}

// Si existe el id cards estoy en la pagina de productos y muestro los productos sino no los muestro.
// if (document.getElementById('cards')) {
//     mostrarProductosHtml(listadopaquetes);
// }


if (document.querySelector('.formulario')) {
    // Creando nuevos productos desde el formulario
    // Seleccionando los input del html para poder manipularlos 
    const boton = document.querySelector('#formProducto');

    // Agregar un evento para cuando se precione el boton
    boton.addEventListener("submit", async (e) =>{
        e.preventDefault(); 
        const inputImg = document.querySelector("#formImg").value;
        const inputNombre = document.querySelector("#formNombre").value;
        const inputDescripcion = document.querySelector("#formDescripcion").value;
        const inputTienda = document.querySelector("#formTienda").value;
        const inputUbicacion = document.querySelector("#formUbicacion").value;
        const inputStock = document.querySelector("#formStock").value;
        const inputRegular = document.querySelector("#formRegular").value;
        const inputFinal = document.querySelector("#formFinal").value;
        const inputCategoria = document.querySelector("#categoria").value;// Elimina acciones previas (solo con tipo submit)

    //Creamos un objeto con las propiedades de la clase Paquete
    /*const nuevoDato = new Paquete(
        Date.now(),
        './img/rollosCanela.jpg',
        inputNombre.value,
        inputTienda.value,
        inputUbicacion.value,
        inputDescripcion.value,
        0,
        inputRegular.value,
        inputFinal.value,
        ""
    );
            
    // Agregando nuevo producto a la lista paquetes 
    paquetes.push(nuevoDato);
    //Guardando en local Storage
    localStorage.setItem("paquetes", JSON.stringify(paquetes));*/
    //Uso de la base de datos
    let datos = {
        name: inputNombre,
        urlImage: inputImg,
        description: inputDescripcion,
        stock: inputStock,
        regularPrice: inputRegular,
        finalPrice: inputFinal,
        category: inputCategoria,
        idTienda: {
            id: 2
        }
    };
    const url = 'http://localhost:8080/productos/crearProducto';
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
    window.location.href = '../perfil tienda/index.html';
})}; // Sin () para que no llame directamente la función


const inputBuscar = document.querySelector(".buscadorFiltro__buscar");
const btnBuscar = document.querySelector(".buscadorFiltro__btn");

// inputBuscar.addEventListener("keydowm", (e) => {
//     if(e.key === "Enter"){

//     }
// });

// Buscar  por nombre
btnBuscar.addEventListener("click", async function () {
    const entradaText = inputBuscar.value.toLowerCase();
    paquetes = paquetes.filter(entrada => {
        return entrada.name.toLowerCase().includes(entradaText);
    });
    await mostrarProductosHtml(paquetes);
});

// Filtrar por precio

const inputOrdenar = document.querySelector(".buscadorFiltro__ordenar");

inputOrdenar.addEventListener("change", ordenar);

async function ordenar() {
    const valor = inputOrdenar.value;
    switch (valor) {
        case "opcionMenor":
            paquetes = paquetes.sort((a, b) => {
                return a.finalPrice - b.finalPrice;
            });
            await mostrarProductosHtml(paquetes);
            break;
        case "opcionMayor":
            paquetes = paquetes.sort((b, a) => {
                return a.finalPrice - b.finalPrice;
            });
            await mostrarProductosHtml(paquetes);
            break;
        default:
            fetch(urlProducto)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Hubo un problema con la solicitud fetch: ${response.statusText}`);
                }
                return response.json(); // Llama a response.json() para obtener los datos
            })
            .then(data =>{
                if (document.getElementById('cards')) {
                        mostrarProductosHtml(data);
                    }paquetes = data})
            .catch(error => console.log(error));
            break;
    }
};

// Logica del carrito de compras
document.addEventListener("DOMContentLoaded", function (e) {
    const botonAgregarProducto = document.querySelector("#cards");
    botonAgregarProducto.addEventListener("click", agregarCarrito);
    let listaCompras = JSON.parse(localStorage.getItem('listaCompras')) ?? [];
    
    function agregarCarrito(e) {
        let contenedor = e.target.parentElement;
        while (contenedor) {
            if (contenedor.classList.contains("card__contenedorBtn")) {
                break;
            }
            contenedor = contenedor.parentElement;
        }
        console.log(contenedor);
        if (contenedor.classList.contains("card__contenedorBtn")) {
            const agregar = paquetes.find(a => a.id == contenedor.dataset.id);
            console.log(agregar);
            console.log(contenedor.dataset.id);
            const hijos=Array.from(contenedor.childNodes);
            const cantidad = hijos.find(ele => ele.classList?.contains("card__contenedorBtn-stoke"))

            if (listaCompras.find(a => a.id == contenedor.dataset.id)) {
                listaCompras = listaCompras.map(pq => {
                    if (pq.id == contenedor.dataset.id) {
                        pq.cantidad++;
                        cantidad.textContent = pq.cantidad;
                        if (!cantidad.classList.contains('card__contenedorBtn-stoke--activo')) {
                            cantidad.classList.add('card__contenedorBtn-stoke--activo');
                        }
                        return pq;
                    } else {
                        return pq;
                    }
                });
            } else {
                listaCompras = [...listaCompras, agregar];
                if (!cantidad.classList.contains('card__contenedorBtn-stoke--activo')) {
                    cantidad.classList.add('card__contenedorBtn-stoke--activo');
                    cantidad.textContent = 1;
                }
            }
        }
        localStorage.setItem('listaCompras', JSON.stringify(listaCompras));
    }

    //* Se agrega funcion de ir al carrito desde productos
    const btnIrCarrito = document.querySelector('.irCarrito');
    btnIrCarrito.addEventListener('click', () =>{
        window.location.href='/carritoCompras/carrito.html';
    });
});

 function limpiarHTMLPrevio(padre){
    let elemento = padre.firstChild;

    while(elemento){
        elemento.remove();
        elemento = padre.firstChild;
    }
}
