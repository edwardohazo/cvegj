function ResponsiveTester (form) {


    const $form = document.getElementById(form);
    let tester;

    document.addEventListener("submit", (e)=>{

        if (e.target === $form) {
            // console.log($form.direction);
            e.preventDefault();
            tester = window.open($form.direction.value, "_blank", `innerWidth=${$form.width.value}, innerHeight=${$form.height.value}`);
        }

    });
    document.addEventListener("click", (e)=>{
        if (e.taget === $form.close) {
            tester.close();
        }
    });
};


export default ResponsiveTester;