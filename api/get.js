var products = require('./data/products');
var productDetails = require('./data/productDetails');


function getProducts(callback){
    if(callback) callback(null, products);
};
function getProductDetails(id, callback){
    if(id > 1 || isNaN(id)) {
        if(callback) callback(null, null);
    }
    else{
        if(callback) callback(null, productDetails[id]);
    }
        
};

module.exports.getProducts = getProducts;
module.exports.getProductDetails = getProductDetails;