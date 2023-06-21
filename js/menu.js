var contenido = document.querySelector("#menu");


contenido.innerHTML += `<div class="container-fluid">
<div class="row align-items-center">
        <div class="site-logo col-6"><a href="index.html">SISEV</a>
        </div>
            
        <nav class="mx-auto site-navigation">
          <ul class="site-menu js-clone-nav d-none d-xl-block ml-0 pl-0">
            <li><a href="index.html" class="nav-link ">Eventos</a></li>
            ${sessionStorage.getItem("rol") === "publicador" || sessionStorage.getItem("rol") === "admin" ? '<li><a href="#" onclick="mostrarModalCrearEvento()">Agregar Eventos</a></li>' : ''}
            <li><a href="VerEventosPublicador.html" onclick="cargarEventos()">Mis eventos </a></li>
            <li class="d-lg-none"><a id="logOut" onclick="singOut()">Log Out</a></li>
          </ul>
        </nav>
        
        <div class="right-cta-menu text-right d-flex aligin-items-center col-6">
          <div class="ml-auto">
              <div class="dropdown ">
                <nav class="mx-auto   site-navigation">
                  <ul class="site-menu js-clone-nav d-none d-xl-block ml-0 pl-0">
                    <li class="has-children">
                      <a href="#" class="div-drop">${sessionStorage.getItem("nombre")}</a>
                      <ul class="dropdown">
                        <li><a href="modificarPerfil.html">Modificar Perfil</a></li>
                        <li><a href="service-single.html">Eliminar Perfil</a></li>
                        <li><a  onclick="singOut()">Cerrar Sesion</a></li>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
              <div>
              </div>
          </div>
            <a href="#" class="site-menu-toggle js-menu-toggle d-inline-block d-xl-none mt-lg-2 ml-3"><span class="icon-menu h3 m-0 p-0 mt-2"></span></a>
        </div>
</div>
</div>`;



var modalCrearEvento = new bootstrap.Modal(document.getElementById('modalCrearEvento'))

function mostrarModalCrearEvento() {
  modalCrearEvento.show();
}

function cerrarModalCrearEvento() {
  modalCrearEvento.hide();
}

function singOut() {
  sessionStorage.setItem("sesion", "false");
  sessionStorage.setItem("rol", "");
  sessionStorage.setItem("nombre", "");
  sessionStorage.setItem("id", "");
  window.location.href = "login.html";
}

function crearNuevoEv() {
  var titulo = document.getElementById('evento').value;
  var fechaPublicacion = document.getElementById('fechaPublicacion').value;
  var fechaEvento = document.getElementById('fechaEvento').value;
  var hora = document.getElementById('hora').value;
  var descripcion = document.getElementById('descripcion').value;
  var direccion = document.getElementById('direccion').value;

  // Crear el objeto de evento con los valores del formulario
  var id = parseInt(sessionStorage.getItem("id"));

  var nuevoEvento = {
    idEvento: 0, // Cambiar el valor del usuarioId según corresponda
    usuarioId: id,
    titulo: titulo,
    fechaPublicacion: fechaPublicacion,
    fechaEvento: fechaEvento,
    hora: hora,
    descripcion: descripcion,
    direccion: direccion
  };
  console.log(nuevoevento)
  // Realizar la solicitud POST a la API para crear el evento
  fetch('https://localhost:7088/Evento/CrearEvento', {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(nuevoEvento)
  }).then(response => {
    swal("¡Evento creado!", "El evento ha sido creado exitosamente.", "success");
    cargarEventos()
    cerrarModalCrearEvento()
    document.getElementById('evento').value = '';
    document.getElementById('fechaPublicacion').value = '';
    document.getElementById('fechaEvento').value = '';
    document.getElementById('hora').value = '';
    document.getElementById('descripcion').value = 'Ingrese descripcion';
    document.getElementById('direccion').value = '';
  })
    .catch(swal("Error", "Ocurrió un error al crear el evento. Por favor, inténtalo nuevamente.", "error"));
}

