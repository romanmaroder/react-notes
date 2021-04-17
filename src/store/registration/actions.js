export const REGISTRATION_CHANGE_USERNAME_TEXT = 'REGISTRATION_CHANGE_USERNAME_TEXT';
export const REGISTRATION_CHANGE_EMAIL_TEXT = 'REGISTRATION_CHANGE_EMAIL_TEXT';
export const REGISTRATION_CHANGE_PASSWORD_TEXT = 'REGISTRATION_CHANGE_PASSWORD_TEXT';
export const REGISTRATION_RESPONSE = 'REGISTRATION_RESPONSE';

export const setUsernameText = username => ({
    type: REGISTRATION_CHANGE_USERNAME_TEXT,
    payload: username
});

export const setEmailText = email => ({
    type: REGISTRATION_CHANGE_EMAIL_TEXT,
    payload: email
});

export const setPasswordText = password => ({
    type: REGISTRATION_CHANGE_PASSWORD_TEXT,
    payload: password
});

export const setRegistrationResponse = response => ({
    type: REGISTRATION_RESPONSE,
    payload: response
});


