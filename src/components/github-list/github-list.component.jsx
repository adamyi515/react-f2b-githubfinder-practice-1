import React, { useContext } from 'react';
import './github-list.style.css';

// Components
import GithubItem from './github-item/github-item.component';

// Context
import { GithubContext } from '../../context/github.context'

const GithubList = () => {
    const { users, isLoading } = useContext(GithubContext);


    if(isLoading){
        return(
            <h1 className='loading'>Loading...</h1>
        )
    }

    return(
        <div className='github-list'>
            { users.map((user) => <GithubItem key={user.id} user={user} />)}
        </div>
    )
}

export default GithubList;