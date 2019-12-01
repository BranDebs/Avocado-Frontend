import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import SignedOutLink from './SignedOutLink';
import './Navbar.css';
import AvocadoroLogo from './../../images/Avocadoro-icon.png';

const Navbar = (props) => {

    return (
        <div>
            <nav className="nav-wrapper">
                <div className="container">
                    <Link to='/' className="left Navbar-brand-logo">
                        <img className="nav-logo" src={AvocadoroLogo}></img>
                        <span>Avocadoro</span>
                    </Link>
                    <a href="#" data-target="mobile-links" className="sidenav-trigger">
                        <i className="material-icons">menu</i>
                    </a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <SignedOutLink/>
                    </ul>
                </div>
            </nav>
        <ul className="sidenav" id="mobile-links">
            <SignedOutLink/>
        </ul>
        </div>
    );
};

export default Navbar;