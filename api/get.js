var products = require('./data/products');
var productDetails = require('./data/productDetails');
var aboutTxt = require('./data/aboutTxt');


function getProducts(callback){
    if(callback) callback(null, products);
};
function getProductDetails(id, callback){
    if(isNaN(id)) {
        if(callback) callback(null, null);
    }
    else{
        if(callback) callback(null, productDetails[id]);
    }
        
};
function getAbout(callback){
    if(callback) callback(null, aboutTxt);
}

module.exports.getProducts = getProducts;
module.exports.getProductDetails = getProductDetails;
module.exports.getAbout = getAbout;