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

var setResponse = function(res, data){
    const content = ssr(data);
    const response = template("Anivarya", data, content);
    res.setHeader('Cache-Control', 'assets, max-age=604800');
    res.send(response);
}

app.get('/', (req, res) => {
    getAPI.getProducts(function(err, data){
        setResponse(res, {type: 'products', data: data});
    });
});
app.get('/about', (req, res) => {
    getAPI.getAbout(function(err, data){
        setResponse(res, {type: 'about', data: data});
    });
});
app.get('/applications', (req, res) => {
    getAPI.getApplications(function(err, data){
        setResponse(res, {type: 'applications', data: data});
    });
});
app.get('/downloads', (req, res) => {
    getAPI.getDownloads(function(err, data){
        setResponse(res, {type: 'downloads', data: data});
    });
});
app.get('/quality', (req, res) => {
    getAPI.getQuality(function(err, data){
        setResponse(res, {type: 'quality', data: data});
    });
});
app.get('/product/:productid', (req, res) => {
    getAPI.getProductDetails(req.params.productid, function(err, data){
        setResponse(res, {type: 'details', data: data});
    });
});

var port = process.env.PORT || 3000;

app.listen(port, function(){
    console.log('listening on '+port+'...');
});