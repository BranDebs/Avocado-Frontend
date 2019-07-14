import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLink from './SignedInLink'
import SignedOutLink from './SignedOutLink'
import './Navbar.css'
import M from "materialize-css/dist/js/materialize.min.js";
import App from '../../App'

class Navbar extends React.Component {

    componentDidMount() {
        var elem = document.querySelector(".sidenav");
        var instances = M.Sidenav.init(elem, {
            edge: "left",
            inDuration: 250
        });
    }

    render() {
        return (
            <div>
                <nav className="nav-wrapper">
                    <div className="container">
                        <Link to='/' className="left Navbar-brand-logo">
                            <img src="/src/images/Avocadoro-icon.png"></img>
                            <span>Avocadoro</span>
                        </Link>
                        <a href="#" data-target="mobile-links" class="sidenav-trigger">
                            <i class="material-icons">menu</i>
                        </a>
                        <ul id="nav-mobile" class="right hide-on-med-and-down">
                            {/* <SignedInLink></SignedInLink> */}
                            <SignedOutLink></SignedOutLink>
                        </ul>
                    </div>
                </nav>
            
            <ul class="sidenav" id="mobile-links">
                <SignedInLink></SignedInLink>
                <SignedOutLink></SignedOutLink>
            </ul>
            </div>
        )
    }
}


export default Navbar;