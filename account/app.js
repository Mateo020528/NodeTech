const correo = sessionStorage.getItem("nombre");
const cerrar = document.getElementById("cerrar");


cerrar.addEventListener("click", cerrarSesion);
function cerrarSesion(){
    window.location.href = "../index.html";
}