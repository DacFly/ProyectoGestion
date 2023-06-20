var btn = document.getElementById('btn');

function logueo(){
    document.cookie = "sesion=true; path=/";
    window.location.href="index.html";
}
    
