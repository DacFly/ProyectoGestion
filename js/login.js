var btn = document.getElementById('btn');




function logueo(){
            // Datos del formulario
            var correo =document.getElementById("user").value;
            var contrasena = document.getElementById("pass").value;
console.log(correo+""+contrasena);
            // Objeto de configuración para la solicitud 
    fetch("https://localhost:7088/Usuario/Login/"+correo+"/"+contrasena,
    {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' }
    })
    .then(respuesta => {
        if (respuesta.status == 200) {
            document.cookie = "sesion=true; path=/";
            window.location.href="index.html";
        }
    })
    .catch(console.log)
    
}
    
