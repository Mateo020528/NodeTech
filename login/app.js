const url = "http://localhost:3000/users" //Utilizo la variable url para guardar el link de users
const correo = document.getElementById("correo"); // Llamamos el id de el correo
const password = document.getElementById("password");//Llamamos el id del password


fetch (url).then(response =>{return response.json()}).then(data =>{
    data.forEach(element => {
        console.log(element);
      
    });
})

function verificar(){
    if(element.correo === correo.value && element.password === password.value){
        alert("El usuario existe en la base de gatos")
    }
}
