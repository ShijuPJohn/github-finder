import {GithubContext} from "./githubContext";
import githubReducer from "../../reducers/githubReducer";
import {useReducer} from "react";
import axios from "axios";


const initialState = {loading: false, users: []};
const GithubProvider = (props) => {

    // const searchUsers = async (str) => {
    //     const res = await axios.get(`https://api.github.com/search/users?q=${str}&client_id=`
    //         + `${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    //     setUsers(res.data.items)
    // }
    //
    // //Get single user
    // const getUser = async (username) => {
    //     const res = await axios.get(`https://api.github.com/users/${username}?client_id=`
    //         + `${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    //     setUser(res.data)
    // }
    //
    // const clearUsers = () => {
    //     setUsers([]);
    // }
    // const setAlert1 = (msg, type) => {
    //     setAlert({msg, type})
    //     setTimeout(() => {
    //         setAlert(null)
    //     }, 2000)
    // }

    const [githubProfiles, dispatchGithub] = useReducer(githubReducer, initialState)
    return (
        <GithubContext.Provider value={[githubProfiles, dispatchGithub]}>
            {props.children}
        </GithubContext.Provider>
    )
}
export default GithubProvider;