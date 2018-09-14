import React from 'react';
import ProductDetails from './ProductDetails';

export default class Product extends React.Component {
    constructor(){
        super();

        this.state = { detailsVisible: false };
    }

    onDetailsClick(e){
        this.setState({detailsVisible: !this.state.detailsVisible});
    }

    render(){
        return <li className="list-group-item">
            <b>{this.props.data.title}</b><br />
            <div className="row">
                <div className="col-md-3">
                    <img src={this.props.data.img} className="display" />
                </div>
                <div className="col-md-9" dangerouslySetInnerHTML={{__html: this.props.data.body}}>
                </div>
            </div>
            <div className="text-right">
                <span className="details-link" onClick={this.onDetailsClick.bind(this)}>
                    {this.props.data.title} Details
                </span>
            </div>
            <ProductDetails productId={this.props.data.id} show={this.state.detailsVisible}></ProductDetails>
        </li>;
    }
}