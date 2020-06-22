import {
    INITIATE_LOGIN_STARTED,
    INITIATE_LOGIN_SUCCESS,
    INITIATE_LOGIN_FAILURE,
    INITIATE_LOGOUT_STARTED,
    INITIATE_LOGOUT_FAILURE,
    INITIATE_LOGOUT_SUCCESS,
    GET_USER_DATA_SUCCESS,
    INITIATE_REGISTER_STARTED,
    INITIATE_REGISTER_SUCCESS,
    INITIATE_REGISTER_FAILURE,
    LOCATION_CHANGED, SET_ALERT
} from "../constants/actionTypes";
import axios from "axios";

//getUserData
export const getUserData = (id) => {
    return dispatch => {
        //dispatch(getUserDataStarted());
        if (id !== null) {
            let userId = id.split('/');
            axios
                .get("http://localhost/api/users/" + userId.pop(), {withCredentials: true})
                .then(res => {
                    dispatch(getUserDataSuccess(res));
                })
                .catch(err => {
                    console.log(err);
                    //dispatch(getUserDataFailed(err.message));
                });
        }
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

//initiateRegister
export const initiateRegister = (email, password) => {
    return dispatch => {
        dispatch(initiateRegisterStarted());

        axios
            .post("http://localhost/api/users", {
                "email": email,
                "password": password
            }, {withCredentials: true})
            .then(res => {
                console.log(res.headers.location);

                dispatch(initiateRegisterSuccess(res));
            })
            .catch(err => {
                dispatch(initiateRegisterFailed(err));
            });
    };
};
const initiateRegisterStarted = () => {
    return {
        type: INITIATE_REGISTER_STARTED,
        payload: {
            isLoading: true
        }
    };
};
const initiateRegisterSuccess = payload => {
    return {
        type: INITIATE_REGISTER_SUCCESS,
        payload: {
            payload
        }
    };
};
const initiateRegisterFailed = error => {
    return {
        type: INITIATE_REGISTER_FAILURE,
        payload: {
            error
        }
    };
};
export const locationChanged = () => {
    return {
        type: LOCATION_CHANGED,
        payload: {}
    };
};
export const setAlert = (msg) => {
    return {
        type: SET_ALERT,
        payload: {msg: msg}
    };
};
