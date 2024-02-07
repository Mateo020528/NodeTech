//Creamos la variable texto para extraer por medio de localstorage el valor de texto creado en la anterior pagina
const texto = localStorage.getItem("texto");

//Llamamos el div contenido2 para ingresarle el valor del texto que obtuvimos anteriormente y mostrarlo en la página
let contenido2 = document.querySelector(".contenido2")
contenido2.innerHTML = texto;