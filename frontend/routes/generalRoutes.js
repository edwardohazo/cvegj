const router = require('express').Router();



// RUTAS GENERALES EJERCICIOS DOM
router.get("/dom-practicas", (req, res)=> { res.render("dom-practicas")});



// RUTAS GENERALES EJERCICIOS AJAX
router.get("/form-ajax", (req, res)=> { res.render("form-ajax")});
router.get("/uploader", (req, res)=> { res.render("multiple-uploads")});
router.get("/stripe-payments", (req, res)=> { res.render("stripe-payments")});
router.get("/blog-empirico", (req, res)=> { res.render("blog-empirico")});



module.exports = router;

