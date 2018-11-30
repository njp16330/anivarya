var products = require('./data/products');
var productDetails = require('./data/productDetails');
var aboutTxt = require('./data/aboutTxt');
var apps = require('./data/applications');
var downloads = require('./data/downloads');
var quality = require('./data/quality');


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
function getApplications(callback){
    if(callback) callback(null, apps);
}

function getDownloads(callback){
    if(callback) callback(null, downloads);
}
function getQuality(callback){
    if(callback) callback(null, quality);
}

module.exports.getProducts = getProducts;
module.exports.getProductDetails = getProductDetails;
module.exports.getAbout = getAbout;
module.exports.getApplications = getApplications;
module.exports.getDownloads = getDownloads;
module.exports.getQuality = getQuality;