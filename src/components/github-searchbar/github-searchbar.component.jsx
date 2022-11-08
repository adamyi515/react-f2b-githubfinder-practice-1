import React, { useState, useContext } from 'react';
import './github-searchbar.style.css';

// Actions
import { searchGithubUsers } from '../../context/github.actions';
import { GithubContext } from '../../context/github.context';

const GithubSearchbar = () => {
    const [text, setText] = useState('');
    const { dispatch, isLoading } = useContext(GithubContext);

    ///////////////////////////////////////////////////////////////////
    // Event Handlers
    const handleChange = ev => {
        setText(ev.target.value);
    }

    const handleSubmit = async ev => {
        ev.preventDefault();
        dispatch({ type: 'LOADING' });
        const users = await searchGithubUsers(text);
        dispatch({ type: 'SEARCH_USERS', payload: users });
    }

    return(
        <div className='github-search'>
            <form onSubmit={handleSubmit} >
                <div className='github-search__input-group'>
                    <input className='github-search__input' type='text' value={text} placeholder='Search here...' 
                        onChange={handleChange} />
                    <button className='github-search__btn'>GO</button>
                </div>
              
            </form>
        </div>
    )
}

export default GithubSearchbar;