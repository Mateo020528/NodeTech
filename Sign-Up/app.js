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

registrar.addEventListener("click", verificar);

function verificar(event) {
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
    if(nombre.value != "" && last_name.value != "" && edad.value != "" && genero.value != "" && estudios.value != "" && email.value != "" && password.value != "" && confirmar.value != ""){
        if(users){
            // window.location.href = "" //Aqui va la página que nos va a brindar angelica
            fetch(url, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(users) 
            })
            sessionStorage.getItem("nombre",nombre.value);
        } else{
            alert("Revisa tus datos, hay algo que ingresaste mal")
        }
    }else{
        alert("Por favor llene todos los campos para continuar");
    }
}

