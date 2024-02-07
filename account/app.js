const correo = sessionStorage.getItem("nombre"); //sesionStorage del login
const cerrar = document.getElementById("Cerrar-sesion");
const eliminar = document.getElementById("eliminar-ciclos") //Llamamos el boton eliminar ciclos
const editarCondicional = document.getElementById("editar-condicional"); //boton editar de la carta de condicionales
const eliminarCnal = document.querySelector("#eliminar-condicional") //Llamamos al boton eliminar condicional

cerrar.addEventListener("click", cerrarSesion);
function cerrarSesion(){
    window.location.href = "../login/index.html";
    
}
//Eliminar Ciclos
eliminar.addEventListener("click",eliminarCiclos);
const ciclos = document.querySelector(".parrafo1")//Nombre de la carta a eliminar 
function eliminarCiclos(){
    if(eliminar){
        let resultado = window.confirm("Seguro que quiere eliminar el artículo");
        if(resultado === true){
           ciclos.parentNode.removeChild(ciclos); // eliminamos la carta completa
        }else{
        alert("El artículo no se elimino");
        }
    }else{
        alert("el artículo no se elimino")
    }
}


//Eliminar condicional 
eliminarCnal.addEventListener("click",eliminarCondicional);
const condicionales = document.querySelector(".parrafo2"); //Nombre de la carta a eliminar
function eliminarCondicional (){
    if(eliminarCnal){
        let resultado = window.confirm("Seguro que quiere eliminar el artículo")
        if(resultado === true){
            alert("Se eliminara el artículo")
            condicionales.parentNode.removeChild(condicionales); //eliminamos la carta de condicionales
        }else{
            alert("el artículo no se elimino")
        }
    }else{
        alert("El articulo no se elimino")
    }
}