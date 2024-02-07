//las lineas 2 al 6 fueron investigadas en compañia del profesor
ClassicEditor
.create(document.querySelector('#txtDescripcion'))
.catch(error => {
    console.error(error);
});

//llamamos al root para crear un div que mostrará lo que ingresen en la caja de edicion
let root = document.getElementById('root');
let texto = document.createElement("div");

//Al darle clic al boton ver podran verificar lo que escribieron, de la clase solo nos interesa el texto, se extrae con innerHTML y se agrega al root, luego usamos localstorage para poder ver el texto en la otra página
function ver() {
    let df = document.getElementsByClassName('ck-editor__editable_inline');
    console.log(df[0].innerHTML);
    texto.innerHTML = df[0].innerHTML;
    texto.classList.add("texto");
    root.appendChild(texto);
    localStorage.setItem("texto", texto.innerHTML)
}
//Esta funcion nos lleva a otra pagina al darle clic al boton publicar
function publicar() {
    location.href = "./nuevoArticulo/index2.html"
}