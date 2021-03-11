const ADD_USER = 'ADD-USER';
const UPDATE_USER = 'UPDATE-USER';


let initialState = {
    users: [
        {
            id: 1,
            username: 'Admin',
            email: 'admin@admin.ru',
            password: '111111',
        }
    ],
    newUsers: [{
        id: 'new id',
        username: 'new username',
        password: 'new password',
        email: 'new email',
    }]
}

const loginReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_USER:
            let newUser = {
                id: state.newUsers.id,
                username: state.newUsers.username,
                email: state.newUsers.email,
                password: state.newUsers.password,
            };
            state.users.push(newUser);
            return state;
        case UPDATE_USER:
            state.newUsers = action.newUser;
            return state;
        default:
            return state
    }
}

export const addUserCreator = () => ({type: ADD_USER});


export const updateUserCreator = (user) => ({type: UPDATE_USER, newUser: user});



export default loginReducer;