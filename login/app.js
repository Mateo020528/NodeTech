const url = "http://localhost:3000/users" //Utilizo la variable url para guardar el link de users
const email = document.getElementById("correo"); // Llamamos el id de el correo
const password = document.getElementById("password")//Llamamos el id del password
const iniciar = document.querySelector("#inicio") //Llamamos al boton de inicio

iniciar.addEventListener("click", verificarLogin) 

function verificarLogin(){

    if(email.value != "" && password.value != "" ){
        
    }else{"Por favor revisa bien tu datos"}

    fetch(url).then(response =>{return response.json()}).then(data =>{

        let userFind = data.find(element => element.email === email.value && element.password === password.value);
        console.log(userFind);
        //La variable userfind lo que hace es mirar si el usuario  es encontrado en la base de datos
                console.log(email.value, password.value)
                if(userFind){
                    //y si existe el usuario me permita entrar a la pagina de la cuenta
                     window.location.href = ".././account/index.html";
                    sessionStorage.setItem("nombre",element.email)
                }else{
                    alert("El usuario no existe. por favor ingrese un correo valido")
                };
             
        });
    }