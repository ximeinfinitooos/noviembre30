import {validarFormulario} from'./ValidacionFormularioPacientes.js'
//creamos una funcion que nos permita recibir los datos del formulario
export function capturarDatos(etiquetaNombres,etiquetaDocumentos,etiquetaRegimen,etiquetaGrupoIngresos,etiquetaTelefonoPaciente,etiquetaCorreoPaciente,etiquetaCuotaModeradora){

    let nombresPaciente=etiquetaNombres.value
    let documentoPaciente=etiquetaDocumentos.value
    let regimen=etiquetaRegimen.value
    let grupodeingreso=etiquetaGrupoIngresos.value
    let telefonoPaciente=etiquetaTelefonoPaciente.value
    let correoPaciente=etiquetaCorreoPaciente.value
    let cuotamoderadora=etiquetaCuotaModeradora.value
    
    
    // console.log(nombresMedico)
    // console.log(documentoMedico)
    // console.log(especialidadMedico)

    //debemos almacenar todos los valores del formulario en una sola variable
    //OBJETO= almacenar varios datos en 1 solo espacio de memoria
    let datosformularioPacientes={
        nombre:nombresPaciente,
        documentos:documentoPaciente,
        regimen:regimen,
        grupoIngresos:grupodeingreso,
        telefonoPaciente:telefonoPaciente,
        correoPaciente:correoPaciente,
        cuotaModeradora:cuotamoderadora, 
        
    }
    
    validarFormulario(datosformularioPacientes)
}