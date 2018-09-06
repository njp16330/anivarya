import React from 'react';

var products = [{
    title: 'Heavy Duty Gear Pumps',
    body: 'Heavy duty gear pumps are complete SS-136 investment cast construction with teflon coated or polymer bush and PTFE sealant. Suitable to handle acids, dyes, syrups and other corrosive chemicals.',
    img: '/img/heavydutygear.gif'
},
{
    title: 'Internal Gear Pumps',
    body: 'Internal gear pumps are fuel pressuring internal gear type pumps, for handling fuel oils in boilers and burners, heating and pumping systems. Built in pressure relief valve and capacity by-pass.',
    img: '/img/internalgear.gif'
},
{
    title: 'Helical Gear Pump',
    body: 'Helical gear pump are useful for pumping and transfer of all viscous liquids, oils and petroleum products.',
    img: '/img/helicalgear.gif'
},
{
    title: 'Flanged Mounted Gear Pumps',
    body: 'Flanged mounted gear pumps are modified version of SG series pumps with wider capacity range and facility for foot or flange mounting. Suitable for OEMS.',
    img: '/img/flangedmountedgear.gif'
},
{
    title: 'Stainless Steel Gear Pumps',
    body: 'SS Gear pumps are complete SS-136 investment cast construction with teflon coated or polymer bush and PTFE sealant. Suitable to handle acids, dyes, syrups and other corrosive chemicals.',
    img: '/img/ssgear.gif'
},
{
    title: 'Rotary Lobe Pumps',
    body: 'Rotary Lobe pumps are useful for all high viscous product. SS-316 pumping chamber. applicable for Food, Pharma, Paint & Sewage industries. Tri lobe design.',
    img: '/img/rotarylobe.gif'
},
{
    title: 'Pumping Systems',
    body: '<ul><li>Useful for fuel oil loading and unloading</li> <li>Pumping & Heating system</li> <li>Force feed lubrication system</li> <li>Circulation & cooling system</li> <li>Pumping & filtration system</li> </ul>',
    img: '/img/pumpingsys.gif'
}];

export default class Body extends React.Component{
    constructor(){
        super();
    }

    render (){
        return <div className="body">
            <b>Welcome To Ani Engineers</b><br />
            Anivarya Pumps is one of the leading Manufacturing firm in India for Gear Pump, Rotary Gear Pump, Helical Gear Pump, Stainless Steel, Liquid Pump, Lobe, Oil, Industrial Pumps and Pumping Systems. <br />
            Anivarya Pumps offers Heavy Duty Gear Pumps which is useful for pumping and transferring of heavy fuel oils. Generally made of iron Gear pump are also available in cast steel, stainless steel.<br /><br />
            
            <Products products={products}></Products>
        </div>
    }
}

class Products extends React.Component {
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

class Product extends React.Component {
    constructor(){
        super();
    }

    render(){
        return <li className="list-group-item">
            <b>{this.props.data.title}</b><br />
            <div className="row">
                <div className="col-md-3">
                    <img src={this.props.data.img} className="display" />
                </div>
                <div className="col-md-9">
                    {this.props.data.body}
                </div>
            </div>
        </li>;
    }
}