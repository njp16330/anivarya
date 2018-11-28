import React from 'react';

export default class OrderedList extends React.Component {
    constructor(){
        super();
    }

    render(){
        return <div className="ordered-list">
            <ol>{this.props.data.map(i => <li>{i}</li>)}</ol>
        </div>;
    }
}