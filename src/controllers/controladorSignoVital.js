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

import { guardarSignoVital } from "../services/servicioSignoVital.js";

let cajaNombre=document.getElementById("nombreSignovital");
let cajaValor=document.getElementById("valorSignovital");
let cajaFechaSignoVital=document.getElementById("fechaSignovital");

let botonRegiostroSignoVital=document.getElementById("botonRegistroSignoVital");

/*
 5. Detectar el evento de clic en el boton
*/

botonRegiostroSignoVital.addEventListener("click", function(evento){
    evento.preventDefault(); // Para cuando se use el submit
    

    /*
    6. Recoger los datos (los atributos del objeto se deben nombrar tal cual que en JAVA en la capa de modelos)
    */

    let datosFormularioSignoVital={
        nombre:cajaNombre.value,
        valor:cajaValor.value,
        fechaMedida:cajaFechaSignoVital.value
    };

    guardarSignoVital(datosFormularioSignoVital)
    .then(function(respuestaBack){
        console.log(respuestaBack);
        Swal.fire({
            title: "Buen trabajo!",
            text: "Hemos registrado tu Signo Vital !",
            icon: "success"
          });
    })

    console.log(datosFormularioSignoVital);

    // limpiar formulario
    cajaNombre.value = '';
    cajaValor.value = '';
    cajaFechaSignoVital.value = '';
});// perro guardian es el que escucha todo