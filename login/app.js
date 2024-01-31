const url = "http://localhost:3000/users" //Utilizo la variable url para guardar el link de users
const correo = document.getElementById("correo"); // Llamamos el id de el correo
const password = document.getElementById("password");//Llamamos el id del password
const iniciar = document.querySelector("#inicio") //Llamamos al boton de inicio

iniciar.addEventListener("click", verificar)

function verificar(){
    fetch (url).then(response =>{return response.json()}).then(data =>{
        console.log(data);
        let userFind = data.find(element => element.email === correo.value && element.password === password.value);
        console.log(userFind)
            
            if(correo.value != "" && password.value != "" ){
                if(userFind){
                    window.location.href = "../account/index.html";
                    sessionStorage.getItem(correo,element.email)
                } else {
                    alert("Revisa bien tus datos, hay algo que ingresaste mal");
                }
            } else {
                alert("por favor ingrese todos los campos requeridos");
            }
        });
    }

//por el momento funciona con 2 usuarios en la base de datos.