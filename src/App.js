import './App.css';
import React from 'react';
import {Route} from 'react-router-dom';
import LoginPage from './components/LoginPage/LoginPage';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './store/reducers';

const store = createStore(rootReducer);

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
