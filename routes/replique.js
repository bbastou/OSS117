const express = require('express');
const bodyParser = require('body-parser');
const controllerReplique = require('../controller/replique');

const router = express.Router();

router.get('/', controllerReplique.list);
router.get('/random', controllerReplique.random);

module.exports = router;
