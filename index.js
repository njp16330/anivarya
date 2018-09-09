var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var getProducts = require('./api/get_products');

var app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
    res.render('index.html');
});

app.get('/api/get/products', function(req, res){
    getProducts(function(err, data){
        res.json(data);
    });
});

var port = process.env.PORT || 3000;

app.listen(port, function(){
    console.log('listening on '+port+'...');
});