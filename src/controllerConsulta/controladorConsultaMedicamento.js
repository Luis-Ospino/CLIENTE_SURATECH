// import { medicamentosSimulados } from "../data/simuladorMedicamento.js";

import {consultarMedicamento} from "../services/serviciosMedicamento.js";

consultarMedicamento()
.then(function(respuestaBack){


let fila = document.getElementById("fila");

respuestaBack.forEach(function(medicamento){
    console.log(medicamento);

    let columna = document.createElement("div");
    columna.classList.add("col");

    let tarjeta = document.createElement("div");
    tarjeta.classList.add("card", "h-100", "p-5", "shadow");

    let etiquetaNombre = document.createElement("h3");
    etiquetaNombre.classList.add("text-center");
    etiquetaNombre.textContent = medicamento.nombre;

    let etiquetaIcono = document.createElement("img");
    etiquetaIcono.classList.add("img-fluid", "w-50", "p-3", "mx-auto", "d-block");
    etiquetaIcono.src = "../../assets/img/medicine.png";

    let etiquetaPresentacion = document.createElement("h4");
    etiquetaPresentacion.classList.add("text-start");
    etiquetaPresentacion.textContent =`Presentación: ${medicamento.presentacion}`;

    let etiquetaDosis = document.createElement("h4");
    etiquetaDosis.classList.add("text-start");
    etiquetaDosis.textContent = `Dosis: ${medicamento.dosis}`;

    let etiquetaLaboratorio = document.createElement("h4");
    etiquetaLaboratorio.classList.add("text-star");
    etiquetaLaboratorio.textContent = `Laboratorio: ${medicamento.laboratorio}`;

    let etiquetaFechaVencimiento = document.createElement("h4");
    etiquetaFechaVencimiento.classList.add("text-star");
    etiquetaFechaVencimiento.textContent = `Fecha vencimiento: ${medicamento.fechaCaducidad}`;

    let etiquetaRegistroInvima = document.createElement("h4");
    etiquetaRegistroInvima.classList.add("text-star");
    etiquetaRegistroInvima.textContent = `Registro INVIMA: ${medicamento.registroInvima}`;

    let eliminar = document.createElement("button");
    eliminar.classList.add("btn", "btn-danger", "w-25", "menu");

    let iconoBasura = document.createElement("i");
    iconoBasura.classList.add("bi", "bi-trash-fill");

    let editar = document.createElement("button");
    editar.classList.add("btn", "btn-warning", "w-25", "my-2", "menu");

    let iconoEditar = document.createElement("i");
    iconoEditar.classList.add("bi", "bi-pencil-fill");

    eliminar.appendChild(iconoBasura);
    editar.appendChild(iconoEditar);

    tarjeta.appendChild(etiquetaNombre);
    tarjeta.appendChild(etiquetaIcono);
    tarjeta.appendChild(etiquetaPresentacion);
    tarjeta.appendChild(etiquetaDosis);
    tarjeta.appendChild(etiquetaLaboratorio);
    tarjeta.appendChild(etiquetaFechaVencimiento);
    tarjeta.appendChild(etiquetaRegistroInvima);
    tarjeta.appendChild(eliminar);
    tarjeta.appendChild(editar);

    columna.appendChild(tarjeta);
    fila.appendChild(columna);
})

});