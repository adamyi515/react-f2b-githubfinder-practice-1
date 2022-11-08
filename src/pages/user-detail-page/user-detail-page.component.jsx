import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Actions
import { searchGithubUser } from '../../context/github.actions'
import { GithubContext } from '../../context/github.context';

const UserDetailPage = () => {
    const { dispatch, isLoading } = useContext(GithubContext);
    const { login } = useParams();

    useEffect(() => {
        getUserFromGithubAPI();
    }, [login, dispatch]);

    const getUserFromGithubAPI = async () => {
        dispatch({ type: 'LOADING' });
        const user = await searchGithubUser(login);
        dispatch({ type: 'GET_USER', payload: user });

    }

    if(isLoading){
        <h1>Loading...</h1>
    }

    return(
        <div>
            <h1>User details page</h1>
        </div>
    )
}

export default UserDetailPage;