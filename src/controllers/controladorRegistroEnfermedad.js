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

let cajaNombre = document.getElementById("nombreEnfermedad");
let cajaSintomas = document.getElementById("sintomasEnfermedad");
let cajaClasificacion = document.getElementById("clasificacionEnfermedad");
let cajaGrado = document.getElementById("gradoEnfermedad");
let cajaProbabilidadVivir = document.getElementById("probabilidadVivir");

let botonRegistroEnfermedad = document.getElementById("botonRegistroEnfermedad");

/*
 5. Detectar el evento de clic en el boton
*/

botonRegistroEnfermedad.addEventListener("click", function(evento){
    evento.preventDefault(); // Para cuando se use el submit
    Swal.fire({
        title: "Buen trabajo!",
        text: "Enfermedad registrada!",
        icon: "success"
      });

/*
 6. Recoger los datos (los atributos del objeto se deben nombrar tal cual que en JAVA en la capa de modelos)
*/

let datosFormularioEnfermedad = {
    nombre:cajaNombre.value,
    sintomas:cajaSintomas.value,
    clasificacion:cajaClasificacion.value,
    grado:cajaGrado.value,
    probabilidadVivir:cajaProbabilidadVivir.value
}
console.log(datosFormularioEnfermedad);

cajaNombre.value = '';
cajaClasificacion.value = '';
cajaGrado.value = '';
cajaProbabilidadVivir.value = '';
botonRegistroEnfermedad.value = '';

});