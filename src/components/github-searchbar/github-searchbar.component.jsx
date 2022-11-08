import React, { useState } from 'react';
import './github-searchbar.style.css';

const GithubSearchbar = () => {
    const [text, setText] = useState('');

    ///////////////////////////////////////////////////////////////////
    // Event Handlers
    const handleChange = ev => {
        setText(ev.target.value);
    }

    return(
        <div className='github-search'>
            <form >
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