

var cardContainer = document.getElementById('card-container');



function validateLogin() {
  console.log(sessionStorage.getItem("sesion"))
  if (sessionStorage.getItem("sesion") == null || sessionStorage.getItem("sesion") == "false") {
    window.location.href = "login.html";
  } 1
}

validateLogin();

function cargarEventos() {
  fetch("https://localhost:7088/Evento/eventosNoInscritos/" + sessionStorage.getItem("id"), {
    method: 'GET'
  })
    .then(response => response.json())
      .then(datos => {
        for (const ev of datos) {
          cardContainer.innerHTML += `
        <div class="col-md-4 mb-4">
          <div class="card" style="width: 20rem;">
            <div class="card-body">
              <h5 class="card-title">${ev.titulo}</h5>
              <p class="card-text">${ev.descripcion}d</p>
            </div>
            <ul class="list-group list-group-flush">  
              <li class="list-group-item">Fecha del Evento:${ev.fechaEvento.split("T")[0]} </li>
              <li class="list-group-item">Fecha Finalizacion:${ev.fechaEvento.split("T")[0]} </"li>
              <li class="list-group-item">Hora: ${ev.hora}</li>
              <li class="list-group-item">Dirección: ${ev.direccion} </li>
            </ul>
            <div class="card-body">
              <button class="btn btn-lg" type="button" onclick="Postularse('${ev.idEvento}')" style="background-color: #9dd1cd;">Inscribirse</button>
              ${ sessionStorage.getItem("rol")==="admin" ? '<button class="btn btn-lg btn-danger" type="button"">Eliminar</button>':''}
            </div>
          </div>  
        </div>
        `;
        }
      })
      .catch(error => {
        // Aquí puedes manejar los errores de la solicitud
        console.error(error);
      })
}

cargarEventos()

function Postularse(idEvento) {
  var datosenviar = {
    idEvento: idEvento,
    idUsuario: sessionStorage.getItem("id")
  };

  fetch("https://localhost:7088/EventoUsuario/CrearEventoUsuario", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(datosenviar)
  })
    .then(response => response.json())
    .then(data => {
      // Manejar la respuesta o redirigir si es necesario
    })
    .catch(error => {
      console.error(error);
    });
}
