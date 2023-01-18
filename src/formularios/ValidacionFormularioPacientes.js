export function validarFormulario(datos){
    
    //Referencias a etiquetas que quiero validar 
    let etiquetaNombres=document.getElementById("nombre")
    let etiquetaDocumentos=document.getElementById("documentos")
    

    //Validemos 3 campos de formulario
    //nombre-documento-registro del medico
    let nombresPaciente=datos.nombre
    let documentoPaciente=datos.documentos
    // let registroMedico=datos.registro

    //agregar todos los caminos posibles para validar el formulario
    if (nombresPaciente=="" && documentoPaciente==""){
        etiquetaNombres.classList.add("is-invalid")
        etiquetaDocumentos.classList.add("is-invalid")        
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Nombre y documento son obligatorios',
            
          })
    }else if(nombresPaciente=="" && documentoPaciente!=""){        
        etiquetaNombres.classList.add("is-invalid")
        etiquetaDocumentos.classList.remove("is-invalid")
    }else if(nombresPaciente!="" && documentoPaciente==""){        
        etiquetaNombres.classList.remove("is-invalid")
        etiquetaDocumentos.classList.add("is-invalid")
    }else{
        etiquetaNombres.classList.remove("is-invalid")
        etiquetaDocumentos.classList.remove("is-invalid")
    }

}