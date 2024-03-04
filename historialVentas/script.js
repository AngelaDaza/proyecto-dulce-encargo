let Clientes = [];
let Productos = [];
let Ventas = [];
let VentasCliente = [];
let VentasMes = [];

function obtenerDatos() {
    fetch('./data.json').then(response => {
        if (!response.ok) { throw new Error('Error al cargar el archivo JSON'); }
        return response.json();
    })
        .then(datos => {
            Clientes = datos.Cliente;
            Productos = datos.Producto;
            Ventas = datos.Venta;

            cargarCliente();
        })
        .catch(error => { console.error(error); });
}

function cargarCliente() {
    let select = document.getElementById("clientes");

    for (let i = 0; i < Clientes.length; i++) {
        let option = document.createElement("option");

        option.value = Clientes[i].Id;
        option.text = Clientes[i].Nombre;

        select.add(option);
    }
}

function selectCliente() {
    let valorSelect = document.getElementById("clientes").value;
    let pc = Productos.filter(p => p.Id_Cliente == valorSelect);
    VentasCliente = Ventas.filter(v => pc.find(p => p.Id == v.Id_Producto));
    let year = [];

    for (let i = 0; i < VentasCliente.length; i++) {
        let dato = new Date(VentasCliente[i].Fecha).getFullYear();
        if (year.filter(y => y == dato).length == 0) {
            year.push(dato);
        }
    }

    let componente = document.getElementById("years");

    while (componente.options.length > 0) {
        componente.remove(0);
    }

    let option = document.createElement("option");

    option.value = 0;
    option.text = "Seleccione Año";

    componente.add(option);

    for (let i = 0; i < year.length; i++) {
        let option = document.createElement("option");

        option.value = year[i];
        option.text = year[i];

        componente.add(option);
    }
}

function selectYear() {

    let valorSelect = document.getElementById("years").value;
    let ventasAño = VentasCliente.filter(v => new Date(v.Fecha).getFullYear() == parseInt(valorSelect));
    let meses = [];
        
    for (let i = 0; i < ventasAño.length; i++) {
        let dato = new Date(ventasAño[i].Fecha).getMonth();
        if (meses.filter(y => y == dato).length == 0) {
            meses.push(dato);
        }
    }
    
    let componente = document.getElementById("months");

    while (componente.options.length > 0) {
        componente.remove(0);
    }

    let option = document.createElement("option");

    option.value = 0;
    option.text = "Seleccione Mes";

    componente.add(option);

    for (let i = 0; i < meses.length; i++) {
        let option = document.createElement("option");

        option.value = meses[i];
        option.text = meses[i] + 1;

        componente.add(option);
    }
}

function selectMonth() {
    let valorSelectY = document.getElementById("years").value;
    let valorSelectM = document.getElementById("months").value;
    VentasMes = VentasCliente.filter(v => (new Date(v.Fecha).getMonth() == parseInt(valorSelectM)) && (new Date(v.Fecha).getFullYear() == parseInt(valorSelectY)));

    let ventas = "<tr>"+
                    "<th>Fecha</th>"+
                    "<th>Nombre</th>"+
                    "<th>Cantidad</th>"+
                    "<th>Valor</th>"+
                    "<th>Total</th>"+
                "</tr>";
    for(let i=0; i < VentasMes.length; i++){
        let producto = Productos.filter(p => p.Id == VentasMes[i].Id_Producto)[0];
        ventas = ventas + "<tr>"+
                                "<th>"+ VentasMes[i].Fecha +"</th>"+
                                "<th>"+ producto.Nombre +"</th>"+
                                "<th>"+ VentasMes[i].Cantidad +"</th>"+
                                "<th>"+ producto.Precio +"</th>"+
                                "<th>"+ VentasMes[i].Cantidad * producto.Precio +"</th>"+
                        "</tr>";
        VentasMes[i].Nombre = producto.Nombre;
    }

    document.getElementById("ventas").innerHTML = ventas;
}

