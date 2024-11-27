// controlador es igual a archivo js para manipular la interfaz gráfica
// estructura y diseño --> controlar la GUI (1. detectar eventos 2. controlar contenido 3. cambio de diseño)
// ---> etapa dos conectarse con el api (1. establecer servicios (consumir apis))

/* 
Objetivos:

1. recoger los datos de un formulario

pasos:

1. Asignamos una id a cada input, select o textarea del formulario
2. Asignar una id a cada botón de envío de formulario
3. A cada id asignado le creo una variable en js

el DOM es un mapa que le cuenta a js toda la información. en js DOM ES document.

4. Asociar a cada variable el id que se configuró en HTML

*/

import { guardarPaciente } from "../services/serviciosPaciente.js";

let cajaNombre=document.getElementById("nombrePaciente");
let cajaAnioNacimiento=document.getElementById("nacimientoPaciente");
let cajaCiudad=document.getElementById("ciudadPaciente");
let cajaCorreo=document.getElementById("correoPaciente");
let cajaTelefono=document.getElementById("telefonoPaciente");
let cajaIps=document.getElementById("ipsPaciente");
let cajaFechaAfiliacion=document.getElementById("fechaAfiliacionPaciente");
let cajaGrupoIngreso=document.getElementById("selectGrupoIngresoPaciente");
let cajaAsegurado=document.getElementById("tienePolizaPaciente");

let botonRegistroPaciente=document.getElementById("botonRegistroPaciente");

/*
 5. Detectar el evento de clic en el boton
*/

botonRegistroPaciente.addEventListener("click", function(evento){
    
    evento.preventDefault(); // Para cuando se use el submit
/*
 6. Recoger los datos (los atributos del objeto se deben nombrar tal cual que en JAVA en la capa de modelos)
*/  
let datosFormularioPaciente={
    nombre:cajaNombre.value,
    anioNacimiento:cajaAnioNacimiento.value,
    ciudad:cajaCiudad.value,
    correo:cajaCorreo.value,
    telefono:cajaTelefono.value,
    ips:cajaIps.value,
    tienePoliza:cajaAsegurado.value,
    grupoIngreso:cajaGrupoIngreso.value,
    fechaAfiliacion:cajaFechaAfiliacion.value
};

guardarPaciente(datosFormularioPaciente)
.then(function(respuestaBack){
    console.log(respuestaBack);
    Swal.fire({
        title: "Buen trabajo!",
        text: "Ya haces parte de nuestra Familia!",
        icon: "success"
    });
})

console.log(datosFormularioPaciente);
    cajaNombre.value = '';
    cajaAnioNacimiento.value = '';
    cajaCiudad.value = '';
    cajaCorreo.value = '';
    cajaTelefono.value = '';
    cajaIps.value = '';
    cajaFechaAfiliacion.value = '';
    cajaGrupoIngreso.value = '';
    cajaAsegurado.value = '';

}); // perro guardian es el que escucha todo
