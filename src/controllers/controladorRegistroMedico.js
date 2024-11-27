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

import { guardarMedico } from "../services/servicioMedico.js";

let cajaNombre = document.getElementById("nombreMedico");
let cajaMatricula = document.getElementById("matriculaMedico");
let cajaEspecialidad = document.getElementById("especialidadMedico");
let cajaSalario = document.getElementById("salarioMedico");
let cajaIps = document.getElementById("ipsMedico");
let cajaCorreo = document.getElementById("correoMedico");
let cajaTelefono = document.getElementById("telefonoMedico");
let cajaDireccion = document.getElementById("direccionMedico");
let cajaDisponible = document.getElementById("disponibleMedico");

let botonRegistroMedico = document.getElementById("botonRegistroMedico");

/*
 5. Detectar el evento de clic en el boton
*/

botonRegistroMedico.addEventListener("click", function(evento){
    evento.preventDefault(); // Para cuando se use el submit
    

      /*
    6. Recoger los datos (los atributos del objeto se deben nombrar tal cual que en JAVA en la capa de modelos)
    */

    let datosFormularioMedico = {
        nombre:cajaNombre.value,
        matricula:cajaMatricula.value,
        especialidad:cajaEspecialidad.value,
        salario:cajaSalario.value,
        ipsAsociado:cajaIps.value,
        correo:cajaCorreo.value,
        telefono:cajaTelefono.value,
        direccion:cajaDireccion.value,
        estaDisponibleFindesemana:cajaDisponible.value
    }

    guardarMedico(datosFormularioMedico)
.then(function(respuestaBack){
    console.log(respuestaBack);

    Swal.fire({
        title: "Buen trabajo!",
        text: "Hemos registrado tus datos!!",
        icon: "success"
      });
      
})


    console.log(datosFormularioMedico);

        cajaNombre.value = '';
        cajaMatricula.value = '';
        cajaEspecialidad.value = '';
        cajaSalario.value = '';
        cajaIps.value = '';
        cajaCorreo.value = '';
        cajaTelefono.value = '';
        cajaDireccion.value = '';
        cajaDisponible.value = '';
});// perro guardian es el que escucha todo