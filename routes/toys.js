var express = require('express');
var router = express.Router();
const toysCtrl = require('../controllers/toys/toys');

// GET /toys
router.get('/', toysCtrl.index);
// GET /toys/new
router.get('/new', toysCtrl.new);
// POST /toys
router.post('/', toysCtrl.create);

module.exports = router;
