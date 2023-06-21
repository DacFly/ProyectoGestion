function crearNuevoEv(){ 
    var titulo = document.getElementById('evento').value;
    var fechaPublicacion = document.getElementById('fechaPublicacion').value;
    var fechaEvento = document.getElementById('fechaEvento').value;
    var hora = document.getElementById('hora').value;
    var descripcion = document.getElementById('descripcion').value;
    var direccion = document.getElementById('direccion').value;

    // Crear el objeto de evento con los valores del formulario
    var id= parseInt(sessionStorage.getItem("id"));
    var nuevoEvento = {
      idEvento: 0, // Cambiar el valor del usuarioId según corresponda
      usuarioId:  id,
      titulo:titulo,
      fechaPublicacion:fechaPublicacion,
      fechaEvento:fechaEvento,
      hora:hora,
      descripcion:descripcion,
      direccion:direccion
    };
      // Realizar la solicitud POST a la API para crear el evento
      fetch('https://localhost:7088/Evento/CrearEvento',{
        method:"POST",
        headers :{"Content-type" : "application/json"} ,
        body : JSON.stringify(nuevoEvento)
      }).then(response => { 
        swal("¡Evento creado!", "El evento ha sido creado exitosamente.", "success");
      })
      .catch( swal("Error", "Ocurrió un error al crear el evento. Por favor, inténtalo nuevamente.", "error"));
}
