// Se crea la clase de productos
class Paquete {
    id = 0;
    img = "";
    nombre = "";
    tienda = "";
    ubicacion = "";
    descripcion = "";
    cantidad = 0;
    precioRegular = 0.0;
    precioFinal = 0.0;
    categoria = "";
    descuento = 0.0;

    constructor(id, img, nombre, tienda, ubicacion, descripcion, cantidad, precioRegular, precioFinal, categoria) {
        this.id = id;
        this.img = img;
        this.nombre = nombre;
        this.tienda = tienda;
        this.ubicacion = ubicacion;
        this.descripcion = descripcion;
        this.cantidad = cantidad;
        this.precioRegular = precioRegular;
        this.precioFinal = precioFinal;
        this.categoria = categoria;
        this.descuento = this.calcularDescuento();
    }
    calcularDescuento() {
        return this.precioRegular - this.precioFinal;
    }
}

// Se crean los productos y se agregan al arreglo paquetes 

// Se define el arreglo paquetes
// Obtenemos los paquetes del local Storage
const localPaquetes = localStorage.getItem("paquetes");
// Convertir los paquetes de JSON a objeto y si no se le asigna un array vacio
let paquetes = JSON.parse(localPaquetes) ?? [];

if (!JSON.parse(localPaquetes)) {
    let paquete1 = new Paquete(
        1101,
        './img/paqueteDulce.jpg',
        "Paquete dulce",
        "Cafeteria los antojitos de la Abuela",
        "Calle del Sueño Dorado, Nº 23",
        "Rollos de canela dulces horneados hechos con una masa de pan suave y esponjosa.",
        5,
        20000,
        15000,
        "Panaderia"
    );

    let paquete2 = new Paquete(
        1102,
        './img/rollosCanela.jpg',
        "Rollos de Canela",
        "Palmeritas",
        "Avenida de los Suspiros, Nº 7B",
        "Rollos de canela dulces horneados hechos con una masa de pan suave y esponjosa.",
        5,
        20000,
        15000,
        "Antojitos"
    );

    let paquete3 = new Paquete(
        1103,
        './img/baguette.jpg',
        "Baguette",
        "Horno Celestial",
        "Rincón Estrellas, Calle Luna, Nº 42",
        "Rollos de canela dulces horneados hechos con una masa de pan suave y esponjosa.",
        5,
        10000,
        8000,
        "Panaderia"
    );

    let paquete4 = new Paquete(
        1104,
        './img/croissants.jpg',
        "Croissants del Paraíso",
        "Cafeteria Hybrid",
        "Paseo de los Deseos, Nº 11A",
        "Rollos de canela dulces horneados hechos con una masa de pan suave y esponjosa.",
        5,
        20000,
        15000,
        "Panaderia"
    );

    let paquete5 = new Paquete(
        1105,
        './img/galletas.jpg',
        "Variedad de Galletas",
        "Pan de la Abuela",
        "Plaza del Arcoíris, Nº 9C",
        "Rollos de canela dulces horneados hechos con una masa de pan suave y esponjosa.",
        5,
        20000,
        15000,
        "Antojitos"
    );

    let paquete6 = new Paquete(
        1106,
        './img/donas.jpg',
        "Donas",
        "Dunkin Donuts",
        "Travesía de la Imaginación, Nº 88",
        "Rollos de canela dulces horneados hechos con una masa de pan suave y esponjosa.",
        5,
        20000,
        15000,
        "Pasteleria"
    );

    let paquete7 = new Paquete(
        1107,
        './img/tartas.jpg',
        "Tartas Frescas",
        "Dulce Éxtasis",
        "Calle del Silencio Mágico, Nº 3D",
        "Rollos de canela dulces horneados hechos con una masa de pan suave y esponjosa.",
        5,
        20000,
        15000,
        "Pasteleria"
    );

    let paquete8 = new Paquete(
        1108,
        './img/panesIntegral.jpg',
        "Panes Integrales",
        "Panaderia J.J.",
        "Avenida Mariposas Brillantes, Nº 27",
        "Rollos de canela dulces horneados hechos con una masa de pan suave y esponjosa.",
        5,
        25000,
        22000,
        "Panaderia"
    );

    let paquete9 = new Paquete(
        1109,
        './img/tortaChocolate.jpg',
        "Torta de Chocolate",
        "Panaderia J.J.",
        "Avenida Mariposas Brillantes, Nº 27",
        "Rollos de canela dulces horneados hechos con una masa de pan suave y esponjosa.",
        5,
        20000,
        15000,
        "Antojitos"
    );

    let paquete10 = new Paquete(
        1110,
        './img/muffin.jpg',
        "Muffin",
        "El Rincon del Pan",
        "Carrera de los Fantásticos, Nº 64",
        "Rollos de canela dulces horneados hechos con una masa de pan suave y esponjosa.",
        5,
        20000,
        15000,
        "Antojitos"
    );

    let paquete11 = new Paquete(
        1111,
        './img/panQueso.jpg',
        "Panecillos de Queso",
        "Sabor Artesano",
        "Pasaje de los Sueños, Nº 13E",
        "Rollos de canela dulces horneados hechos con una masa de pan suave y esponjosa.",
        5,
        20000,
        15000,
        "Panaderia"
    );

    // Se agregan al arreglo los objetos 
    paquetes.push(
        paquete1,
        paquete2,
        paquete3,
        paquete4,
        paquete5,
        paquete6,
        paquete7,
        paquete8,
        paquete9,
        paquete10,
        paquete11,
    );
}

