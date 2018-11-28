var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var getAPI = require('./api/get');

var app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

const ssr = require('./views/server');
const template = require('./api/templates/main');

// app.get('/', function(req, res){
//     res.render('index.html');
// });
// app.get('/api/get/products', function(req, res){
//     getAPI.getProducts(function(err, data){
//         res.json(data);
//     });
// });
// app.get('/api/get/productDetails', function(req, res){
//     getAPI.getProductDetails(parseInt(req.query.id), function(err, data){
//         res.json(data);
//     });
// });

app.get('/', (req, res) => {
    getAPI.getProducts(function(err, data){
        const content = ssr(data);
        const response = template("Anivarya", {products: data}, content);
        res.setHeader('Cache-Control', 'assets, max-age=604800');
        res.send(response);
    });
});

app.get('/:productid', (req, res) => {
    getAPI.getProductDetails(req.params.productid, function(err, data){
        const content = ssr(null, data);
        const response = template("Anivarya", {productDetails: data}, content);
        res.setHeader('Cache-Control', 'assets, max-age=604800');
        res.send(response);
    });
});

var port = process.env.PORT || 3000;

app.listen(port, function(){
    console.log('listening on '+port+'...');
});