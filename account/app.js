const correo = sessionStorage.getItem("nombre"); //sesionStorage del login
const cerrar = document.getElementById("Cerrar-sesion");
const eliminar = document.getElementById("eliminar-ciclos") //Llamamos el boton eliminar ciclos
const editarCondicional = document.getElementById("editar-condicional"); //boton editar de la carta de condicionales
const eliminarCnal = document.querySelector("#eliminar-condicional") //Llamamos al boton eliminar condicional


cerrar.addEventListener("click", cerrarSesion);
function cerrarSesion(){
    window.location.href = "../login/index.html";
    
}

eliminar.addEventListener("click",eliminarCiclos);
const ciclos = document.querySelector(".parrafo1")//llamamos la clase de la carta completa 
function eliminarCiclos(){
    if(eliminar){
        alert("Quieres eliminar el artículo?")
        ciclos.parentNode.removeChild(ciclos); // eliminamos la carta completa
    }
}

// editar.addEventListener("click",editarCiclos);
// const editar = document.getElementById("editar-ciclos"); // Llamamos el boton de editar
// function editarCiclos(){
    
// }

eliminarCnal.addEventListener("click",eliminarCondicional);
const condicionales = document.querySelector(".parrafo2");
function eliminarCondicional (){
    if(eliminarCnal){
        alert("Quieres eliminar este atículo?")
        condicionales.parentNode.removeChild(condicionales); //eliminamos la carta de condicionales
    }
}
