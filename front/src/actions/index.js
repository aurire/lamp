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
    LOCATION_CHANGED,
    SET_ALERT,
    INITIATE_NOTE_CREATE_STARTED,
    INITIATE_NOTE_CREATE_FAILURE,
    INITIATE_NOTE_CREATE_SUCCESS,
    FETCH_NOTE_LIST_STARTED,
    FETCH_NOTE_LIST_FAILURE,
    FETCH_NOTE_LIST_SUCCESS,
    FETCH_NOTE_FAILURE,
    FETCH_NOTE_STARTED,
    FETCH_NOTE_SUCCESS,
    INITIATE_NOTE_EDIT_FAILURE,
    INITIATE_NOTE_EDIT_STARTED,
    INITIATE_NOTE_EDIT_SUCCESS
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

//initiateNoteCreate
export const initiateNoteCreate = (ownerId, title, message) => {
    return dispatch => {
        dispatch(initiateNoteCreateStarted());

        axios
            .post("http://localhost/api/notes", {
                "title": title,
                "message": message,
                "isPublic": true,
                "owner": "/api/users/" + ownerId
            }, {withCredentials: true})
            .then(res => {
                console.log(res);

                dispatch(initiateNoteCreateSuccess(res));
            })
            .catch(err => {
                dispatch(initiateNoteCreateFailed(err));
            });
    };
};
const initiateNoteCreateStarted = () => {
    return {
        type: INITIATE_NOTE_CREATE_STARTED,
        payload: {
            isLoading: true
        }
    };
};
const initiateNoteCreateSuccess = payload => {
    return {
        type: INITIATE_NOTE_CREATE_SUCCESS,
        payload: {
            payload
        }
    };
};
const initiateNoteCreateFailed = error => {
    return {
        type: INITIATE_NOTE_CREATE_FAILURE,
        payload: {
            error
        }
    };
};

//fetchNotesList
export const fetchNotesList = (owner, page) => {
    return dispatch => {
        dispatch(fetchNoteListStarted());
        const owner = 2;

        axios
            .get("http://localhost/api/notes?owner=%2Fapi%2Fusers%2F" + owner
                + "&page=" + page, {withCredentials: true})
            .then(res => {
                console.log(res);

                dispatch(fetchNoteListSuccess(res, page));
            })
            .catch(err => {
                dispatch(fetchNoteListFailed(err));
            });
    };
};
const fetchNoteListStarted = () => {
    return {
        type: FETCH_NOTE_LIST_STARTED,
        payload: {
            isLoading: true
        }
    };
};
const fetchNoteListSuccess = (payload, page) => {
    return {
        type: FETCH_NOTE_LIST_SUCCESS,
        payload: {
            items: payload,
            page: page
        }
    };
};
const fetchNoteListFailed = error => {
    return {
        type: FETCH_NOTE_LIST_FAILURE,
        payload: {
            error
        }
    };
};

//fetchNote
export const fetchNote = (id) => {
    return dispatch => {
        dispatch(fetchNoteStarted());

        axios
            .get("http://localhost/api/notes/" + id, {withCredentials: true})
            .then(res => {
                console.log(res);

                dispatch(fetchNoteSuccess(res, id));
            })
            .catch(err => {
                dispatch(fetchNoteFailed(err));
            });
    };
};
const fetchNoteStarted = () => {
    return {
        type: FETCH_NOTE_STARTED,
        payload: {
            isLoading: true
        }
    };
};
const fetchNoteSuccess = (payload, id) => {
    return {
        type: FETCH_NOTE_SUCCESS,
        payload: {
            item: payload,
            id: id
        }
    };
};
const fetchNoteFailed = error => {
    return {
        type: FETCH_NOTE_FAILURE,
        payload: {
            error
        }
    };
};

//initiateNoteEdit
export const initiateNoteEdit = (ownerId, id, title, message) => {
    return dispatch => {
        dispatch(initiateNoteEditStarted());

        axios
            .put("http://localhost/api/notes/" + id, {
                "title": title,
                "message": message,
                "isPublic": true,
                "owner": "/api/users/" + ownerId
            }, {withCredentials: true})
            .then(res => {
                console.log(res);

                dispatch(initiateNoteEditSuccess(res));
            })
            .catch(err => {
                dispatch(initiateNoteEditFailed(err));
            });
    };
};
const initiateNoteEditStarted = () => {
    return {
        type: INITIATE_NOTE_EDIT_STARTED,
        payload: {
            isLoading: true
        }
    };
};
const initiateNoteEditSuccess = payload => {
    return {
        type: INITIATE_NOTE_EDIT_SUCCESS,
        payload: {
            payload
        }
    };
};
const initiateNoteEditFailed = error => {
    return {
        type: INITIATE_NOTE_EDIT_FAILURE,
        payload: {
            error
        }
    };
};
