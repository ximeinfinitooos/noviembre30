import {registrarMedico} from "../../services/registrarMedico.js"

export function validarFormulario(datos){
    
    //Referencias a etiquetas que quiero validar 
    let etiquetaNombre=document.getElementById("nombres")
    let etiquetaDocumento=document.getElementById("documento")
    let etiquetaRegistro=document.getElementById("registroMedico")

    //Validemos 3 campos de formulario
    //nombre-documento-registro del medico
    let nombresMedico=datos.nombre
    let documentoMedico=datos.documento
    // let registroMedico=datos.registro

    //agregar todos los caminos posibles para validar el formulario
    if (nombresMedico=="" && documentoMedico==""){
        etiquetaNombre.classList.add("is-invalid")
        etiquetaDocumento.classList.add("is-invalid")
        etiquetaRegistro.classList.add("is-invalid")
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Nombre y documento son obligatorios',
            
          })
    }else if(nombresMedico=="" && documentoMedico!=""){        
        etiquetaNombre.classList.add("is-invalid")
        etiquetaDocumento.classList.remove("is-invalid")
    }else if(nombresMedico!="" && documentoMedico==""){        
        etiquetaNombre.classList.remove("is-invalid")
        etiquetaDocumento.classList.add("is-invalid")
    }else{
        registrarMedico(datos)
        etiquetaNombre.classList.remove("is-invalid")
        etiquetaDocumento.classList.remove("is-invalid")
    }

}