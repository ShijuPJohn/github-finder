import {CLEAR_USERS, GET_USER, SEARCH_USERS, SET_LOADING} from "../context/types";

const githubReducer =  (state = {}, action) => {
    switch (action.type) {
        case SEARCH_USERS:
            return {...state, users: action.payload, loading: false};
        case SET_LOADING:
            return {...state, loading: true};
        case CLEAR_USERS:
            return {loading: false, users: []}
        case GET_USER:
            return {...state, singleUser: action.payload}
        default:
            return state
    }
}
export default githubReducer;