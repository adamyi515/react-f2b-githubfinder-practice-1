import React, { createContext, useReducer, useEffect } from "react";
import { githubReducer } from './github.reducer';
import { getGithubUsers } from './github.actions';

export const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
    const initialState = {
        users: [],
        user: null,
        isLoading: false
    }

    const [state, dispatch] = useReducer(githubReducer, initialState);

    // useEffect(() => {
    //     getUsersFromGithubAPI();
    // }, []);

    const getUsersFromGithubAPI = async () => {
        const users = await getGithubUsers();
        dispatch({ type: 'GET_USERS', payload: users });
    }


    return(
        <GithubContext.Provider value={{
            ...state,
            dispatch
        }}>
            { children }
        </GithubContext.Provider>
    )
}