import React from 'react';
import './home-page.style.css';

// Components
import GithubSearchbar from '../../components/github-searchbar/github-searchbar.component';
import GithubList from '../../components/github-list/github-list.component';

const HomePage = () => {
    return(
        <div className='home-page'>
            <GithubSearchbar />
            <GithubList />
        </div>
    )
}

export default HomePage;