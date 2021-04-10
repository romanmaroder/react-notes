export const AUTH_CHANGE_USERNAME_TEXT = 'AUTH_CHANGE_USERNAME_TEXT';
export const AUTH_CHANGE_PASSWORD_TEXT = 'AUTH_CHANGE_PASSWORD_TEXT';

export const setUsernameText = username => ({
    type: AUTH_CHANGE_USERNAME_TEXT,
    payload: username
});

export const setPasswordText = password => ({
    type: AUTH_CHANGE_PASSWORD_TEXT,
    payload: password
});