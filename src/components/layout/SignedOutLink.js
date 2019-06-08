import React from 'react'
import { NavLink } from 'react-router-dom'

// Functional component
const SignedOutLink = () => {
    return (
        <ul className="right">
            <li>
                <NavLink to='/'>About</NavLink>
            </li>
            <li>
                <NavLink to='/'>Login</NavLink>
            </li>
            <li>
                <NavLink to='/'>Sign Up</NavLink>
            </li>
        </ul>
    )
}

export default SignedOutLink;