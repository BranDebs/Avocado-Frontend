import React from 'react'
import { NavLink } from 'react-router-dom'

// Functional component
const SignedInLink = () => {
    return (
        <div>
            <li>
                    <NavLink to='/'>New</NavLink>
                </li>
                <li>
                    <NavLink to='/'>Logout</NavLink>
                </li>
                <li>
                    <NavLink to='/' className='btn btn-floating red'>deb</NavLink>
                </li>
        </div>
    )
}

export default SignedInLink;