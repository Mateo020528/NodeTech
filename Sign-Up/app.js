const url = "http://localhost:3000/users"; // Llamamos el end point para vincular al fetch
const nombre = document.getElementById("nombre"); // Empezamos a llamara los datos que tengo en el html como nombres/apellidos/edad/genero/estudios/email/password/confirmar-password
const last_name = document.getElementById("apellido");
const edad = document.getElementById("edad");
const genero = document.getElementById("genero");
const estudios = document.getElementById("estudios");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmar = document.getElementById("confirmar");
const terminos = document.getElementById("terminos"); //boton terminos y condiciones
const registrar = document.getElementById("registro"); //Llamamos el boton de registro

registrar.addEventListener("click", verificarRegistro);
console.log(terminos)
function verificarRegistro(event) { // la funcion como su nombre lo indica verifica si la persona si cumple con los requerimientos para entrar
    event.preventDefault()
    let users = {  //creo una variable users en donde se guardaron los datos que ingresen los usuarios.
        name: nombre.value,
        last_name: last_name.value,
        edad: edad.value,
        genero: genero.value,
        estudios: estudios.value,
        email: email.value,
        confirmar: confirmar.value,
    }
    
    if(nombre.value != "" && last_name.value != "" && edad.value != "" && genero.value != "" && estudios.value != "" && email.value != "" && password.value != "" && confirmar.value != ""  && terminos.checked){
        if(password.value === confirmar.value){
            if(users){
                fetch(url, {
                    method: 'POST', //  si users existe que me actualize la base de datos
                    headers: {
                        "Content-Type": "application/json"
                    },     
                    body: JSON.stringify(users) 
                })
                sessionStorage.setItem("nombre",nombre.value); // sessionStorage (usamos el setItem con el nombre del usuario)
                window.location.href = "../account.index.html" //vinculado a la página de cuenta
            } else{
                alert("Revisa tus datos, hay algo que ingresaste mal")
            };
        }else{
            alert("Por favor revisa ambas contraseñas una de ellas no coincide")
        }
    }else{
        alert("Por favor llene todos los campos para continuar");
    }
}
