import { medicosSimulados } from "../data/simuladorMedico.js";

let fila = document.getElementById("fila");
// debo recorrer los datos de la base de datos para pintarlos, en este caso la base de datos es simulada desde /data

// a continuación hacemos un for each de los datos simulados, para hacer un TRAVERSING

medicosSimulados.forEach(function(medico){
    console.log(medico);

    let columna = document.createElement("div");
    columna.classList.add("col");

    let tarjeta = document.createElement("div");
    tarjeta.classList.add("card", "h-100", "p-5", "shadow");

    let etiquetaNombre = document.createElement("h3");
    etiquetaNombre.classList.add("text-center");
    etiquetaNombre.textContent = medico.nombre;

    let etiquetaIcono = document.createElement("img");
    etiquetaIcono.classList.add("img-fluid", "w-50", "p-3", "mx-auto", "d-block");
    etiquetaIcono.src = "../../assets/img/doctor.png";

    let etiquetaMatricula = document.createElement("h4");
    etiquetaMatricula.classList.add("text-start", "textoSura");
    etiquetaMatricula.textContent = medico.matricula;

    let etiquetaEspecialidad = document.createElement("h4");
    etiquetaEspecialidad.classList.add("text-start");
    etiquetaEspecialidad.textContent = medico.especialidad;

    let etiquetaSalario = document.createElement("h4");
    etiquetaSalario.classList.add("text-start");
    etiquetaSalario.textContent = `$${medico.salario}`;

    let etiquetaCorreo = document.createElement("h4");
    etiquetaCorreo.classList.add("text-start", "textoSura");
    etiquetaCorreo.textContent = `${medico.correo}`;

    let etiquetaIpsAsociado = document.createElement("h4");
    etiquetaIpsAsociado.classList.add("text-start");
    etiquetaIpsAsociado.textContent = `${medico.ipsAsociado}`;

    let etiquetaTelefono = document.createElement("h4");
    etiquetaTelefono.classList.add("tex-start");
    etiquetaTelefono.textContent = `${medico.telefono}`;

    let etiquetaDireccion = document.createElement("h4");
    etiquetaDireccion.classList.add("tex-start");
    etiquetaDireccion.textContent = `${medico.direccion}`;

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
    tarjeta.appendChild(etiquetaMatricula);
    tarjeta.appendChild(etiquetaEspecialidad);
    tarjeta.appendChild(etiquetaSalario);
    tarjeta.appendChild(etiquetaCorreo);
    tarjeta.appendChild(etiquetaIpsAsociado);
    tarjeta.appendChild(etiquetaTelefono);
    tarjeta.appendChild(etiquetaDireccion);
    tarjeta.appendChild(eliminar);
    tarjeta.appendChild(editar);


    columna.appendChild(tarjeta);
    fila.appendChild(columna);
})

