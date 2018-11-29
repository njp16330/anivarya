import React from 'react';
import {renderToString as rs} from 'react-dom/server';
import Main from './components/Main';
//import template

module.exports = function render(data){
    //console.log(data);
    return rs(<Main data={data}></Main>);
};