import {REMOVE_ALERT, SET_ALERT} from "../context/types";

const alertReducer = (state = {status: false, message: ''}, action) => {
    switch (action.type) {
        case SET_ALERT:
            return {...state, status: true, message: action.payload};
        case REMOVE_ALERT:
            return {...state, status: false, message: ''};
        default:
            return state
    }
}
export default alertReducer;