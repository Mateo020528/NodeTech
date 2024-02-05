ClassicEditor
.create(document.querySelector('#txtDescripcion'))
.catch(error => {
    console.error(error);
});

let root = document.getElementById('root');
let texto = document.createElement("div");
function ver() {
let df = document.getElementsByClassName('ck-editor__editable_inline');
console.log(df[0].innerHTML)
texto.innerHTML = df[0].innerHTML;
texto.classList.add("texto");
root.appendChild(texto);
localStorage.setItem("texto", texto.innerHTML)
}

function publicar() {
    location.href = "./nuevoArticulo/index2.html"
}