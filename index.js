var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
    res.render('index.html');
});

var port = process.env.port || 8080;

app.listen(port, function(){
    console.log('listening on '+port+'...');
});