import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <header className="header__div">
            <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
                <h1>
                    Micro Blogging Site
                </h1>
            </Link>
        </header>
    )
}

export default Header
