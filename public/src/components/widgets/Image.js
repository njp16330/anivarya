import React from 'react';

export default class Image extends React.Component {
    constructor(){
        super();
    }

    render(){
        return <div className="image">
            <img src={this.props.data}></img>
        </div>;
    }
}