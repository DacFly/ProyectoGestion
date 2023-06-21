
var objetos = [
  {
    titulo: 'Evento',
    id: 'ID',
    fechaPublicacion: 'Fecha de publicación',
    fechaEvento: 'Fecha del evento',
    hora: 'Hora 1',
    descripcion: 'Descripción',
    direccion: 'Dirección'
  },
  {
    titulo: 'Evento',
    id: 'ID',
    fechaPublicacion: 'Fecha de publicación',
    fechaEvento: 'Fecha del evento',
    hora: 'Hora 1',
    descripcion: 'Descripción',
    direccion: 'Dirección'
  },
  {
    titulo: 'Evento',
    id: 'ID',
    fechaPublicacion: 'Fecha de publicación',
    fechaEvento: 'Fecha del evento',
    hora: 'Hora 1',
    descripcion: 'Descripción',
    direccion: 'Dirección'
  },
  {
    titulo: 'Evento',
    id: 'ID',
    fechaPublicacion: 'Fecha de publicación',
    fechaEvento: 'Fecha del evento',
    hora: 'Hora 1',
    descripcion: 'Descripción',
    direccion: 'Dirección'
  },
  {
    titulo: 'Evento',
    id: 'ID',
    fechaPublicacion: 'Fecha de publicación',
    fechaEvento: 'Fecha del evento',
    hora: 'Hora 1',
    descripcion: 'Descripción',
    direccion: 'Dirección'
  },
  {
    titulo: 'Evento',
    id: 'ID',
    fechaPublicacion: 'Fecha de publicación',
    fechaEvento: 'Fecha del evento',
    hora: 'Hora 1',
    descripcion: 'Descripción',
    direccion: 'Dirección'
  }
];


var cardContainer = document.getElementById('card-container');



function validateLogin() {
  console.log(sessionStorage.getItem("sesion"))
  if (sessionStorage.getItem("sesion") == null || sessionStorage.getItem("sesion") == "false") {
    window.location.href = "login.html";
  } 1
}
function singOut() {
  sessionStorage.setItem("sesion", "false");
  console.log(sessionStorage.setItem("sesion", "false"))
  window.location.href = "login.html";
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
              <li class="list-group-item">Fecha del Evento:${ev.fechaEvento} </li>
              <li class="list-group-item">Fecha Finalizacion:${ev.fechaEvento} </li>
              <li class="list-group-item">Hora: ${ev.fechaEvento}</li>
              <li class="list-group-item">Dirección: ${ev.direccion} </li>
            </ul>
            <div class="card-body">
              <button class="btn btn-lg" type="button" style="background-color: #9dd1cd;">Inscribirse</button>
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