import {
    INITIATE_LOGIN_STARTED,
    INITIATE_LOGIN_FAILURE,
    INITIATE_LOGIN_SUCCESS,
    INITIATE_LOGOUT_STARTED,
    INITIATE_LOGOUT_FAILURE,
    INITIATE_LOGOUT_SUCCESS,
    GET_USER_DATA_SUCCESS,
    INITIATE_REGISTER_STARTED,
    INITIATE_REGISTER_SUCCESS,
    INITIATE_REGISTER_FAILURE,
    LOCATION_CHANGED, SET_ALERT,
    INITIATE_NOTE_CREATE_STARTED,
    INITIATE_NOTE_CREATE_FAILURE,
    INITIATE_NOTE_CREATE_SUCCESS,
    FETCH_NOTE_LIST_STARTED,
    FETCH_NOTE_LIST_FAILURE,
    FETCH_NOTE_LIST_SUCCESS,
    FETCH_NOTE_SUCCESS,
    FETCH_NOTE_STARTED,
    FETCH_NOTE_FAILURE,
    INITIATE_NOTE_EDIT_SUCCESS,
    INITIATE_NOTE_EDIT_STARTED,
    INITIATE_NOTE_EDIT_FAILURE
} from "../constants/actionTypes";

const initialState = {
    loading: false,
    loaded: false,
    dataFetchFinished: false,
    mainActionFinished: false,
    error: null,
    userData: null,
    user: null,
    alert: null,
    alertShown: true,
    notes: {},
    note: {}
};

const rootReducer = (state = initialState, action) => {
    if (INITIATE_LOGIN_STARTED === action.type) {
        console.log('INITIATE_LOGIN_STARTED');
        return {
            ...state,
            loading: true,
            loaded: false,
        };
    } else if (INITIATE_LOGIN_SUCCESS === action.type) {
        return {
            ...state,
            loading: false,
            loaded: true,
            error: null,
            user: action.payload.payload.headers.location
        };
    } else if (INITIATE_LOGIN_FAILURE === action.type) {
        return {
            ...state,
            loading: false,
            loaded: false,
            error: action.payload.error
        };
    } else if (GET_USER_DATA_SUCCESS === action.type) {
        console.log('GET_USER_DATA_SUCCESS');
        return {
            ...state,
            loading: false,
            loaded: true,
            userData: action.payload.payload.data,
            user: action.payload.payload.data['@id']
        };
    } else if (INITIATE_LOGOUT_STARTED === action.type) {
        console.log('INITIATE_LOGOUT_STARTED');
        return {
            ...state,
            loading: true,
            loaded: false,
        };
    } else if (INITIATE_LOGOUT_SUCCESS === action.type) {
        console.log('INITIATE_LOGOUT_SUCCESS');
        return {
            ...state,
            loading: false,
            loaded: true,
            error: null,
            userData: null,
            user: null
        };
    } else if (INITIATE_LOGOUT_FAILURE === action.type) {
        console.log('INITIATE_LOGOUT_FAILURE');
        return {
            ...state,
            loading: false,
            loaded: false,
            error: action.payload.error
        };
    } else if (INITIATE_REGISTER_STARTED === action.type) {
        console.log('INITIATE_REGISTER_STARTED');
        return {
            ...state,
            loading: true,
            loaded: false
        };
    } else if (INITIATE_REGISTER_SUCCESS === action.type) {
        return {
            ...state,
            loading: false,
            loaded: true,
            error: null
        };
    } else if (INITIATE_REGISTER_FAILURE === action.type) {
        return {
            ...state,
            loading: false,
            loaded: false,
            error: action.payload.error
        };
    } else if (LOCATION_CHANGED === action.type) {
        return state.alertShown
            ? {
                ...state,
                alert: null,
                loaded: false,
                dataFetchFinished: false,
                mainActionFinished: false,
            } : {
                ...state,
                alertShown: true,
                loaded: false
            };
    } else if (SET_ALERT === action.type) {
        return {
            ...state,
            alert: action.payload.msg,
            alertShown: false
        };
    } else if (INITIATE_NOTE_CREATE_STARTED === action.type) {
        console.log('INITIATE_NOTE_CREATE_STARTED');
        return {
            ...state,
            loading: true,
            loaded: false
        };
    } else if (INITIATE_NOTE_CREATE_SUCCESS === action.type) {
        return {
            ...state,
            loading: false,
            loaded: true,
            mainActionFinished: true,
            error: null,
            notes: {}
        };
    } else if (INITIATE_NOTE_CREATE_FAILURE === action.type) {
        return {
            ...state,
            loading: false,
            loaded: false,
            error: action.payload.error
        };
    } else if (FETCH_NOTE_LIST_STARTED === action.type) {
        console.log('FETCH_NOTE_LIST_STARTED');
        return {
            ...state,
            loading: true,
            loaded: false
        };
    } else if (FETCH_NOTE_LIST_SUCCESS === action.type) {
        return {
            ...state,
            loading: false,
            loaded: true,
            error: null,
            notes: {
                ...state.notes,
                [action.payload.page]: action.payload.items.data
            }
        };
    } else if (FETCH_NOTE_LIST_FAILURE === action.type) {
        return {
            ...state,
            loading: false,
            loaded: false,
            error: action.payload.error
        };
    } else if (FETCH_NOTE_STARTED === action.type) {
        console.log('FETCH_NOTE_STARTED');
        return {
            ...state,
            loading: true,
            loaded: false,
        };
    } else if (FETCH_NOTE_SUCCESS === action.type) {
        return {
            ...state,
            loading: false,
            loaded: true,
            dataFetchFinished: true,
            error: null,
            note: {
                ...state.note,
                [action.payload.id]: action.payload.item.data
            }
        };
    } else if (FETCH_NOTE_FAILURE === action.type) {
        return {
            ...state,
            loading: false,
            loaded: false,
            dataFetchFinished: true,
            error: action.payload.error
        };
    } else if (INITIATE_NOTE_EDIT_STARTED === action.type) {
        console.log('INITIATE_NOTE_EDIT_STARTED');
        return {
            ...state,
            loading: true,
            loaded: false
        };
    } else if (INITIATE_NOTE_EDIT_SUCCESS === action.type) {
        return {
            ...state,
            loading: false,
            loaded: true,
            mainActionFinished: true,
            notes: {},
            error: null
        };
    } else if (INITIATE_NOTE_EDIT_FAILURE === action.type) {
        return {
            ...state,
            loading: false,
            loaded: false,
            error: action.payload.error
        };
    }

    return state;
}

export default rootReducer;
