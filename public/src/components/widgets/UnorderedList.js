import React from 'react';

export default class UnorderedList extends React.Component {
    constructor(){
        super();
    }

    render(){
        return <div className="unordered-list">
            <ul>{this.props.data.map(i => <li>{i}</li>)}</ul>
        </div>;
    }
}