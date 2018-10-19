import React from 'react';
import styles from '../../../sass/components/widgets/Title.sass';

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