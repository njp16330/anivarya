import React from 'react';

export default class Product extends React.Component {
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
                <div className="col-md-9" dangerouslySetInnerHTML={{__html: this.props.data.body}}>
                </div>
            </div>
        </li>;
    }
}