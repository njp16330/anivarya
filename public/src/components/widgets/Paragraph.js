import React from 'react';

export default class Paragraph extends React.Component {
    constructor(){
        super();
    }

    render(){
        return <div className="paragraph">
            <p>{this.props.data}</p>
        </div>;
    }
}