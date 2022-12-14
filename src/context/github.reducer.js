export const githubReducer = (state, action) => {
    switch(action.type){
        case 'GET_USERS':
            return {
                ...state,
                users: action.payload
            };
        case 'SEARCH_USERS':
            return {
                ...state,
                users: action.payload,
                isLoading: false
            }
        case 'GET_USER':
            return {
                ...state,
                user: action.payload
            }
        case 'LOADING':
            return {
                ...state,
                isLoading: true
            }
        default:
            return state;
    }
}
