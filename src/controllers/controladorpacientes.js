//Importaciones
import {capturarDatos} from '../formularios/formularioPacientes.js'



// etiquetas que controlo:
let etiquetaNombres=document.getElementById("nombre")
let etiquetaDocumentos=document.getElementById("documentos")
let etiquetaRegimen=document.getElementById("regimen")
let etiquetaGrupoIngresos=document.getElementById("grupoIngresos")
let etiquetaTelefonoPaciente=document.getElementById("telefonoPaciente")
let etiquetaCorreoPaciente=document.getElementById("correoPaciente")
let etiquetaCuotaModeradora=document.getElementById("cuotaModeradora")
let etiquetaBoton=document.getElementById("btnRegistrar")



//detectar el evento de clic
etiquetaBoton.addEventListener("click", function(evento){
    
    evento.preventDefault()
    capturarDatos(etiquetaNombres,etiquetaDocumentos,etiquetaRegimen,etiquetaGrupoIngresos,etiquetaTelefonoPaciente,etiquetaCorreoPaciente,etiquetaCuotaModeradora)
    
})
