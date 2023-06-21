var contenidoTablaResultado = document.querySelector('#resultados');
function cargarEventos2() {
  console.log(sessionStorage.getItem("id"));
    fetch("https://localhost:7088/Evento/eventosDeUsuario/" + sessionStorage.getItem("id"), {
      method: 'GET'
    })
    
      .then(response => response.json())
        .then(datos => {
          for (const valor of datos) {
            contenidoTablaResultado.innerHTML += `
            <tr class="table-primary" >
                <td scope="row">${valor.idEvento}</td>
                <td>${valor.titulo}</td>
                <td>${valor.fechaPublicacion}</td>
                <td>${valor.fechaEvento}</td>
                <td>${valor.hora}</td>
                <td>${valor.descripcion}</td>
                <td>${valor.direccion}</td>
               
                <td>
                  <a name="" id="" class="btn btn-danger" onclick="eliminar('${valor.idEvento}')" role="button">Borrar</a>
                  ||
                  <a name="" id="" class="btn btn-primary" onclick="editar('${valor.idEvento}', '${valor.titulo}', '${valor.fechaPublicacion}', '${valor.fechaEvento}', '${valor.hora}', '${valor.descripcion}', '${valor.direccion}')" role="button">Editar</a>
                </td>
            </tr>`; 
          }
        })
        .catch(error => {
          // Aquí puedes manejar los errores de la solicitud
          console.error(error);
        })
  }
  
  cargarEventos2()

  const modalEditar = new bootstrap.Modal(document.getElementById('modalEditarEvento'));
  var formulario = document.getElementById('frmEventos');

  formulario.addEventListener('submit', function(e) {
     e.preventDefault();
     var idEvento=document.getElementById('idEvento').value;;
     var titulo = document.getElementById('titulo').value;
     var fechaPublicacion = document.getElementById('fechaPublicacion').value;
     var fechaEvento= document.getElementById('fechaEvento').value;
     var hora = document.getElementById('hora').value;
     var descripcion = document.getElementById('descripcion').value;
     var direccion = document.getElementById('direccion').value;
    
    var id = sessionStorage.getItem("id");
      var datosenviar = {
        idEvento:idEvento,
        usuarioId:id,
        titulo:titulo,
        fechaPublicacion:fechaPublicacion,
        fechaEvento:fechaEvento,
        hora:hora,
        descripcion:descripcion,
        direccion:direccion
      }
      console.log(datosenviar);
       fetch("https://localhost:7088/Evento/EditarEvento",
        {
           method:"POST",
          body:JSON.stringify(datosenviar)
       })//url de peticion de datos
       .then(respuesta => respuesta.json())//recibe los datos en formato json
       .then((datosrepuesta) => {            
            console.log('Datos',datosrepuesta)//Muestra el resultado de la peticion
            document.getElementById("titulo").value="";
            document.getElementById("fechaPublicacion").value="";
            document.getElementById("fechaEvento").value="";
            document.getElementById("hora").value="";
            document.getElementById("descripcion").value="";
            document.getElementById("direccion").value="";
            swal("Se ha modificado correctamente!", "Presiona el boton!", "success");
            modalEditar.hide();
       })
       .catch(console.log)//muestra errores
                 
  });


  function editar(idEvento, titulo, fechaPublicacion, fechaEvento,hora,descripcion,direccion){
    myModal.show();
    document.getElementById('idEvento').value = idEvento;
    document.getElementById('titulo').value = titulo;
    document.getElementById('fechaPublicacion').value = fechaPublicacion;
    document.getElementById('fechaEvento').value = fechaEvento;
    document.getElementById('hora').value = hora;
    document.getElementById('descripcion').value = descripcion;
    document.getElementById('direccion').value = direccion;
  }




  function eliminar(idEvento){
    swal({
title: "Esta seguro que quiere eliminarlo?",
text: "Una vez borrado no se podra recuperar los datos",
icon: "warning",
buttons: true,
dangerMode: true,
})
.then((willDelete) => {
if (willDelete) {
  swal("Eliminado correctamente", {
    icon: "success", 
  });window.location = 'VerEventosPublicador.html'//Muestra el resultado de la peticion
} else {
  swal("No se borraron los datos");
}
});
//       apis/BorrarCursos.php
// { "id":2 }
var datosenviar = {
  idEvento:idEvento
      }
 fetch("https://localhost:7088/Evento/EliminarEvento/" + sessionStorage.getItem("id"),
      {
          method:"POST",
          body:JSON.stringify(datosenviar)
      })//url de peticion de datos
      .then(respuesta => respuesta.json())//recibe los datos en formato json
      .then((datosrepuesta) => {            
           
       
      })
      .catch(console.log)//muestra errores
}