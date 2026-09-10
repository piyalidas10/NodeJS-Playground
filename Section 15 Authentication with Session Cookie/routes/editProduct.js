const bodyParser = require('body-parser');
const express = require('express');
const router = express.Router();
const { renderEditProduct, editProduct } = require('../controllers/productController');

router.use(bodyParser.urlencoded());

router.get('/:id',renderEditProduct);

router.post('/:id', editProduct);

module.exports = router;