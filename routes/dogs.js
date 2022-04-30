var express = require('express');
var router = express.Router();
const dog = require('../services/dog');

/* GET users listing. */
router.get('/', function(req, res, next) {
  return dog.get(req,res);
});

router.get('/:id', function(req, res, next) {
    return dog.getById(req,res);
  });

module.exports = router;