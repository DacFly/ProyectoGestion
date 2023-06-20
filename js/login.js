var btn = document.getElementById('btn');




function logueo(){
            // Datos del formulario

            fetch("https://localhost:7088/Usuario/listaUsuario")
            .then(respuesta => respuesta.json())//recibe los datos en formato json
           .then((datosrepuesta) => {
           console.log(datosrepuesta)//Muestra el resultado de la peticion
           })
           .catch(console.log)//muestra errores 
}
    
