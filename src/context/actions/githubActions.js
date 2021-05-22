import {CLEAR_USERS, GET_USER, SEARCH_USERS, SET_LOADING} from "../types";

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

export const getUserAction = (user) => {
    return {
        type: GET_USER,
        payload: user
    }
}