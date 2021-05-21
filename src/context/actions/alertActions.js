import {REMOVE_ALERT, SET_ALERT} from "../types";

export const setAlert = (msg) => {
    return {
        type: SET_ALERT,
        payload: msg
    }
}
export const removeAlert = () => {
    return {
        type: REMOVE_ALERT,
        payload: ''
    }
}