var express = require('express');
var router = express.Router();
var View = require('../views/base');

router.get('/', function(req, res, next){

    var view = new View(res, 'default/login'); //temporarily put index here, will be changed soon.
    view.render();



});

module.exports = router;