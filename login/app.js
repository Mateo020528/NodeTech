const url = "http://localhost:3000/users" //Utilizo la variable url para guardar el link de users
const correo = document.getElementById("correo"); // Llamamos el id de el correo
const password = document.getElementById("password");//Llamamos el id del password
const iniciar = document.querySelector("#inicio") //Llamamos al boton de inicio

iniciar.addEventListener("click", verificar)

function verificar(){
    fetch (url).then(response =>{return response.json()}).then(data =>{
        console.log(data);
        let userFind = data.find(element => element.email === correo.value && element.password === password.value);
        
            
            if(correo.value != "" && password.value != "" ){
                if(correo.value === element.email && password.value === element.password) {
                    alert("el usuario ha ingresado el correo ")
                    window.location.href = "../account/index.html";
                    sessionStorage.setItem("correo",correo.value)
                } else {
                    alert("Revisa bien tus datos, hay algo que ingresaste mal")
                }
            } else {
                alert("por favor ingrese todos los campos requeridos")
            }
        
        });
    }

