import React from 'react';
import {connect} from 'react-redux';
import Registration from "./Registration";
import {setEmailText, setPasswordText, setUsernameText} from "../../../store/registration/actions";


const RegistrationContainer = (props) => {
    return (
        <Registration username={props.username} email={props.email} password={props.password} setUsernameText={props.setUsernameText} setEmailText={props.setEmailText} setPasswordText={props.setPasswordText}/>
    );
};

const mapStateToProps = (state) => {

    return{
        username:state.registration.username,
        email:state.registration.email,
        password:state.registration.password,
    }
};

const mapDispatchProps ={
    setUsernameText,
    setEmailText,
    setPasswordText
}

export default connect(mapStateToProps,mapDispatchProps)(RegistrationContainer);