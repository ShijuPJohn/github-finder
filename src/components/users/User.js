import React, {Fragment, useContext, useEffect} from 'react';
import Spinner from "../layout/Spinner";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faTimesCircle} from "@fortawesome/free-solid-svg-icons";
import {GithubContext} from "../../context/github/githubContext";
import {getUserAction} from "../../context/actions/githubActions";
import axios from "axios";

const User = ({match}) => {
    const [githubProfiles, dispatchGithub] = useContext(GithubContext)

    useEffect(() => {
        async function fetchAPI() {
            console.log('async fn')

            const res = await axios.get(`https://api.github.com/users/${match.params.login}?client_id=`
                + `${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
            console.log(res.data)
            dispatchGithub(getUserAction(res.data))
        }

        fetchAPI()
    }, [])
    console.log(githubProfiles.object)

    return (
        <Fragment>
            <Link to={'/'} className={"btn btn-light"}>Back to Search</Link>
            {githubProfiles.singleUser && githubProfiles.singleUser.login}
        </Fragment>
    );

}

export default User;