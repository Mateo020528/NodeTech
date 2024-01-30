const correo = sessionStorage.getItem("correo");
const cerrar = document.getElementById("cerrar");


cerrar.addEventListener("click", cerrarSesion);
function cerrarSesion(){
    window.location.href = "../index.html";
}