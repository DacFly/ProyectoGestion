function cargarEventos() {
    fetch("https://localhost:7088/Evento/eventosDeUsuario" + sessionStorage.getItem("id"), {
      method: 'GET'
    })
      .then(response => response.json())
        .then(datos => {
          for (const valor of datos) {
            contenidoTablaResultado.innerHTML += `
            <tr class="table-primary" >
                <td scope="row">${valor.idEvento}</td>
                <td>${sessionStorage.getItem("id")}</td>
                <td>${valor.titulo}</td>
                <td>${valor.fechaPublicacion}</td>
                <td>${valor.fechaEvento}</td>
                <td>${valor.hora}</td>
                <td>${valor.descripcion}</td>
                <td>${valor.direccion}</td>
               
                <td>
                  <a name="" id="" class="btn btn-danger" onclick="eliminar('${valor.idEvento}')" role="button">Borrar</a>
                  ||
                  <a name="" id="" class="btn btn-primary" onclick="editar('${valor.idEvento}', '${sessionStorage.getItem("id")}', '${valor.titulo}', '${valor.fechaPublicacion}', '${valor.fechaEvento}', '${valor.hora}', '${valor.descripcion}', '${valor.direccion}')" role="button">Editar</a>
                </td>
            </tr>`; 
          }
        })
        .catch(error => {
          // Aquí puedes manejar los errores de la solicitud
          console.error(error);
        })
  }
  
  cargarEventos()