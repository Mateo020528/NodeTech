//Llamamos la caja de busqueda, los titulos que seran buscados y la info del articulo
const search = document.getElementById("search");
const titles = document.querySelectorAll(".articles-text-title");
const articles = document.querySelectorAll(".art");

//Cada que escriban en la caja de busqueda algunas letras las comparará con las letras que empiezan los titulos de los articulos y si incluye las letras apareceran en la pantalla, si no none
search.addEventListener("keyup", ()=>{
    for(title of titles){
        const texto=title.innerHTML.toLowerCase();
        if (texto.startsWith(search.value.toLowerCase())){
            for (art of articles) {
                const text = art.innerHTML.toLowerCase()
                if (text.includes(search.value.toLowerCase())) {
                    art.style="display:block;"
                } else {
                    art.style="display:none;"
                }
            }
        }
    }
});
