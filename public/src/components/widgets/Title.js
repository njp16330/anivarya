import React from 'react';

export default class Title extends React.Component {
    constructor(){
        super();
    }

    render(){
        return <div className="title">
            <h2>{this.props.data}</h2>
        </div>;
    }
}