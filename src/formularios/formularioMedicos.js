import {validarFormulario} from'./validacionFormularioMedico.js'
//creamos una funcion que nos permita recibir los datos del formulario
export function capturarDatos(etiquetaNombre,etiquetaDocumento,etiquetaEspecialidad,etiquetaRegistro,etiquetacorreo,etiquetaMedico,etiquetadescripcion,etiquetafotografias){

    let nombresMedico=etiquetaNombre.value
    let documentoMedico=etiquetaDocumento.value
    let especialidadMedico=etiquetaEspecialidad.value
    let registroProfesional=etiquetaRegistro.value
    let CorreoMedico=etiquetacorreo.value
    let sedeMedico=etiquetaMedico.value
    let horarioMedico=etiquetaMedico.value
    let descripcion=etiquetadescripcion.value
    let fotografias=etiquetafotografias.value
    
    // console.log(nombresMedico)
    // console.log(documentoMedico)
    // console.log(especialidadMedico)

    //debemos almacenar todos los valores del formulario en una sola variable
    //OBJETO= almacenar varios datos en 1 solo espacio de memoria
    let datosformularioMedico={
        nombres:nombresMedico,
        documento:documentoMedico,
        especialidad:especialidadMedico,
        registro:registroProfesional,
        correo:CorreoMedico,
        sede:sedeMedico,
        horario:horarioMedico, 
        descripcion:descripcion,
        fotografia:fotografias,
    }

    console.log(datosformularioMedico)
    
    validarFormulario(datosformularioMedico)
}