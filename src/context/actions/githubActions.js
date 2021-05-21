import {CLEAR_USERS, SEARCH_USERS, SET_LOADING} from "../types";

export const searchUsersAction = (users) => {
    return {
        type: SEARCH_USERS,
        payload: users
    }
}
export const setLoadingTrue = () => {
    return {
        type: SET_LOADING,
    }
}
export const clearUsersAction = () => {
    return {
        type: CLEAR_USERS
    }
}