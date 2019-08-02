const express = require('express');
const bodyParser = require('body-parser');
const controllerReplique = require('../controller/replique');

const router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/piquette/:nom', function(req, res, next) {
  var nom = req.params.nom;
  var imageNumber = Math.floor(Math.random() * 5) + 1 
  res.render('piquette', { 
    nom_user: nom, 
    imageNumber: imageNumber
  });
});

router.get('/replique/:permalien', controllerReplique.getPerma);

router.get('/sitemap.xml', controllerReplique.sitemap);


module.exports = router;
