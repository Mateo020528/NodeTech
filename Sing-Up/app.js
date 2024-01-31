const url = "http://localhost:3000/users"; // Llamamos el end point para vincular al fetch
const nombre = document.getElementById("nombre"); // Empezamos a llamara los datos que tengo en el html como nombres/apellidos/edad/genero/estudios/email/password/confirmar-password
const apellido = document.getElementById("apellido");
const edad = document.getElementById("edad");
const genero = document.getElementById("genero");
const estudios = document.getElementById("estudios");
const correo = document.getElementById("email");
const password = document.getElementById("password");
const confirmar = document.getElementById("confirmar-password");
const registrar = document.getElementById("registro"); //Llamamos el boton de registro

registrar.addEventListener("click", verificar);

function verificar (){
    let users = {
        name : nombre.value,
        last_name : apellido.value,
        edad : edad.value,
        genero : genero.value,
        estudios : estudios.value,
        email : correo.value,
        password : password.value,
        confirmar : confirmar-password.value,
    }
    fetch (url).then()

}
