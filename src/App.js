import './App.css';
import React from 'react';
import {Route} from 'react-router-dom';
import LoginPage from './components/LoginPage/LoginPage';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {rootReducers} from './store/reducers';
import thunk from 'redux-thunk';

const store = createStore(rootReducers,applyMiddleware(thunk));

const App = () => {
    return (
        <Provider store={store}>
            <div className="App">
                <Route path='/' render={() => <LoginPage/>}/>
            </div>
        </Provider>
    );
}

export default App;
