import React from 'react';
import axios from 'axios';
import Products from './products/Products';
import ProductDetails from './products/ProductDetails';
import {win} from '../dep';

export default class Body extends React.Component{
    constructor(){
        super();
        
        this.state = {hash: null, productId: null, products: null};
    }

    componentWillMount(){
        var ctxt = this;
        if(!this.checkHash()){
            axios.get('/api/get/products').then(function(res){
                //console.log(res.data);
                ctxt.setState({hash: null, productId: null, products: res.data});
            });
        }        
    }
    checkHash(){
        var isHash = false;
        if(win.location.hash){
            if(win.location.hash.indexOf('#prod-') === 0){
                
                let pid = win.location.hash.split('-')[1];
                if(!isNaN(pid)){
                    isHash = true;
                    this.setState({
                        hash: isHash, productId: pid, products: null
                    });
                }
            }
        }

        return isHash;
    }

    render (){
        if(this.state.productId){
            return <ProductDetails productId={this.state.productId}></ProductDetails>
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