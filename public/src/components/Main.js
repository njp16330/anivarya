import React from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Body from './Body';
import Footer from './Footer';



export default class Main extends React.Component{
    constructor(){
        super();
    }

    render (){
        return (<div className="container-fluid">
            <Header></Header>
            <Body></Body>
            <Footer></Footer>
        </div>);
    }
}