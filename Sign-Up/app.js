const url = "http://localhost:3000/users"; // Llamamos el end point para vincular al fetch
const nombre = document.getElementById("nombre"); // Empezamos a llamara los datos que tengo en el html como nombres/apellidos/edad/genero/estudios/email/password/confirmar-password
const last_name = document.getElementById("apellido");
const edad = document.getElementById("edad");
const genero = document.getElementById("genero");
const estudios = document.getElementById("estudios");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmar = document.getElementById("confirmar");
const registrar = document.getElementById("registro"); //Llamamos el boton de registro

registrar.addEventListener("click", verificarRegistro);

function verificarRegistro(event) { //se cambio el  nombre de la función y funciona bien👌
    event.preventDefault()
    let users = {
        name: nombre.value,
        last_name: last_name.value,
        edad: edad.value,
        genero: genero.value,
        estudios: estudios.value,
        email: email.value,
        confirmar: confirmar.value,
    }
    // users.tolowerCase() decirle a fernando que me explique un poco de tolowerCase en este caso😑
    if(nombre.value != "" && last_name.value != "" && edad.value != "" && genero.value != "" && estudios.value != "" && email.value != "" && password.value != "" && confirmar.value != ""){
        alert("has ingresado con exito.");
        if(users){
            // window.location.href = "" //Aqui va la página que nos va a brindar angelica
            fetch(url, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },     
                body: JSON.stringify(users) 
            })
            sessionStorage.getItem("nombre",nombre.value); // sessionStorage (necesitamos la página de angelica para anclarlo a esa página)
        } else{
            alert("Revisa tus datos, hay algo que ingresaste mal")
        };
    }else{
        alert("Por favor llene todos los campos para continuar");
    }
}

//para mañana terminar lógica del registro, me falta:
//1)hacer condicionales para comparar contraseñas y en caso de que no sean iguales no dejar entrar
//2)no permiter a personas que no ingresen con el correo incompleto. sacar alerta para ese caso,
//3)el tolowerCase
//4)boton de aceptar terminos y condiciones... Otra condicional
//5)Revisar el login resulta que solo me deja ingresar con los 2 usuarios ya creados, no me permite ingresar con los nuevos que cree😒
//6)Mirar como hacer la pagina responsive.. no se me puede olvidar
//7) seguir estudiando los metodos y recordarle al profe que nos va a explicar mas maneras de usar fetch... creo que era eso...
