document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  
  sessionStorage.getItem("id")
  var cedula = document.getElementById("cedula").value;
  var nombre = document.getElementById("user").value;
  var email = document.getElementById("email").value;
  var contraseña = document.getElementById("pass").value;
  var telefono = document.getElementById("telefono").value;

  var datosEnviar = {
    cedula: cedula,
    nombre: nombre,
    email: email,
    contraseña: contraseña,
    telefono: telefono
  };

  fetch("https://localhost:7088/Usuario/EditarUsuario", {
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(datosEnviar)
  })
    .then(function (respuesta) {
      if (respuesta.status == 204) {
        document.getElementById("cedula").value = "";
        document.getElementById("user").value = "";
        document.getElementById("email").value = "";
        document.getElementById("pass").value = "";
        document.getElementById("telefono").value = "";

        swal(
          "Se ha modificado correctamente!",
          "Presiona el botón!",
          "success"
        ).then(function (willDelete) {
          if (willDelete) {
            // Realizar acciones adicionales después de la modificación exitosa
          }
        });
      } else {
        swal("No se ha modificado!", "Presiona el botón!", "error");
      }
    })
    .catch(console.log);
});