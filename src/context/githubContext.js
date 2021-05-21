import {createContext, useReducer} from "react";

const githubReducer = (state, action) => {
    console.log('reducer called')
    switch (action.type) {
        case 'ADD':
            return [...state, action.payload];
        case 'REMOVE':
            return [];
        default:
            return state
    }
}

const initialState = [];
export const GithubContext = createContext({})

const GithubProvider = (props) => {
    const [githubProfiles, dispatchGithub] = useReducer(githubReducer, initialState)
    return (
        <GithubContext.Provider value={[githubProfiles, dispatchGithub]}>
            {props.children}
        </GithubContext.Provider>
    )
}
export default GithubProvider;