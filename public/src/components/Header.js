import React from 'react';

export default class Header extends React.Component{
    constructor(){
        super();
    }

    render (){
        return <div className="header">
            <img className="logo" src="/img/Anivarya-Pumps-Logo.png" />
        </div>
    }
}