import {
    INITIATE_LOGIN_STARTED,
    INITIATE_LOGIN_SUCCESS,
    INITIATE_LOGIN_FAILURE,
    INITIATE_LOGOUT_STARTED,
    INITIATE_LOGOUT_FAILURE,
    INITIATE_LOGOUT_SUCCESS,
    GET_USER_DATA_SUCCESS
} from "../constants/actionTypes";
import axios from "axios";

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
                dispatch(initiateLoginFailed(err));
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

//initiateLogout
export const initiateLogout = () => {
    return dispatch => {
        dispatch(initiateLogoutStarted());
        axios
            .post("http://localhost/logout")
            .then(res => {
                localStorage.removeItem('user');
                dispatch(initiateLogoutSuccess(res));
            })
            .catch(err => {
                console.log(err);
                dispatch(initiateLogoutFailed(err.message));
            });
    };
};
const initiateLogoutStarted = () => {
    return {
        type: INITIATE_LOGOUT_STARTED,
        payload: {
            isLoading: true
        }
    };
};
const initiateLogoutSuccess = payload => {
    return {
        type: INITIATE_LOGOUT_SUCCESS,
        payload: {
            payload
        }
    };
};
const initiateLogoutFailed = error => {
    return {
        type: INITIATE_LOGOUT_FAILURE,
        payload: {
            error
        }
    };
};
