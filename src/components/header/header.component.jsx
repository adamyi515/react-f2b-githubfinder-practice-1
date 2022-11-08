import React from 'react';
import './header.style.css';
import { FaGithub } from 'react-icons/fa';

const Header = () => {
    return(
        <header className='header'>
            <div>
                <FaGithub />
            </div>
            <ul className='header-menus'>
                <li>HOME</li>
                <li>ABOUT</li>
            </ul>
        </header>
    )
}

export default Header;