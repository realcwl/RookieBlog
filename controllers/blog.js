var express = require('express');
var router = express.Router();
var View = require('../views/base');
var Model = require('../models/blogModel');
ObjectId = require('mongodb').ObjectId;

router.get('/', function(req, res, next){

    var view = new View(res, 'default/blogPage');
    view.render();

});

router.get('/:id', function(req, res, next){
    console.log(ObjectId(req.params.id));
    var view = new View(res, 'default/blogPage');
    var model = new Model(req.db);
    model.getArticles(function(data){
       view.render({articles: data});
    }, {
            '_id': ObjectId(req.params.id)
        },{
            'MD_parse': true
        }
    );
});

module.exports = router;