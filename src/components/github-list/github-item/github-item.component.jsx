import React from 'react';
import './github-item.style.css';

import { Link } from 'react-router-dom';

const GithubItem = ({ user }) => {
    const {
        avatar_url, login
    } = user;


    return(
        <div className='github-item'>
            <img height='60px' src={avatar_url} />
            <div>
                <h4>{ login }</h4>
                <Link className='github-item__link'>Visit Profile</Link>
            </div>
        </div>
    )
}

export default GithubItem;