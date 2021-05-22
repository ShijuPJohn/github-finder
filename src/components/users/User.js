import React, {Fragment, useContext, useEffect} from 'react';
import Spinner from "../layout/Spinner";
import {Link} from "react-router-dom";
import {GithubContext} from "../../context/github/githubContext";
import {getUserAction} from "../../context/actions/githubActions";
import axios from "axios";

const User = ({match}) => {
    const [githubProfiles, dispatchGithub] = useContext(GithubContext)

    useEffect(() => {
        async function fetchAPI() {
            const res = await axios.get(`https://api.github.com/users/${match.params.login}?client_id=`
                + `${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
            dispatchGithub(getUserAction(res.data))
        }

        fetchAPI()
        // eslint-disable-next-line
    }, [])

    console.log(githubProfiles.object)

    return (
        <Fragment>
            <Link to={'/'} className={"btn btn-light"}>Back to Search</Link>
            {githubProfiles.singleUser ? githubProfiles.singleUser.login : <Spinner/>}
        </Fragment>
    );

}

export default User;