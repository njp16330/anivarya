import React from 'react';
import Product from './Product';

export default class Products extends React.Component {
    constructor(){
        super();
    }

    render(){
        var prodlist = this.props.products.map(v => <Product data={v}></Product>);
        return <ul className="list-group">
            {prodlist}
        </ul>;
    }
}