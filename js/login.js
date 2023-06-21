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
    .then(respuesta => {
        if (respuesta.status == 200) {
            console.log("Me cago enla puta ")
            sessionStorage.setItem("sesion","true");    
            window.location.href="index.html";
        }
    })
    .catch(console.log)
    
}
    
