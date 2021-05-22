import React, {useContext, useState} from 'react';
import {GithubContext} from "../../context/github/githubContext";
import axios from "axios";
import {clearUsersAction, searchUsersAction, setLoadingTrue} from "../../context/actions/githubActions";
import {AlertContext} from "../../context/alert/alertContext";
import {removeAlert, setAlert} from "../../context/actions/alertActions";

const Search = (props) => {
    const [githubProfiles, dispatchGithub] = useContext(GithubContext)
    const [alert, dispatchAlert] = useContext(AlertContext)

    const searchUsers = async (str) => {
        dispatchGithub(setLoadingTrue())
        const res = await axios.get(`https://api.github.com/search/users?q=${str}&client_id=`
            + `${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        dispatchGithub(searchUsersAction(res.data.items))
    }
    console.log(githubProfiles)

    const [text, setText] = useState('')

    const onChange = (e) => {
        setText(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (text === '') {
            dispatchAlert(setAlert('Field blank. Enter something'))
            setTimeout(() => {
                dispatchAlert(removeAlert())
            }, 2000)
        } else {
            searchUsers(text)
            setText('')
        }
    }
    const clearUsers = () => {
        dispatchGithub(clearUsersAction())
    }

    return (
        <div>
            <form className={"form"} onSubmit={onSubmit}>
                <input type={"text"} name={"text"} placeholder={"Search Users..."} value={text}
                       onChange={onChange}/>
                <input type={"submit"} value={"Search"} className={"btn btn-dark btn-block"}/>
                {githubProfiles.users.length !== 0 &&
                <button className={"btn btn-block btn-dark"} onClick={clearUsers}>Clear</button>}
            </form>
        </div>
    );

}

export default Search;