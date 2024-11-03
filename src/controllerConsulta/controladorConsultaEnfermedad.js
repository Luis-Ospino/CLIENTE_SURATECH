import { enfermedadesSimuladas } from "../data/simuladorEnfermedad.js";

let fila = document.getElementById("fila");

enfermedadesSimuladas.forEach(function(enfermedad){
    console.log(enfermedad);

    let columna = document.createElement("div");
    columna.classList.add("col");

    let tarjeta = document.createElement("div");
    tarjeta.classList.add("card", "h-100", "p-5", "shadow");

    let etiquetaNombre = document.createElement("h3");
    etiquetaNombre.classList.add("text-center");
    etiquetaNombre.textContent = enfermedad.nombre;

    let etiquetaIcono = document.createElement("img");
    etiquetaIcono.classList.add("img-fluid", "w-50", "p-3", "mx-auto", "d-block");
    etiquetaIcono.src = "../../assets/img/enfermedadIcono.png";

    let etiquetaClasificacion = document.createElement("h4");
    etiquetaClasificacion.classList.add("text-star");
    etiquetaClasificacion.textContent = "Tipo: "+enfermedad.clasificacion;

    let etiquetaSintomas = document.createElement("h4");
    etiquetaSintomas.classList.add("text-star");
    etiquetaSintomas.textContent = "Sintomas: "+enfermedad.sintomas;

    let etiquetaGrado = document.createElement("h4");
    etiquetaGrado.classList.add("text-star");
    etiquetaGrado.textContent = "Grado: "+enfermedad.grado;

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
    tarjeta.appendChild(etiquetaClasificacion);
    tarjeta.appendChild(etiquetaSintomas);
    tarjeta.appendChild(etiquetaGrado);
    tarjeta.appendChild(eliminar);
    tarjeta.appendChild(editar);

    columna.appendChild(tarjeta);
    fila.appendChild(columna);
})