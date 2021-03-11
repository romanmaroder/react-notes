import {combineReducers, createStore} from 'redux';
import loginReducer from "./login-reducer";

let reducers= combineReducers({
    loginPage:loginReducer
})

let store = createStore(reducers);



export default store;