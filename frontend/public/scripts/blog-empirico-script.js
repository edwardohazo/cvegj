window.addEventListener("load", ()=> {
    // // PENDIENTE: Buscar una mejor alternativa a setTimeout()
    setTimeout(()=>{
        const $main = document.querySelector("main");
        
        fetch("./markdowns/blog-empirico.md")
        .then((res)=>res.ok ? res.text() : Promise.reject(res))
        .then((res)=>  {
            const converter = new showdown.Converter();
            const html = converter.makeHtml(res);
            $main.innerHTML = html;
        })
        .catch((err)=> {
            console.log(err);
            let message = err.statusText || "Ocurrió un error"
            $main.innerHTML = `Error: ${err.status} ${message}`
        });
    },10);
});

