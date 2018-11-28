import React from 'react';
import {renderToString as rs} from 'react-dom/server';
import Main from './components/Main';
//import template

module.exports = function render(products, productDetails){
    //console.log(products, productDetails);
    return rs(<Main products={products} productDetails={productDetails}></Main>);
};