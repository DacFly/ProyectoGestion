function crearUsuario() {
   var idUsuario =  document.getElementById('evento').value;

    fetch("https://localhost:7088/Usuarios/CrearUsuario", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(datosenviar)
    })
      .then(response => {
        if (response.ok) {
          document.getElementById("cedula").value = "";
          document.getElementById("user").value = "";
          document.getElementById("email").value = "";
          document.getElementById("pass").value = "";
          document.getElementById("telefono").value = "";
          document.getElementById("rol").value = "";
  
          alert("Éxito: El usuario se agregó correctamente");
          
          // Realizar cualquier acción adicional después de crear el usuario correctamente
        } else {
          alert("Error: No se pudo crear el usuario");
        }
      })
      .catch(error => {
        console.error("Error:", error);
      });
  }