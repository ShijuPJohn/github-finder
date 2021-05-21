import React, {Component, useContext} from 'react';
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";
import PropTypes from "prop-types";
import {GithubContext} from "../../context/github/githubContext";

const Users = () => {

    const [githubProfiles, dispatchGithub] = useContext(GithubContext)
    console.log(githubProfiles)
    return (
        <div style={userStyle}>
            {githubProfiles.loading ? <Spinner/> : githubProfiles.users.map((user) => (
                <UserItem key={user.id} user={user}/>
            ))}
        </div>
    );
}
export default Users;
const userStyle = {
    display: 'grid'
    ,
    gridTemplateColumns: 'repeat(3,1fr)'
    ,
    gridGap: '1rem'
}
Users.propTypes = {}

