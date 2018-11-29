import React from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Body from './Body';
import Footer from './Footer';

export default class Main extends React.Component{
    constructor(props){
        super(props);

        //console.log(this.props);
    }

    render (){
        return (<div className="container-fluid">
            <Header></Header>
            <Body data={this.props.data} ></Body>
            <Footer></Footer>
        </div>);
    }
}