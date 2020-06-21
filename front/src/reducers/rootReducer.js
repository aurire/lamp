import {
    ADD_ARTICLE,
    FETCH_POSTS_STARTED,
    FETCH_POSTS_FAILURE,
    FETCH_POSTS_SUCCESS,
    FETCH_USERS_STARTED,
    FETCH_USERS_FAILURE,
    FETCH_USERS_SUCCESS
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
    }

    return state;
}

export default rootReducer;