// Creando productos en el HTML
async function convertirHtmlTexto(file) {
    let info = "";

    await fetch(file)
        .then(response => response.text())
        .then(data => { info = data })
        .catch(error => { console.error('Error al cargar el contenido:', error) });

    return info;
}

async function cargarComponenteHtml(file, component) {
    let data = await convertirHtmlTexto(file);
    if (document.getElementById(component)) {
        document.getElementById(component).innerHTML = data;
    }
}

async function mostrarProductosHtml() {
    let listadopaquetes = '';
    let text = await convertirHtmlTexto('card.html');

    for (let i = 0; i < paquetes.length; i++) {
        listadopaquetes = listadopaquetes + reemplazarAtributos(text, paquetes[i]);
    }

    document.getElementById('cards').innerHTML = listadopaquetes;
}

function reemplazarAtributos(text, paquete) {
    text = text.replaceAll('{{id}}', paquete.id);
    text = text.replaceAll('{{img}}', paquete.img);
    text = text.replaceAll('{{nombre}}', paquete.nombre);
    text = text.replaceAll('{{descripcion}}', paquete.descripcion);
    text = text.replaceAll('{{tienda}}', paquete.tienda);
    text = text.replaceAll('{{ubicacion}}', paquete.ubicacion);
    text = text.replaceAll('{{precioRegular}}', paquete.precioRegular);
    text = text.replaceAll('{{precioFinal}}', paquete.precioFinal);
    text = text.replaceAll('{{descuento}}', paquete.descuento);

    return text;
}

// Si existe el id cards estoy en la pagina de productos y muestro los productos sino no los muestro.
if (document.getElementById('cards')) {
    mostrarProductosHtml();
}

if (document.querySelector('.formulario')) {
    // Creando nuevos productos desde el formulario
    // Seleccionando los input del html para poder manipularlos 
    const inputImg = document.querySelector("#formImg");
    const inputNombre = document.querySelector("#formNombre");
    const inputDescripcion = document.querySelector("#formDescripcion");
    const inputTienda = document.querySelector("#formTienda");
    const inputUbicacion = document.querySelector("#formUbicacion");
    const inputRegular = document.querySelector("#formRegular");
    const inputFinal = document.querySelector("#formFinal");
    const boton = document.querySelector(".formulario");

    // Agregar un evento para cuando se precione el boton
    boton.addEventListener("submit", agregarProducto); // Sin () para que no llame directamente la función

    function agregarProducto(e) {
        e.preventDefault(); // Elimina acciones previas (solo con tipo submit)

        //Creamos un objeto con las propiedades de la clase Paquete
        const nuevoDato = new Paquete(
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
        localStorage.setItem("paquetes", JSON.stringify(paquetes));
        // Redireccionandonos a pantalla de productos
        window.location.href = "productos.html";
    }
}

const inputBuscar = document.querySelector(".buscadorFiltro__buscar");
const btnBuscar = document.querySelector(".buscadorFiltro__btn");

// inputBuscar.addEventListener("keydowm", (e) => {
//     if(e.key === "Enter"){

//     }
// });

// Buscar  por nombre
btnBuscar.addEventListener("click", function () {
    const entradaText = inputBuscar.value.toLowerCase();
    if (entradaText == "") {
        const localPaquetes = localStorage.getItem("paquetes");
        // Convertir los paquetes de JSON a objeto y si no se le asigna un array vacio
        paquetes = JSON.parse(localPaquetes) ?? [];
    }
    paquetes = paquetes.filter(entrada => {
        return entrada.nombre.toLowerCase().includes(entradaText);
    });
    console.log(paquetes);
    mostrarProductosHtml();
});

// Filtrar por precio

const inputOrdenar = document.querySelector(".buscadorFiltro__ordenar");

inputOrdenar.addEventListener("change", ordenar);

function ordenar() {
    const valor = inputOrdenar.value;
    switch (valor) {
        case "opcionMenor":
            paquetes = paquetes.sort((a, b) => {
                return a.precioFinal - b.precioFinal;
            });
            mostrarProductosHtml();
            break;
        case "opcionMayor":
            paquetes = paquetes.sort((b, a) => {
                return a.precioFinal - b.precioFinal;
            });
            mostrarProductosHtml();
            break;
        default:
            const localPaquetes = localStorage.getItem("paquetes");
            // Convertir los paquetes de JSON a objeto y si no se le asigna un array vacio
            paquetes = JSON.parse(localPaquetes) ?? [];
            mostrarProductosHtml();
            break;
    }
};

// Logica del carrito de compras
document.addEventListener("DOMContentLoaded", function (e) {
    console.log(e.target);
    const botonAgregarProducto = document.querySelector("#cards");
    let listaCompras = JSON.parse(localStorage.getItem("listaCompras")) ?? [];
    botonAgregarProducto.addEventListener("click", agregarCarrito);

    function agregarCarrito(e) {
        let contenedor = e.target.parentElement;
        while (contenedor) {
            if (contenedor.classList.contains("card__contenedorBtn")) {
                break;
            }
            contenedor = contenedor.parentElement;
        }

        if (contenedor.classList.contains("card__contenedorBtn")) {
            const agregar = paquetes.find(a => a.id == contenedor.dataset.id);

            if (listaCompras.find(a => a.id == contenedor.dataset.id)) {
                listaCompras = listaCompras.map(pq => {
                    if (pq.id == contenedor.dataset.id) {
                        pq.cantidad++;
                        return pq;
                    } else {
                        return pq;
                    }
                });
            } else {
                listaCompras = [...listaCompras, agregar];
                console.log("listaCompras");
            }
        }
        console.log(listaCompras);
        localStorage.setItem('listaCompras', JSON.stringify(listaCompras));
    }
});


