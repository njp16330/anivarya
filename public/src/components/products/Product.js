import React from 'react';
import {win} from '../../dep';

export default class Product extends React.Component {
    constructor(props){
        super(props);

        this.state = {  };
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
                <a className="details-link" href={'/product/' + this.props.data.id} target="_blank">
                    {this.props.data.title} Details
                </a>
            </div>
        </li>;
    }
}