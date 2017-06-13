var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://projetoles:projetoles@ds121192.mlab.com:21192/isadb',['clientes']);


// Get Clientes
router.get('/clientes', function(req, res, next){
    db.clientes.find(function(err, clientes){
        if(err){
            res.send(err);
        }else {
            res.json(clientes);
        }
    });
});

module.exports = router;


