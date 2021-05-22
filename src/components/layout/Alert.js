import React, {useContext} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInfo} from "@fortawesome/free-solid-svg-icons";
import {AlertContext} from "../../context/alert/alertContext";

const Alert = () => {
        const [alert] = useContext(AlertContext)
        return (alert.status !== false && (
            <div>
                <FontAwesomeIcon icon={faInfo}/>
                {alert.message}
            </div>
        ))
    }
;

export default Alert;