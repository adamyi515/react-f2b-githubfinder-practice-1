import React from 'react';
import './header.style.css';
import { FaGithub } from 'react-icons/fa';

// react-router-dom
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <header className='header'>
            <div>
                <FaGithub /> Github Finder
            </div>
            <ul className='header-menu'>
                <li>
                    <Link to='/' className='menu-item__link'>HOME</Link>
                </li>
                <li>
                    <Link to='/about'  className='menu-item__link'>ABOUT</Link>
                </li>
            </ul>
        </header>
    )
}

export default Header;