export async function guardarMedicamento(datosMedicamento) {
    // pasos para guardar

    // 1. para donde voy - URL del servicio
    const URL="http://localhost:8080/api/medicamento"

    // 2. que se va a hacer 

    let peticion = {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(datosMedicamento)
    }

    // 3. ARRANCAR 
    let respuestaInicial = await fetch(URL, peticion)
    let respuestaFinal = await respuestaInicial.json()

    return respuestaFinal
    
}

export async function consultarMedicamento() {
    // pasos para consumir apis

    // 1. para donde voy - URL del servicio
    const URL="http://localhost:8080/api/medicamento"

    // 2. que se va a hacer - configuro la petición
    let peticion={
        method:"GET"
    }

    // 3. ARRANCAR - Consumir el API
    let respuestaInicial = await fetch(URL, peticion)
    let respuestaFinal = await respuestaInicial.json()

    return respuestaFinal

}

