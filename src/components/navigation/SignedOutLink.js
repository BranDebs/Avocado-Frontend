import React from 'react'
import { NavLink } from 'react-router-dom'

// Functional component
const SignedOutLink = () => {
    return (
        <div>
            <li>
                <NavLink to='/'>Login</NavLink>
            </li>
            <li>
                <NavLink to='/'>Sign Up</NavLink>
            </li>
        </div>
    )
}

export default SignedOutLink;