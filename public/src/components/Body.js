import React from 'react';
import Products from './products/Products';
import ProductDetails from './products/ProductDetails';
import Paragraph from './widgets/Paragraph';
import Title from './widgets/Title';

export default class Body extends React.Component{
    constructor(props){
        super(props);

        //console.log(this.props);
        
        this.state = {hash: null, data: this.props.data};
    }

    render (){
        if(this.state.data.type === 'details'){
            return <ProductDetails product={this.state.data.data}></ProductDetails>;
        }
        else if(this.state.data.type === 'about'){
            let txt = this.state.data.data.map(v => <Paragraph data={v}></Paragraph>);
            return (<div className="body">
                <Title data={"About Ani Engineers"}></Title><br />
                {txt}
            </div>);
        }
        else if(this.state.data.type === 'applications'){
            return <ProductDetails product={this.state.data.data}></ProductDetails>;
        }
        else if(this.state.data.type === 'downloads'){
            let links = this.state.data.data.map(v => <div><a href={v.url} target="_blank">{v.text}</a></div>);
            return (<div className="body">
                <Title data={"Product Catalogs"}></Title><br />
                {links}
            </div>);
        }
        else if(this.state.data.type === 'quality'){
            return <ProductDetails product={this.state.data.data}></ProductDetails>;
        }
        else{
            return (<div className="body">
                <Title data={"Welcome To Ani Engineers"}></Title><br />
                Anivarya Pumps is one of the leading Manufacturing firm in India for Gear Pump, Rotary Gear Pump, Helical Gear Pump, Stainless Steel, Liquid Pump, Lobe, Oil, Industrial Pumps and Pumping Systems. <br /><br />
                Anivarya Pumps offers Heavy Duty Gear Pumps which is useful for pumping and transferring of heavy fuel oils. Generally made of iron Gear pump are also available in cast steel, stainless steel.<br /><br />
                
                <Products products={this.state.data.data || []}></Products>
            </div>);
        }
    }
}