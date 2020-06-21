import {
    ADD_ARTICLE,
    FETCH_POSTS_STARTED,
    FETCH_POSTS_FAILURE,
    FETCH_POSTS_SUCCESS,
    FETCH_USERS_STARTED,
    FETCH_USERS_FAILURE,
    FETCH_USERS_SUCCESS,
    INITIATE_LOGIN_STARTED,
    INITIATE_LOGIN_FAILURE,
    INITIATE_LOGIN_SUCCESS,
    GET_USER_DATA_SUCCESS
} from "../constants/actionTypes";

const initialState = {
    articles: [],
    posts: [],
    users: []
};

const rootReducer = (state = initialState, action) => {
    if (ADD_ARTICLE === action.type) {
        console.log('ADD_ARTICLE');
        Object.assign({}, state, {
            articles: state.articles.concat(action.payload)
        })
    } else if (FETCH_POSTS_STARTED === action.type) {
        console.log('FETCH_POSTS_STARTED');
        return {
            ...state,
            loading: true
        };
    } else if (FETCH_POSTS_SUCCESS === action.type) {
        console.log('FETCH_POSTS_SUCCESS');
        console.log(action.payload);
        return {
            ...state,
            loading: false,
            error: null,
            posts: action.payload.posts
        };
    } else if (FETCH_POSTS_FAILURE === action.type) {
        console.log('FETCH_POSTS_FAILURE');
        console.log(action.payload);
        return {
            ...state,
            loading: false,
            error: action.payload.error
        };
    } else if (FETCH_USERS_STARTED === action.type) {
        console.log('FETCH_USERS_STARTED');
        return {
            ...state,
            loading: true
        };
    } else if (FETCH_USERS_SUCCESS === action.type) {
        console.log('FETCH_USERS_SUCCESS');
        return {
            ...state,
            loading: false,
            error: null,
            users: action.payload.posts
        };
    } else if (FETCH_USERS_FAILURE === action.type) {
        console.log('FETCH_USERS_FAILURE');
        return {
            ...state,
            loading: false,
            error: action.payload.error
        };
    } else if (INITIATE_LOGIN_STARTED === action.type) {
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
            user: action.payload
        };
    } else if (INITIATE_LOGIN_FAILURE === action.type) {
        console.log('INITIATE_LOGIN_FAILURE');
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
    }

    return state;
}

export default rootReducer;
