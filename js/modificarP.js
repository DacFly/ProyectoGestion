





document.getElementById("modificarP").addEventListener("submit", function (e) {
  e.preventDefault();
  var usuario = obtenerUsuario();
  console.log(usuario);
  
});

  function obtenerUsuario() {

    var id = parseInt(sessionStorage.getItem("id"));
   
    fetch("https://localhost:7088/Usuarios/BuscarUsuario/" + id, {
      method: 'GET'
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error al obtener el usuario");
        }
      })
      .catch(error => {
        console.error("Error:", error);
      });
  }
