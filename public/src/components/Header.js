import React from 'react';

export default class Header extends React.Component{
    constructor(){
        super();
    }

    render (){
        return <div className="header">
            <img className="logo" src="/img/Anivarya-Pumps-Logo.png" />
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" target="_self" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" target="_self" href="/about">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" target="_self" href="/applications">Applications</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" target="_self" href="/downloads">Downloads</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" target="_self" href="/quality">Quality</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    }
}