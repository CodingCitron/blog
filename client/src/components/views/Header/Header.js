import './Header.css'
import React, { useState } from 'react'
import { withRouter } from 'react-router-dom';
import Submenu from './Submenu';

function Header(props){
    const [ToggleNav, setToggleNav] = useState(false)

    function navMenuButton(e){
        return setToggleNav(e.currentTarget.classList.toggle('active'))
    }

    return (
        <div>
            <header className="header">
            <div className="inner">
                <div className="logo">
                    <a href='/'>blog</a>
                </div>
                <nav className="nav mobile">
                    <ul className="menu">
                        <li><a href="/">Home</a>
                        </li>
                        <li><a href="#">Gallery</a>
                        </li>
                        <li><a href="#">Contact</a>
                        </li>
                        <li><a href="#">Function</a>
                           <Submenu />
                        </li>
                    </ul>
                </nav>
                <div className="menu-box">
                    <div className="hambuger-button" onClick={navMenuButton}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
            </header>
            <nav className={ToggleNav? 'nav-mobile active' : 'nav-mobile'}>
                <div className="inner">
                    <ul className="dropdown-menu">
                        <li><a href="#" className="title">Front-end</a>
                            <ul className="submenu">
                                <li><a href="#">HTML</a></li>
                                <li><a href="#">CSS</a></li>
                                <li><a href="#">JavaScript</a></li>
                            </ul>
                        </li>
                        <li><a href="#" className="title">Back-end</a>
                            <ul className="submenu">
                                <li><a href="#">NodeJs</a></li>
                                <li><a href="#">Java</a></li>
                                <li><a href="#">Python</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="header-space"></div>
        </div>
    )
}

export default withRouter(Header)