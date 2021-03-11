import './App.css';
import React from "react";
import {Route} from 'react-router-dom';
import LoginPage from "./components/LoginPage/LoginPage";

const App = (props) => {
    return (
        <div className="App">
            <Route path='/' render={() =>  <LoginPage store={props.store}/> }/>
        </div>
    );
}

export default App;
