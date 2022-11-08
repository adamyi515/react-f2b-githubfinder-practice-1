const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const getGithubUsers = async () => {
    const response = await fetch(`${GITHUB_URL}/search/users?q="test"`, {
        headers: {
            Authorization: GITHUB_TOKEN
        }
    });
    const data = await response.json();
    return data.items;
}


// Make API call to search users.
export const searchGithubUsers = async (text) => {
    const response = await fetch(`${GITHUB_URL}/search/users?q=${text}`, {
        headers: {
            Authorization: GITHUB_TOKEN
        }
    });

    const data = await response.json();
    return data.items;
}