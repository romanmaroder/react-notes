import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import store from './redux/store';
import reportWebVitals from './reportWebVitals';


let rerenderTree =(state)=> {
    ReactDOM.render(
        <React.StrictMode>
            <Router>
                <App store={store} state={state} dispatch={store.dispatch.bind(store)}/>
            </Router>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderTree(store.getState());

store.subscribe(()=>{
    let state = store.getState();
    rerenderTree(state);
});
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
