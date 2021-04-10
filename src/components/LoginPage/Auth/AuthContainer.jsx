import React from 'react';
import {connect} from 'react-redux';
import Auth from "./Auth";
import {setUsernameText, setPasswordText} from "../../../store/auth/actions";


class AuthContainer extends React.Component {
    render() {
        return  (
            <Auth username={this.props.username} password={this.props.password} setUsernameText={this.props.setUsernameText}
              setPasswordText={this.props.setPasswordText}/>
              )

    }
}

const mapStateToProps = (state) => {
    return {
        username: state.auth.username,
        password: state.auth.password
    }
};

const mapDispatchToProps = {
        setUsernameText,
        setPasswordText

}
/* Вариант с bindActionCreators
  Не забыть импортировать ( import {bindActionCreators} from 'redux'; )
const mapDispatchToProps = (dispatch) => {
    return {
        setUsernameText: bindActionCreators(setUsernameText, dispatch),
        setPasswordText: bindActionCreators(setPasswordText, dispatch)
    }

};*/

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);