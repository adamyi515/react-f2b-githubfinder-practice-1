import React from 'react';
import './home-page.style.css';

// Components
import GithubSearchbar from '../../components/github-searchbar/github-searchbar.component';

const HomePage = () => {
    return(
        <div className='home-page'>
            <GithubSearchbar />
        </div>
    )
}

export default HomePage;