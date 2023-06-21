

var contenidoTablaResultado = document.querySelector("#resultados");
function cargarEventos2() {
  console.log(sessionStorage.getItem("id"));
  fetch(
    "https://localhost:7088/Usuario/BuscarUsuario/" +
      sessionStorage.getItem("id"),
    {
      method: "GET",
    }
  )
    .then((response) => response.json())
    .then((datos) => {
      contenidoTablaResultado.innerHTML = ``;
      for (const valor of datos) {
        contenidoTablaResultado.innerHTML += `
            <tr class="table-primary" >
                <td>${valor.usuarioId}</td>
                <td>${valor.cedula}</td>
                <td>${valor.nombre}</td>
                <td>${valor.email}</td>
                <td>${valor.password}</td>
                <td>${valor.telefono}</td>
                <td>${valor.rol}</td>
               
                <td>
                  <a name="" id="" class="btn btn-primary" onclick="editar(${sessionStorage.getItem(
                    "id"
                  )},'${valor.idEvento}', '${valor.titulo}', '${
          valor.fechaPublicacion
        }', '${valor.fechaEvento}', '${valor.hora}', '${valor.descripcion}', '${
          valor.direccion
        }')" role="button">Editar</a>
                </td>
            </tr>`;
      }
    })
    .catch((error) => {
      // Aquí puedes manejar los errores de la solicitud
      console.error(error);
    });
}
cargarEventos2();