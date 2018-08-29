var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
    res.render('index.html');
});

app.listen(3000, function(){
    console.log('listening on localhost:3000...');
});