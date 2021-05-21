import {AlertContext} from "./alertContext";
import {useReducer} from "react";
import alertReducer from "../../reducers/alertReducer";


const AlertProvider = (props) => {
    const initialState = {status: false, message: ''};
    const [alertState, dispatchAlert] = useReducer(alertReducer, initialState)
    return (
        <AlertContext.Provider value={[alertState, dispatchAlert]}>
            {props.children}
        </AlertContext.Provider>
    )
}
export default AlertProvider;