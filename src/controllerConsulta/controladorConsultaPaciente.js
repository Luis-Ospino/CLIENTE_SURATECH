//import { pacientesSimulados } from "../data/simuladorPaciente.js";

import { consultarPacientes } from "../services/serviciosPaciente.js";

consultarPacientes()
.then(function(respuestaBack){
    let fila = document.getElementById("fila");
// debo recorrer los datos de la base de datos para pintarlos

respuestaBack.forEach(function(paciente){
    console.log(paciente);
    
    // aplicando traversing

    // 1. creo una columna para cada paciente
    let columna = document.createElement("div");
    columna.classList.add("col");

    // 2. creo una tarjeta para cada paciente 
    let tarjeta = document.createElement("div");
    tarjeta.classList.add("card", "h-100", "p-5", "shadow");

    // 3. creo una etiqueta para el nombre de cada paciente
    let etiquetaNombre = document.createElement("h3");
    etiquetaNombre.classList.add("text-center");
    etiquetaNombre.textContent = paciente.nombre;

    let etiquetaIcono = document.createElement("img");
    etiquetaIcono.classList.add("img-fluid", "w-50", "p-3", "mx-auto", "d-block");
    etiquetaIcono.src="../../assets/img/pain.png";

    let etiquetaIPS = document.createElement("h4");
    etiquetaIPS.classList.add("text-start");
    etiquetaIPS.textContent = "IPS: " + paciente.ips;

    let etiquetaCorreo = document.createElement("h4");
    etiquetaCorreo.classList.add("text-start", "textoSura");
    etiquetaCorreo.textContent = "Correo: " + paciente.correo;

    let etiquetaTelefono = document.createElement("h4");
    etiquetaTelefono.classList.add("text-start");
    etiquetaTelefono.textContent = "Teléfono: " + paciente.telefono;

    let etiquetaAnioNacimiento = document.createElement("h4");
    etiquetaAnioNacimiento.classList.add("text-start");
    etiquetaAnioNacimiento.textContent = "Año nacimiento: " + paciente.aniNacimiento;

    let etiquetaCiudad= document.createElement("h4");
    etiquetaCiudad.classList.add("text-start");
    etiquetaCiudad.textContent = "Ciudad: " + paciente.ciudad;

    let etiquetaGrupoIngreso= document.createElement("h4");
    etiquetaGrupoIngreso.classList.add("text-start");
    etiquetaGrupoIngreso.textContent = "Grupo Ingreso: " + paciente.grupoIngreso;

    let etiquetaFechaAfiliacion= document.createElement("h4");
    etiquetaFechaAfiliacion.classList.add("text-start");
    etiquetaFechaAfiliacion.textContent = "Fecha Afiliación: " + paciente.fechaAfiliacion;

    let eliminar = document.createElement("button");
    eliminar.classList.add("btn", "btn-danger", "w-25", "menu");

    let iconoBasura = document.createElement("i");
    iconoBasura.classList.add("bi", "bi-trash-fill");

    let editar = document.createElement("button");
    editar.classList.add("btn", "btn-warning", "w-25", "my-2", "menu");

    let iconoEditar = document.createElement("i");
    iconoEditar.classList.add("bi", "bi-pencil-fill");
    

    // 4. asocio las etiquetas
    eliminar.appendChild(iconoBasura);
    editar.appendChild(iconoEditar);
    
    tarjeta.appendChild(etiquetaNombre);
    tarjeta.appendChild(etiquetaIcono);
    tarjeta.appendChild(etiquetaIPS);
    tarjeta.appendChild(etiquetaCorreo);
    tarjeta.appendChild(etiquetaTelefono);
    tarjeta.appendChild(etiquetaAnioNacimiento);
    tarjeta.appendChild(etiquetaCiudad);
    tarjeta.appendChild(etiquetaGrupoIngreso);
    tarjeta.appendChild(etiquetaFechaAfiliacion);
    tarjeta.appendChild(eliminar);
    tarjeta.appendChild(editar);

    columna.appendChild(tarjeta);
    fila.appendChild(columna);
})
})


