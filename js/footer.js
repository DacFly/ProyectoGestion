var contenido = document.querySelector("#footer");

contenido.innerHTML += `
  <footer class="bg-dark text-center text-white pt-4">
    <!-- Grid container -->
    <div class="container-fluid">
      <!-- Section: Social media -->
      <div class="row">
        <div class="col">
          <a href="#" class="text-white me-3">
            <i class="bi bi-facebook fs-3"></i>
          </a>
          <a href="#" class="text-white me-3">
            <i class="bi bi-twitter fs-3"></i>
          </a>
          <a href="#" class="text-white me-3">
            <i class="bi bi-instagram fs-3"></i>
          </a>
        </div>
      </div>
      <!-- Section: Social media -->
    </div>

    <div class="container-fluid mt-4">
      <div class="row">
        <div class="col-6">
          <a class="text-white" href="">Eventos</a>
        </div>
        <div class="col-6">
          <a class="text-white" href="">Cerrar Sesion</a>
        </div>
      </div>
    </div>

    <!-- Copyright -->
    <div class="text-center py-3" style="background-color: rgba(0, 0, 0, 0.6);">
      © 2023 SistemaEventos:
      <a class="text-white" href="">SistemaEventos.com</a>
    </div>
    <!-- Copyright -->
  </footer>`;