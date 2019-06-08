import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLink from './SignedInLink'
import SignedOutLink from './SignedOutLink'

// Functional component
const Navbar = () => {
    return (
        <nav className="nav-wrapper">   
            <div className="container">
                <Link to='/' className="brand-logo">Avocadoro</Link>
                <SignedInLink></SignedInLink>
                <SignedOutLink></SignedOutLink>
            </div>
        </nav>
    )
}

export default Navbar;