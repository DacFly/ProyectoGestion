var contenido = document.querySelector("#menu");

contenido.innerHTML +=`<div class="container-fluid">
<div class="row align-items-center">
  <div class="site-logo col-6"><a href="index.html">SISEV</a></div>

  <nav class="mx-auto site-navigation">
    <ul class="site-menu js-clone-nav d-none d-xl-block ml-0 pl-0">
      <li><a href="index.html" class="nav-link ">Eventos</a></li>
      <li><a href="#" onclick="mostrarModalCrearEvento()">Agregar Eventos</a></li>
      <li><a href="VerEventosPublicador.html">Mis eventos</a></li>
      <li class="has-children">
        <a href="#">Pages</a>
        <ul class="dropdown">
          <li><a href="services.html">Services</a></li>
          <li><a href="service-single.html">Service Single</a></li>
          <li><a href="blog-single.html">Blog Single</a></li>
          <li><a href="portfolio.html">Portfolio</a></li>
          <li><a href="portfolio-single.html">Portfolio Single</a></li>
          <li><a href="testimonials.html">Testimonials</a></li>
          <li><a href="faq.html">Frequently Ask Questions</a></li>
          <li><a href="gallery.html">Gallery</a></li>
        </ul>
      </li>

      <li class="d-lg-none"><a href="login.html">Log Out</a></li>
    </ul>
  </nav>
  
  <div class="right-cta-menu text-right d-flex aligin-items-center col-6">
  
    <div class="ml-auto">
    <div class="dropdown ">
      <nav class="mx-auto site-navigation">
        <ul class="site-menu js-clone-nav d-none d-xl-block ml-0 pl-0">
     
          <li class="has-children">
            <a href="#" class="div-drop">Pages</a>
              <ul class="dropdown">
              <li><a href="services.html">Services</a></li>
              <li><a href="service-single.html">Service Single</a></li>
              <li><a href="blog-single.html">Blog Single</a></li>
              <li><a href="portfolio.html">Portfolio</a></li>
              <li><a href="portfolio-single.html">Portfolio Single</a></li>
              <li><a href="testimonials.html">Testimonials</a></li>
              <li><a href="faq.html">Frequently Ask Questions</a></li>
              <li><a href="gallery.html">Gallery</a></li>
              </ul>
          </li>

        </ul>
      </nav>
    </div>
      <a href="post-job.html" class="btn btn-outline-white border-width-2 d-none d-lg-inline-block  "><span class="mr-2 icon-add"></span>Post a Job</a>
      <a href="login.html" class="btn btn-danger border-width-2 d-none d-lg-inline-block"><span class="mr-2 icon-lock_outline"></span>Log Out</a>
    </div>
    <a href="#" class="site-menu-toggle js-menu-toggle d-inline-block d-xl-none mt-lg-2 ml-3"><span class="icon-menu h3 m-0 p-0 mt-2"></span></a>
  </div>

</div>
</div>`;