function Grafica(){
        
    let datos = [["Nombre","Cantidad"]];    
    let options = {
        'title': "Grafica",//document.getElementById("titulo").value,
        'width': 350,
    };

    for (let i = 0; i < VentasMes.length; i++) {

        let nombre = VentasMes[i].Nombre;
        let cantidad = VentasMes[i].Cantidad + (datos.filter(i => i[0] == nombre) > 0 ? datos.filter(i => i[0] == nombre)[0][1] : 0)
        if (datos.filter(y => y[0] == nombre).length == 0) {
            datos.push([
                nombre,cantidad
            ]
          );
        }else{
            datos.filter(y => y[0] == nombre)[0][1] = cantidad;
        }
    }

    var data = google.visualization.arrayToDataTable(datos);
    

    if (document.getElementById("tipo").value == "circular") {
        let chart = new google.visualization.PieChart(document.getElementById('piechart'));
        chart.draw(data, options);
    } else {
        let chart = new google.visualization.ColumnChart(document.getElementById('piechart'));
        chart.draw(data, options);
    }
}

//Función que cargar el gràfico de Google
function cargarGrafico() {
    // Cargo el gráfico de Google
    google.charts.load('current', {
        'packages': ['corechart']
    });
    google.charts.setOnLoadCallback(Grafica);
}

obtenerDatos();



























//Variable que guarda la cantidad de datos a insertar en el gráfico
const nombre = document.querySelector(".nombre");
;
//agregar año
let cantidadMess;
//Este arreglo guardara los pares de elementos que se insertaran en el grafico:
//Se guardara en formato de arreglo. Ejemplo: 
//[['mes 1', 600],['mes 2', 200]]
let arregloDatos = [];

function ingresarAno() {
    alert('Se ha dado clic al botón!');


}

//Funciòn que agregar una dato mas
function agregarDato() {
    //tomo la cantidad de datos actual
    cantidadMess = document.getElementsByClassName("dato").length;
    //Le sumo 1
    cantidadMess++;

    //Creo un nuevo elemento div, que contendra los datos nuevos
    const dato = document.createElement("div");
    dato.className = "dato";

    //Creo el input de la dato y le asigno sus propiedades y clases
    const inputMes = document.createElement("input");
    inputMes.type = "text";
    inputMes.className = "serie";
    inputMes.placeholder = "" + cantidadMess;
    //Agrego el input al div datos
    dato.appendChild(inputMes);
    document.getElementById("datos").appendChild(dato);

    //Creo el input para el valor y le asigno sus propiedades y clases
    const inputValor = document.createElement("input");
    inputValor.type = "number";
    inputValor.className = "valor";
    inputValor.placeholder = "Cantidad " + cantidadMess;
    //Agrego el input al div datos
    dato.appendChild(inputValor);
    document.getElementById("datos").appendChild(dato);
}



// Dibujo el gráfico y coloco los valores
function drawChart() {
    arregloDatos = [];
    //Recupero los inputs que hay dentro del div datos
    let datos = document.getElementById("datos").getElementsByTagName("input");
    //El primer par [x,x] a insertar en arregloDatos debe ser info del grafico.
    //Esta info no es visible, por lo tanto es indistinto el valor que le asignemos

    //Controlo que todos los input tengan un valor cargado
    for (i = 0; i < datos.length; i++) {
        if (datos[i].value === "") {
            alert("Cargue todos los campos");
            return;
        }
    }
    let t = ['Gráfico', ''];
    arregloDatos.push(t);

    for (i = 0; i < datos.length; i = i + 2) {
        //voy agregando los pares al arreglo arreglo arregloDatos.
        t = [datos[i].value, parseInt(datos[i + 1].value)];
        arregloDatos.push(t);
    }



    //Genero la tabla que contiene los datos con el arreglo arregloDatos
    let data = google.visualization.arrayToDataTable(arregloDatos);



    // Opcional; Agrego el título del gráfico
    let options = {
        'title': document.getElementById("titulo").value,
        'width': 600,
    };

    // Muestro el gráfico dentro del elemento <div>  con id="piechart"
    //dependiendo del tipo de grafico
    if (document.getElementById("tipo").value == "circular") {
        let chart = new google.visualization.PieChart(document.getElementById('piechart'));
        chart.draw(data, options);
    } else {
        let chart = new google.visualization.ColumnChart(document.getElementById('piechart'));
        chart.draw(data, options);
    }

}