var btn = document.querySelector('#btn');

btn.addEventListener('click',function(e){
    e.preventDefault();
    document.cookie = "sesion=true; path=/";
    window.location.href="index.html";
})