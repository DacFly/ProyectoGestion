
function crearNuevoEv(){

    var titulo = document.getElementById('evento').value;
    var fechaPublicacion = document.getElementById('fechaPublicacion').value;
    var fechaEvento = document.getElementById('fechaEvento').value;
    var hora = document.getElementById('hora').value;
    var descripcion = document.getElementById('descripcion').value;
    var direccion = document.getElementById('direccion').value;

    // Crear el objeto de evento con los valores del formulario
    var nuevoEvento = {
      usuarioId: 5, // Cambiar el valor del usuarioId según corresponda
      titulo,
      fechaPublicacion,
      fechaEvento,
      hora,
      descripcion,
      direccion
    };

    try {
      // Realizar la solicitud POST a la API para crear el evento
      fetch('https://localhost:7088/Evento/CrearEvento', nuevoEvento);

      // Mostrar una alerta de éxito utilizando SweetAlert
      swal("¡Evento creado!", "El evento ha sido creado exitosamente.", "success");

      // Reiniciar el formulario
      document.getElementById('frmEventos').reset();
    } catch (error) {
      // Mostrar una alerta de error utilizando SweetAlert
      swal("Error", "Ocurrió un error al crear el evento. Por favor, inténtalo nuevamente.", "error");
      console.error(error);
    }
  }
