import React, {Fragment, useEffect} from 'react';
import Spinner from "../layout/Spinner";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faTimesCircle} from "@fortawesome/free-solid-svg-icons";

const User = ({loading, getUser, user, match}) => {


    useEffect(() => {
        getUser(match.params.login)
        //eslint-disable-next-line
    }, [])


    const {
        // name,
        // avatar_url,
        // location,
        // bio,
        // blog,
        // login,
        // html_url,
        // followers,
        // following,
        // public_repos,
        // public_gists,
        hireable,
    } = user
    if (loading) {
        return <Spinner/>
    }
    return (
        <Fragment>
            <Link to={'/'} className={"btn btn-light"}>Back to Search</Link>
            Hireable:{' '}
            {hireable ? <FontAwesomeIcon icon={faCheck}/> : <FontAwesomeIcon icon={faTimesCircle}/>}
        </Fragment>
    );

}
User.propTypes = {
    user: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    getUser: PropTypes.func.isRequired,
}
export default User;