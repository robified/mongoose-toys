var express = require('express');
var router = express.Router();
const toysCtrl = require('../controllers/toys/toys');

// GET /toys/new
router.get('/new', toysCtrl.new);

module.exports = router;
