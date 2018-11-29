import React from 'react';

export default class Header extends React.Component{
    constructor(){
        super();
    }

    render (){
        return <div className="header">
            <img className="logo" src="/img/Anivarya-Pumps-Logo.png" />
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a className="nav-link" target="_self" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a className="nav-link" target="_self" href="/about">About Us</a>
                        </li>
                    </ul>
                </div>
            </nav>
            
        </div>
    }
}