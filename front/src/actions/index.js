import {
    ADD_ARTICLE,
    FETCH_POSTS_STARTED,
    FETCH_POSTS_FAILURE,
    FETCH_POSTS_SUCCESS,
    FETCH_USERS_STARTED,
    FETCH_USERS_FAILURE,
    FETCH_USERS_SUCCESS,
    INITIATE_LOGIN_STARTED,
    INITIATE_LOGIN_SUCCESS,
    INITIATE_LOGIN_FAILURE,
    GET_USER_DATA_SUCCESS
} from "../constants/actionTypes";
import axios from "axios";

export function addArticle(payload) {
    return { type: ADD_ARTICLE, payload }
};

//getUserData
export const getUserData = (id) => {
    return dispatch => {
        //dispatch(getUserDataStarted());
        var userId = id.split('/').pop();
        axios
            .get("http://localhost/api/users/" + userId, {withCredentials: true})
            .then(res => {
                dispatch(getUserDataSuccess(res));
            })
            .catch(err => {
                console.log(err);
                //dispatch(getUserDataFailed(err.message));
            });
    };
};
export const getUserDataSuccess = payload => {
    return {
        type: GET_USER_DATA_SUCCESS,
        payload: {
            payload
        }
    };
};


//initiateLogin
export const initiateLogin = (email, password) => {
    return dispatch => {
        dispatch(initiateLoginStarted());

        axios
            .post("http://localhost/login", {
                "email": email,
                "password": password
            })
            .then(res => {
                if (res.headers.location) {
                    localStorage.setItem('user', res.headers.location);
                }
                console.log(res.headers.location);
                dispatch(getUserData(res.headers.location));

                dispatch(initiateLoginSuccess(res));
            })
            .catch(err => {
                console.log(err);
                dispatch(initiateLoginFailed(err.message));
            });
    };
};

const initiateLoginStarted = () => {
    return {
        type: INITIATE_LOGIN_STARTED,
        payload: {
            isLoading: true
        }
    };
};
const initiateLoginSuccess = payload => {
    return {
        type: INITIATE_LOGIN_SUCCESS,
        payload: {
            payload
        }
    };
};
const initiateLoginFailed = error => {
    return {
        type: INITIATE_LOGIN_FAILURE,
        payload: {
            error
        }
    };
};

export const fetchPosts = () => {
    return dispatch => {
        dispatch(fetchPostsStarted());

        axios
            .post("http://localhost/login", {
                "email": "frenkas@gmail.com",
                "password": "asd"
            })
            .then(res => {
                dispatch(fetchPostsSuccess(res));
            })
            .catch(err => {
                dispatch(fetchPostsFailed(err.message));
            });
    };
};

const fetchPostsStarted = () => {
    return {
        type: FETCH_POSTS_STARTED,
        payload: {
            isLoading: true
        }
    };
};

const fetchPostsSuccess = posts => {
    return {
        type: FETCH_POSTS_SUCCESS,
        payload: {
            posts
        }
    };
};

const fetchPostsFailed = error => {
    return {
        type: FETCH_POSTS_FAILURE,
        payload: {
            error
        }
    };
};

export const fetchUsers = () => {
        return dispatch => {
            dispatch(fetchUsersStarted());

            axios
                .get("http://localhost/api/users?page=1", {withCredentials: true})
                .then(res => {
                    dispatch(fetchUsersSuccess(res.data));
                })
                .catch(err => {
                    dispatch(fetchUsersFailed(err.message));
                });
        };
};
const fetchUsersStarted = () => {
    return {
        type: FETCH_USERS_STARTED,
        payload: {
            isLoading: true
        }
    };
};

const fetchUsersSuccess = posts => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: {
            posts
        }
    };
};

const fetchUsersFailed = error => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: {
            error
        }
    };
};
