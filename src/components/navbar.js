import React from 'react'
import logo from '../images/logo.png'
import '../styles/navbar.css'

function Navbar() {
    return (
        <nav>
            <img className="logo" src={logo} alt="logo" />
            <span className="name">LyricIT</span>
        </nav>
            
        
    )
}

export default Navbar
