import {
    REGISTRATION_CHANGE_USERNAME_TEXT,
    REGISTRATION_CHANGE_EMAIL_TEXT,
    REGISTRATION_CHANGE_PASSWORD_TEXT,
    REGISTRATION_RESPONSE,
} from "./actions";

const defaultState = {
    username: '',
    email: '',
    password: '',
    response:['Or Sign up social platforms'],
};

export const registrationReducer = (state = defaultState, action) => {
    // console.log(state)
 

    switch (action.type) {
        case REGISTRATION_CHANGE_USERNAME_TEXT:
            return {
                ...state,
                username: action.payload
            };

        case REGISTRATION_CHANGE_EMAIL_TEXT:
            return {
                ...state,
                email: action.payload
            };

        case REGISTRATION_CHANGE_PASSWORD_TEXT:
            return {
                ...state,
                password: action.payload
            };
        case REGISTRATION_RESPONSE:
            return {
                ...state,
                response: action.payload
            };

        default:
            return state;
    }
}