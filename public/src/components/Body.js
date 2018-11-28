import React from 'react';
import Products from './products/Products';
import ProductDetails from './products/ProductDetails';

export default class Body extends React.Component{
    constructor(props){
        super(props);

        //console.log(this.props);
        
        this.state = {hash: null, productDetails: this.props.productDetails, products: this.props.products};
    }

    render (){
        if(this.state.productDetails){
            return <ProductDetails product={this.state.productDetails}></ProductDetails>
        }
        else{
            return (<div className="body">
                <b>Welcome To Ani Engineers</b><br />
                Anivarya Pumps is one of the leading Manufacturing firm in India for Gear Pump, Rotary Gear Pump, Helical Gear Pump, Stainless Steel, Liquid Pump, Lobe, Oil, Industrial Pumps and Pumping Systems. <br /><br />
                Anivarya Pumps offers Heavy Duty Gear Pumps which is useful for pumping and transferring of heavy fuel oils. Generally made of iron Gear pump are also available in cast steel, stainless steel.<br /><br />
                
                <Products products={this.state.products || []}></Products>
            </div>);
        }
    }
}