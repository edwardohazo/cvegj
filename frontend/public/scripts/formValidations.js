// VALIDACIONES FORMULARIO


const d = document;
export function contactFormValidations () {

    const $inputs = d.querySelectorAll(".contact_form [required]");

    $inputs.forEach((requiredInput)=>{
        const $span = d.createElement("span");
        $span.id = requiredInput.name
        $span.textContent = requiredInput.title;
        $span.classList.add("contact-form-error","none");
        requiredInput.insertAdjacentElement("afterend",$span);
    });

    d.addEventListener("keyup",(e)=>{
        if (e.target.matches(".contact_form [required]")) {
            let $input = e.target,
            pattern = $input.pattern || $input.dataset.pattern;

            if ($input.value !== "") {
                let regex = new RegExp(pattern);
                return !regex.exec($input.value) ? 
                  d.getElementById($input.name).classList.add("is-active")
                : d.getElementById($input.name).classList.remove("is-active");
            } else if ($input.value == "") {
                  d.getElementById($input.name).classList.remove("is-active");
            }

            if (!pattern) {
                $input.value == "" ? 
                d.getElementById($input.name).classList.add("is-active")
                : d.getElementById($input.name).classList.remove("is-active")
            }
        } 
    });

    d.addEventListener("submit", (e)=>{

        e.preventDefault();

        // FORMULARIO
        const $form = d.querySelector(".contact_form");
        // FORMDATA
        const formData = new FormData($form);
        // formData.append("name",$inputs[0].value);
        // formData.append("email",$inputs[1].value);
        // formData.append("subject",$inputs[2].value);
        // formData.append("comments",$inputs[3].value);
        // URLSEARCHPARAMS
        const data = new URLSearchParams(formData);

        // OBJETO PROVISIONAL:
        const info = {
            name: $inputs[0].value,
            email: $inputs[1].value,
            subject: $inputs[2].value,
            comments: $inputs[3].value,
        }
        

        alert("Enviando formulario");
    
        const $loader = d.querySelector(".contact-form-loader"),
        $response = d.querySelector(".contact-form-response");
        $loader.classList.remove("none");
    
        setTimeout(()=>{
            $loader.classList.add("none");
            $response.classList.remove("none");
            $form.reset();
    
            setTimeout(()=>{$response }, 3000);
        }, 3000);



        // ENVIANDO INFORMACIÓN DEL FORMULARIO CON FETCH

        // POST
        const segundoParametro = {
            method: "POST",
            header: {

                // HEADER COMBINATIONS:

                "Content-Type": "application/json",
                // 'Content-Type': 'text/plain;charset=UTF-8'
                // "Content-Type": "application/x-www-form-urlencoded"
                // "Content-Type": "text/plain"

                'Accept': 'application/json'
            },
   
            // BODY COMBINATIONS:

            // body: $form
            // body: JSON.stringify($form)

            // body: data
            // body: JSON.stringify(data)

            // body: formData
            // body: JSON.stringify(formData)

            // BODY PROVISIONAL CON OBJETO:

            body: JSON.stringify(info)

        }

        fetch("http://localhost:5000", segundoParametro)


        // GET
        // fetch("http://localhost:5000")

        // PODRÍA SER CON OPERADOR TERNARIO
        .then((res)=>{ if(res.ok) {return Promise.resolve(res)} else { return Promise.reject(res)}})
        .then((res)=> res.text())
        .then((res)=> $response.innerHTML = `<p>${res}</p>`)
        .catch((error)=> error.text().then((err)=> $response.innerHTML = `<p>${err}</p>`))
        .finally(()=>{
            setTimeout(()=>{
                $response.innerHTML = "";
                $response.classList.add("none");
            },5000);
        });
        });
}

