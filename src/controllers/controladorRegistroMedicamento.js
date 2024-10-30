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
let cajaNombreMedicamento = document.getElementById("nombreMedicamento");
let cajaPresentacionMedicamento = document.getElementById("presentacionMedicamento");
let cajaDosisMedicamento = document.getElementById("dosisMedicamento");
let cajaLaboratorioMedicamento = document.getElementById("laboratorioMedicamento");
let cajaFechaCaducidadMedicamento = document.getElementById("fechaCaducidadMedicamento");
let cajaContraIndicacionesMedicamento = document.getElementById("contraIndicacionesMedicamento");
let cajaRegistroInvimaMedicamento = document.getElementById("registroInvimaMedicamento");
let cajaTieneCoopagoMedicamento = document.getElementById("tieneCoopagoMedicamento");

let botonRegistroMedicamento = document.getElementById("botonRegistroMedicamento");

/*
 5. Detectar el evento de clic en el boton
*/


botonRegistroMedicamento.addEventListener("click", function(evento){
    evento.preventDefault(); // Para cuando se use el submit
    Swal.fire({
        title: "Buen trabajo!",
        text: "Hemos registrado tu Signo Vital !",
        icon: "success"
      });

    /*
    6. Recoger los datos (los atributos del objeto se deben nombrar tal cual que en JAVA en la capa de modelos)
    */

    let datosFormularioMedicamento = {
        nombre:cajaNombreMedicamento.value,
        presentacion:cajaPresentacionMedicamento.value,
        dosis:cajaDosisMedicamento.value,
        laboratorio:cajaLaboratorioMedicamento.value,
        fechaCaducidad:cajaFechaCaducidadMedicamento.value,
        contraIndicaciones:cajaContraIndicacionesMedicamento.value,
        registroInvima:cajaRegistroInvimaMedicamento.value,
        tieneCoopago:cajaTieneCoopagoMedicamento.value
    }
    console.log(datosFormularioMedicamento);
    // limpiar el formulario
    cajaNombreMedicamento.value = '';
    cajaPresentacionMedicamento.value = '';
    cajaDosisMedicamento.value = '';
    cajaLaboratorioMedicamento.value = '';
    cajaFechaCaducidadMedicamento.value = '';
    cajaContraIndicacionesMedicamento.value = '';
    cajaRegistroInvimaMedicamento.value = '';
    cajaTieneCoopagoMedicamento.value = '';
});// perro guardian es el que escucha todo

