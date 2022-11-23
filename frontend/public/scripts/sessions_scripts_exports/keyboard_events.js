function KeyboardEvents () {

    let x = 0;
    let y = 0;
     
    function moveBall (e, ball, stage) {
        const $ball = document.querySelector(ball);
        const $stage = document.querySelector(stage);
        const limitsBall = $ball.getBoundingClientRect();
        const limitsStage = $stage.getBoundingClientRect();

        switch (e.keyCode) {
            case 38:
                if (limitsBall.top > limitsStage.top + 12) {y--;e.preventDefault();}
                break;
            case 40:
                if (limitsBall.bottom < limitsStage.bottom - 12) {y++;e.preventDefault();}
                break;
            case 39:
                if (limitsBall.right < limitsStage.right) {x++;e.preventDefault();}
                break;
            case  37:
                if (limitsBall.left > limitsStage.left) {x--;e.preventDefault();}
                break;
                
            default:
                break;   
        }

        $ball.style.transform = `translate(${x*10}px, ${y*10}px)`
    }

    function shortcuts (e) {

        if (e.key === "a" && e.altKey) {
            alert("Haz lanzado una alerta con el teclado");
        }
        if (e.key === "c" && e.altKey) {
            confirm("Haz lanzado una confirmación con el teclado");
        }
        if (e.key === "p" && e.altKey) {
            prompt("Haz lanzado un prompt con el teclado");
        }
    }

    document.addEventListener("keydown", (e)=>{
        shortcuts(e);
        moveBall(e, ".ball", ".stage"); 
    });
}

export default KeyboardEvents;



