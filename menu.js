var contenido = document.querySelector("#menu");

contenido.innerHTML +=`<nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          SistemaEentos
        </a>
  
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <a
          class="nav-link" id="Inicio"
          href=""
          >Inicio</a>

          <a
          class="nav-link" id="PublicarEvento"
          href=""
          >Publicar Evento</a>

          <a
          class="nav-link" id="VerEventos"
          href=""
          >Eventos</a>

          <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            href="#"
            >Opciones</a
          >
          <ul class="dropdown-menu bg-secondary">
           <li>
            <a class="dropdown-item" href="" id="ModificarCuenta"
              > Modificar cuenta</a
            >
          </li> 
          <li>
              <a class="dropdown-item" href="" id="EliminarCuenta"
                > Eliminar </a
              >
            </li>
           
          <li>
            <a class="dropdown-item" href="" id="CerrarSesion"
              > Cerrar Sesion</a
            >
          </li>
         
          </ul>
                
              </ul>
            </li>
             
          </ul>
  
        </div>
      </div>
    </nav>`