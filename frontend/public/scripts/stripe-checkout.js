import STRIPE_KEYS from './stripe-keys.js';



window.addEventListener("load", ()=> {
    
    let $sandalias = document.getElementById("sandalias");
    let $template = document.getElementById("sandalia-template").content;
    let $fragment = document.createDocumentFragment();
    let fetchOptions = {
        headers: {
            Authorization: `Bearer ${STRIPE_KEYS.secret}` 
        }
    }

    let prices, products;

    const moneyFormat = (num) => `$${num.slice(0,-2)}.${num.slice(-2)}`

    Promise.all([
        fetch("https://api.stripe.com/v1/products", fetchOptions),
        fetch("https://api.stripe.com/v1/prices", fetchOptions),
    ])
    .then((responses)=> Promise.all(responses.map((res)=> res.json())))
    .then((json)=> { 
        products = json[0].data;
        prices = json[1].data;

        prices.forEach((price)=>{
            let productData = products.filter((product)=> product.id == price.product);

            $template.querySelector(".sandalia").setAttribute("data-price", price.id);
            $template.querySelector("img").src = productData[0].images[0];
            $template.querySelector("img").alt = productData[0].name;
            $template.querySelector("figcaption").innerHTML = `
            ${productData[0].name}
            <br>
            ${moneyFormat(price.unit_amount_decimal)} ${price.currency}
            `
            let clone = document.importNode($template, true);
            $fragment.appendChild(clone);
        });

        $sandalias.appendChild($fragment);
    })
    .catch((err)=>{
        console.log(err);
        let message = err.statusText || "Ha ocurrido un error";
        $sandalias.innerHTML = message
    })

});
document.addEventListener("click",(e)=>{
    if (e.target.matches(".sandalia *")) {
        let priceId = e.target.parentElement.getAttribute("data-price");
        console.log(priceId);

        // LIBRERÍA STRIPE (OBJETO)
        Stripe(STRIPE_KEYS.public)
        .redirectToCheckout({
            lineItems: [{price: priceId,quantity: 1}],
            mode: "payment",
            successUrl: "http://127.0.0.1:5500/CV/frontend/views/sub-view-multiple-uploads/paySuccess.html",
            cancelUrl: "http://127.0.0.1:5500/CV/frontend/views/sub-view-multiple-uploads/payCancel.html"
        })
        .then((resCheckout) => { 
            if (resCheckout.error) {
            $sandalias.insertAdjacentHTML("Afterend", res.error.message)
             }
        });
    }
});


