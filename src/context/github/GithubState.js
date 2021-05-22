import {GithubContext} from "./githubContext";
import githubReducer from "../../reducers/githubReducer";
import {useReducer} from "react";


const initialState = {loading: false, users: []};
const GithubProvider = (props) => {

    const [githubProfiles, dispatchGithub] = useReducer(githubReducer, initialState)
    return (
        <GithubContext.Provider value={[githubProfiles, dispatchGithub]}>
            {props.children}
        </GithubContext.Provider>
    )
}
export default GithubProvider;