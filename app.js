const search = document.getElementById("search");
const titles = document.querySelectorAll(".articles-text-title");
const articles = document.querySelectorAll(".art");

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
