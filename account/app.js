const correo = sessionStorage.getItem("nombre"); //sesionStorage del login
const nombre = sesionStorage.getItem("nombre");// sesionStorage del crear cuenta
const cerrar = document.getElementById("cerrar");


cerrar.addEventListener("click", cerrarSesion);
function cerrarSesion(){
    window.location.href = "../index.html";
}