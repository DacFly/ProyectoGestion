function crearUsuario() {
    

   var idUsuario =  document.getElementById('evento').value
    fetch("https://localhost:7088/Usuarios/CrearUsuario", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(usuario)
    })
      .then(response => {
        if (response.ok) {
          console.log("Usuario creado exitosamente");
          // Realizar cualquier acción adicional después de crear el usuario
        } else {
          console.error("Error al crear el usuario");
        }
      })
      .catch(error => {
        console.error("Error:", error);
      });
  }