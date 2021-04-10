import React from 'react';
import {connect} from 'react-redux';
import Registration from "./Registration";
import * as axios from "axios";
import {setEmailText, setPasswordText, setUsernameText} from "../../../store/registration/actions";

class RegistrationContainer extends React.Component {
    componentDidMount() {

    }
    onSignUp = (e) => {

        const headers = {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        }
        const data = {
            username: this.props.username,
            email: this.props.email,
            password: this.props.password,
        }

        axios.post(`http://host1827487.hostland.pro/api/v1/signup`, data, {
            headers: headers,
            // withCredentials: true,
        })
            .then(response => {
                if (response) {
                    console.log(response)
                    console.log('Получилось')
                }
            })
            .catch((err) => {
                console.log("AXIOS ERROR: ", err);
            })
    }

    render() {
        return (
            <Registration username={this.props.username}
                          email={this.props.email}
                          password={this.props.password}
                          onSignUp={this.onSignUp}
                          setUsernameText={this.props.setUsernameText}
                          setEmailText={this.props.setEmailText}
                          setPasswordText={this.props.setPasswordText}/>

        );
    }
}

const mapStateToProps = (state) => {

    return {
        username: state.registration.username,
        email: state.registration.email,
        password: state.registration.password,
    }
};

const mapDispatchProps = {
    setUsernameText,
    setEmailText,
    setPasswordText
}

export default connect(mapStateToProps, mapDispatchProps)(RegistrationContainer);