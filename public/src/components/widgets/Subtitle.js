import React from 'react';

export default class Subtitle extends React.Component {
    constructor(){
        super();
    }

    render(){
        return <div className="subtitle">
            <h4>{this.props.data}</h4>
        </div>;
    }
}