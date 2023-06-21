var contenido = document.querySelector("#menu");

contenido.innerHTML += `<div class="container-fluid">
<div class="row align-items-center">
        <div class="site-logo col-6"><a href="index.html">SISEV</a>
        </div>
            
        <nav class="mx-auto site-navigation">
          <ul class="site-menu js-clone-nav d-none d-xl-block ml-0 pl-0">
            <li><a href="index.html" class="nav-link ">Eventos</a></li>
           ${sessionStorage.getItem("rol")==="publicador" ? '<li><a href="#" onclick="mostrarModalCrearEvento()">Agregar Eventos</a></li>':''} 
            <li><a href="VerEventosPublicador.html">Mis eventos</a></li>
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
                        <li><a href="services.html">Modificar Perfil</a></li>
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


