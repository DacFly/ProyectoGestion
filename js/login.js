var btn = document.getElementById('btn');




function logueo(){
            // Datos del formulario
            var correo =document.getElementById("user").value;
            var contrasena = document.getElementById("pass").value;

            fetch("https://localhost:7088/Evento/listaEventos")
            .then(respuesta => respuesta.json())//recibe los datos en formato json
           .then((datosrepuesta) => {
           // console.log('Datos',datosrepuesta.data)//Muestra el resultado de la peticion
           })
           .catch(console.log)//muestra errores
    
}
    
