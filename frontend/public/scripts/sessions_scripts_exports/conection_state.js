export default function ConectionState () {
    const isOnLine = (e) => {
        const $div =  document.createElement("div");
        if (navigator.onLine) {
            $div.textContent = "Available conection";
            $div.classList.add("online");
        } else {
            $div.textContent = "Unavailable conection";
            $div.classList.add("offline");
        }
        document.body.insertAdjacentElement("afterbegin", $div);
        setTimeout(()=>{
            document.body.removeChild($div);
        }, 2000);
    };
    window.addEventListener("online", (e)=> isOnLine(e));
    window.addEventListener("offline", ()=> isOnLine());
}