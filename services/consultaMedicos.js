export async function consultarMedicos(){
    //consumiendo 
    //1.CONOCER LA DIRECCION DEL API
    //API O SERVICIO
    let url="https://apigestorapp.vercel.app/gestionapp/especialistas"
    
    //2. configurar a que voy al API
    //CONFIGURANDO LA REQUEST O PETICION
    let peticion={
        method:"GET",        
    }

    //3.CONSUMIR
    //TRAER LOS DATOS DEL API
    let respuesta=await fetch(url,peticion)
    let medicos=await respuesta.json()

    return(medicos)

}