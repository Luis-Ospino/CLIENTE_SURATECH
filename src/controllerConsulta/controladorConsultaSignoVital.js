import { signosVitalesSimulados } from "../data/simuladorSignoVital.js";

let fila = document.getElementById("fila");
// debo recorrer los datos de la base de datos para pintarlos, en este caso la base de datos es simulada desde /data

// a continuación hacemos un for each de los datos simulados, para hacer un TRAVERSING

signosVitalesSimulados.forEach(function(signoVital){
    console.log(signoVital);

    // procedemos con el traversing

    // 1. creo una columna para cada signo vital
    let columna = document.createElement("div");
    columna.classList.add("col");
    
    // 2. creo una tarjeta para cada signo vital
    let tarjeta = document.createElement("div");
    tarjeta.classList.add("card", "h-100", "p-5", "shadow");

    // 3. creo una etiqueta para el nombre de cada signo vital
    let etiquetaNombre = document.createElement("h3");
    etiquetaNombre.classList.add("text-center");
    etiquetaNombre.textContent = signoVital.nombre;

    // 4. creo una etiqueta para el icono del signo vital
    let etiquetaIcono = document.createElement("img");
    etiquetaIcono.classList.add("img-fluid", "w-50", "p-3", "mx-auto", "d-block");
    etiquetaIcono.src = "../../assets/img/vital-signs.png";

    // 5. creo una etiqueta para el nombre de cada signo vital
    let etiquetaValor = document.createElement("h4");
    etiquetaValor.classList.add("text-start");
    etiquetaValor.textContent = "Medición: "+signoVital.valor;

    // 6. creo una etiqueta para la fecha de cada signo vital
    let etiquetaFechaMedida = document.createElement("h4");
    etiquetaFechaMedida.classList.add("text-start");
    etiquetaFechaMedida.textContent = "Fecha: "+signoVital.fechaMedida;

    // 7. creo los botones con iconos para eliminar y editar
    let eliminar = document.createElement("button");
    eliminar.classList.add("btn", "btn-danger", "w-25", "menu");

    let iconoBasura = document.createElement("i");
    iconoBasura.classList.add("bi", "bi-trash-fill");

    let editar = document.createElement("button");
    editar.classList.add("btn", "btn-warning", "w-25", "my-2", "menu");

    let iconoEditar = document.createElement("i");
    iconoEditar.classList.add("bi", "bi-pencil-fill");


    // Tener en cuenta que hay que ir asociando las etiquetas con la tarjeta
    eliminar.appendChild(iconoBasura);
    editar.appendChild(iconoEditar);

    tarjeta.appendChild(etiquetaNombre);
    tarjeta.appendChild(etiquetaIcono);
    tarjeta.appendChild(etiquetaValor);
    tarjeta.appendChild(etiquetaFechaMedida);
    tarjeta.appendChild(eliminar);
    tarjeta.appendChild(editar);

    columna.appendChild(tarjeta);
    fila.appendChild(columna);
})

