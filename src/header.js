import React from 'react';
import './css/header.css'
import stone from './css/Stonewall-Image.jpg'
function Header() {
    return (
        <header>
            <a href="/QueerApp">
        <div className="header">

            <img src={stone}/>
        </div>
            </a>
            </header>
    );
}

export default Header
