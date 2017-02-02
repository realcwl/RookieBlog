var express = require('express');
var router = express.Router();
var View = require('../views/base');
var Model = require('../models/blogModel');

router.get('/', function(req, res, next){

    var view = new View(res, 'default/index'); //temporarily put index here, will be changed soon.
    var model = new Model(req.db);
    model.getArticles(function(data){
        view.render({articles:data});
    });



});

module.exports = router;