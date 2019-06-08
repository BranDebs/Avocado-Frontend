import React from 'react'
import { NavLink } from 'react-router-dom'

// Functional component
const SignedInLink = () => {
    return (
        <ul className="right">
            <li>
                <NavLink to='/'>New</NavLink>
            </li>
            <li>
                <NavLink to='/'>Logout</NavLink>
            </li>
            <li>
                <NavLink to='/' className='btn btn-floating pink'>deb</NavLink>
            </li>
        </ul>
    )
}

export default SignedInLink;