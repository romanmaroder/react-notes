import React from 'react';
import {connect} from 'react-redux';

import Registration from "./Registration";
import {
    setEmailText,
    setPasswordText,
    setUsernameText,
    setRegistrationResponse
} from "../../../store/registration/actions";
import {registerAPI} from "../../../api/api";

class RegistrationContainer extends React.Component {
     req = (data) => {
        alert('ЗАПРОС с КОНТЕЙНЕРА');
         /*const data = {
             username: this.username,
             email: this.email,
             password: this.password,
         }*/
         /*registerAPI.signupUser(data)
             .then(data => {
                 if (data.code === 200) {
                     let mess = data.message;
                     setRegistrationResponse(mess);
                     this.props.username ='';
                     this.props.email ='';
                     this.props.password ='';
                 } else if (data.code === 422) {
                     let mess = [];
                     mess.push(<p key={1}>{data.message.username}</p>);
                     mess.push(<p key={2}>{data.message.email}</p>);
                     mess.push(<p key={3}>{data.message.password}</p>);
                     setRegistrationResponse(mess)
                 }
             })
             .catch((err) => {
                 console.log(err);
             });*/
    }
    componentDidMount() {

    }


    render() {
        return (
            <Registration username={this.props.username}
                          email={this.props.email}
                          password={this.props.password}
                          sending={this.props.sending}
                          response={this.props.response}
                          setUsernameText={this.props.setUsernameText}
                          setEmailText={this.props.setEmailText}
                          setPasswordText={this.props.setPasswordText}
                          setRegistrationResponse={this.props.setRegistrationResponse}
                          req={this.req}

            />
        );
    }
}

const mapStateToProps = (state) => {

    return {
        username: state.registration.username,
        email: state.registration.email,
        password: state.registration.password,
        response: state.registration.response,
    }
};

const mapDispatchProps = {
    setUsernameText,
    setEmailText,
    setPasswordText,
    setRegistrationResponse,
}

export default connect(mapStateToProps, mapDispatchProps)(RegistrationContainer);