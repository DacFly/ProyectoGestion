var btn = document.getElementById('btn');

var estado = false;


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
    .then(respuesta => respuesta.json())
    .then(respuesta =>{
        console.log(respuesta)
        var usuario = respuesta;
        sessionStorage.setItem("sesion","true");    
        sessionStorage.setItem("rol",usuario.rol);  
        sessionStorage.setItem("nombre",usuario.nombre);    
        sessionStorage.setItem("sesion","true"); 
        sessionStorage.setItem("id",usuario.usuarioId);       
        window.location.href="index.html";
    }).catch(console.log)
    
}
    
