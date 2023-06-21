
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
              <li class="list-group-item">Fecha del Evento:${ev.fechaEvento.split("T")[0]} </li>
              <li class="list-group-item">Fecha Finalizacion:${ev.fechaEvento.split("T")[0]} </"li>
              <li class="list-group-item">Hora: ${ev.hora}</li>
              <li class="list-group-item">Dirección: ${ev.direccion} </li>
            </ul>
            <div class="card-body">
              <button class="btn btn-lg" type="button" style="background-color: #9dd1cd;">Inscribirse</button>
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
      cargarEventos()
    })
    .catch( swal("Error", "Ocurrió un error al crear el evento. Por favor, inténtalo nuevamente.", "error"));
}
