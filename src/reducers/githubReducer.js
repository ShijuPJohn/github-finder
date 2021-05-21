import {CLEAR_USERS, SEARCH_USERS, SET_LOADING} from "../context/types";

const githubReducer = (state = {}, action) => {
    console.log('reducer called')
    switch (action.type) {
        case SEARCH_USERS:
            return {...state, users: action.payload, loading: false};
        case SET_LOADING:
            return {...state, loading: true};
        case CLEAR_USERS:
            return {loading: false, users: []}
        default:
            return state
    }
}
export default githubReducer;