import React from 'react';
import {hydrate} from 'react-dom';
import Main from './components/Main';

let state = window.__STATE__;

//delete window.__STATE__;

hydrate(<Main products={state.products} productDetails={state.productDetails}></Main>, 
    document.getElementById('main-container'));