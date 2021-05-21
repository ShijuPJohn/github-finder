import React, {useContext} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInfo} from "@fortawesome/free-solid-svg-icons";
import {GithubContext} from "../../context/github/githubContext";
import {AlertContext} from "../../context/alert/alertContext";

const Alert = () => {
        const [alert, dispatchAlert] = useContext(AlertContext)
        console.log(alert)
        return (alert.status !== false && (
            <div>
                <FontAwesomeIcon icon={faInfo}/>
                {alert.message}
            </div>
        ))
    }
;

export default Alert;