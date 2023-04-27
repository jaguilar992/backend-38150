const express = require('express');
const router = express.Router();
const debug = require('../debug.logger');

const products = [
  {name: 'laptop'},
  {name: 'calculadora'},
  {name: 'mouse'},
]

/* GET home page. */
router.get('/', function(req, res, next) {
  debug('products', products);
  res.render('products', { products });
});

router.post('/', function (req, res, next) {
  products.push({ name: req.body.name });
  res.redirect('/products');
})

module.exports = router;
