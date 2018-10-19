import React from 'react';
import styles from '../../../sass/components/widgets/Paragraph.sass';

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