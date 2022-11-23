const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const include = require('./routes/generalRoutes');
const multer = require('multer');



const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "public/uploads"))
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
  });

  app.use(multer({
    storage: fileStorageEngine
  }).array("files"));
  // }).array("files",3));

app.use(cors({ origin:"http://localhost:3000" }));
app.use(express.json({
  type: ['application/json', 'text/plain']
}));
app.use(express.static(__dirname + "/public"));



// ROUTES
app.use("/", include);

// DRAG AND DROP MULTIPLE ULOADER
app.post('/multipleUploads', (req, res) => {
 
  // OBJETO/ARRAY MOSTRADO EN CONSOLA DEL BACKEND
  console.log("Array con archivos:", req.files);

  // OBJETO/ARRAY MOSTRADO EN CONSOLA DEL NAVEGADOR
  res.send(req.files);
});


// SERVER
app.set("port", 3000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.listen(app.get("port"), () => {
  console.log(`Server views listening at http://localhost:${app.get("port")}`);
});
