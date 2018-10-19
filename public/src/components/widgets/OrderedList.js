import React from 'react';
import styles from '../../../sass/components/widgets/OrderedList.sass';

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