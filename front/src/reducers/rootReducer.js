import {
    INITIATE_LOGIN_STARTED,
    INITIATE_LOGIN_FAILURE,
    INITIATE_LOGIN_SUCCESS,
    INITIATE_LOGOUT_STARTED,
    INITIATE_LOGOUT_FAILURE,
    INITIATE_LOGOUT_SUCCESS,
    GET_USER_DATA_SUCCESS
} from "../constants/actionTypes";

const initialState = {
    loading: false,
    error: null,
    userData: null
};

const rootReducer = (state = initialState, action) => {
    if (INITIATE_LOGIN_STARTED === action.type) {
        console.log('INITIATE_LOGIN_STARTED');
        return {
            ...state,
            loading: true
        };
    } else if (INITIATE_LOGIN_SUCCESS === action.type) {
        return {
            ...state,
            loading: false,
            error: null,
            user: action.payload.payload.headers.location
        };
    } else if (INITIATE_LOGIN_FAILURE === action.type) {
        return {
            ...state,
            loading: false,
            error: action.payload.error
        };
    } else if (GET_USER_DATA_SUCCESS === action.type) {
        console.log('GET_USER_DATA_SUCCESS');
        return {
            ...state,
            loading: false,
            userData: action.payload.payload.data
        };
    } else if (INITIATE_LOGOUT_STARTED === action.type) {
        console.log('INITIATE_LOGOUT_STARTED');
        return {
            ...state,
            loading: true
        };
    } else if (INITIATE_LOGOUT_SUCCESS === action.type) {
        console.log('INITIATE_LOGOUT_SUCCESS');
        return {
            ...state,
            loading: false,
            error: null,
            userData: null,
            user: null
        };
    } else if (INITIATE_LOGOUT_FAILURE === action.type) {
        console.log('INITIATE_LOGOUT_FAILURE');
        return {
            ...state,
            loading: false,
            error: action.payload.error
        };
    }

        return state;
}

export default rootReducer;
