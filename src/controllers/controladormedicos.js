//Importaciones
import {capturarDatos} from '../formularios/formularioMedicos.js'



// etiquetas que controlo:
let etiquetaNombre=document.getElementById("nombres")
let etiquetaBoton=document.getElementById("botonenvio")
let etiquetaDocumento=document.getElementById("documento")
let etiquetaEspecialidad=document.getElementById("especialidad")
let etiquetaregistroMedico=document.getElementById("registroMedico")
let etiquetacorreoMedico=document.getElementById("correoMedico")
let etiquetasedeMedico=document.getElementById("sedeMedico")
let etiquetahorarioMedico=document.getElementById("horarioMedico")
let etiquetadescripcion=document.getElementById("descripcion")
let etiquetafotografia=document.getElementById("fotografia")


//detectar el evento de clic
etiquetaBoton.addEventListener("click", function(evento){
    
    evento.preventDefault()
    capturarDatos(etiquetaNombre,etiquetaDocumento,etiquetaEspecialidad,etiquetaregistroMedico,etiquetacorreoMedico,etiquetasedeMedico,etiquetahorarioMedico,etiquetadescripcion,etiquetafotografia)
    
})
