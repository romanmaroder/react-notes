import {AUTH_CHANGE_USERNAME_TEXT, AUTH_CHANGE_PASSWORD_TEXT} from "./actions";

const defaultState = {
    username: '',
    password: ''
};

export const authReducer = (state = defaultState, action) => {
    console.log(state)
    switch (action.type) {
        case AUTH_CHANGE_USERNAME_TEXT:
            return {
                ...state,
                username: action.payload
            };

        case AUTH_CHANGE_PASSWORD_TEXT:
            return {
                ...state,
                password: action.payload
            };
        default:
            return state;
    }
}