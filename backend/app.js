const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');



// app.use(cors({ origin:"http://127.0.0.1:5500" }));
app.use(cors({ origin:"http://localhost:3000" }));
app.use(express.json({
  type: ['application/json', 'text/plain']
}));



// ROUTES
app.get("/", (req, res)=> {

  try {

    // TRUE/FALSE

    if (true) {
    console.log("Petición http recibida del frontend con GET");
    setTimeout(()=>{res.send("¡Hemos recibido tu mensaje con éxito!")}, 3000);
    } else {
      throw new Error("Se ha detectado un error 500 por parte del servidor");
    }
      
  } catch (err) {
    // CAMBIAMOS EL STATUS PARA CAMBIAR EL VALOR res.ok EN EL CLIENTE Y SE EXTRAIGA EL ERROR CON CATCH
    setTimeout(()=>{ res.status(401).send(err.message)}, 3000);
  }
});

app.post("/", (req, res)=> {

  try {

    // TRUE/FALSE

    if (true) {
    console.log(req.body);
    console.log("Petición http recibida del frontend con POST");
    setTimeout(()=>{res.send(`${req.body.name} ¡Hemos recibido tu mensaje con éxito!`)}, 3000);
    } else {
      throw new Error("Se ha detectado un error 500 por parte del servidor");
    }
      
  } catch (err) {
    // CAMBIAMOS EL STATUS PARA CAMBIAR EL VALOR res.ok EN EL CLIENTE Y SE EXTRAIGA EL ERROR CON CATCH
    setTimeout(()=>{ res.status(401).send(err.message)}, 3000);
  }
});


// SERVER
app.set("port", 5000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.listen(app.get("port"), () => {
  console.log(`Server listening at http://localhost:${app.get("port")}`);
});