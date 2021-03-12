import React from 'react';
import style from '../LoginPage.module.css';

const Registration = (props) => {

    let onUsernameChange = (event) => {
        props.setUsernameText(event.target.value)
    }
    let onEmailChange = (event) => {
        props.setEmailText(event.target.value)
    }
    let onPasswordChange = (event) => {
        props.setPasswordText(event.target.value)
    }

    return (

        <form action="" className={style.sign_up_form}>
            <h2 className={style.title}>Sign up</h2>
            <div className={style.input_field}>
                <i className="fas fa-user"/>
                <input type="text"
                       placeholder="Username"
                       value={props.username}
                       onChange={onUsernameChange}/>
            </div>
            <div className={style.input_field}>
                <i className="fas fa-envelope"/>
                <input type="email"
                       placeholder="E-mail"
                       value={props.email}
                       onChange={onEmailChange}/>
            </div>
            <div className={style.input_field}>
                <i className="fas fa-lock"/>
                <input type="password"
                       placeholder="Password"
                       value={props.password}
                       onChange={onPasswordChange}/>
            </div>
            <input
                type="submit"
                value="Sign up"
                className={`${style.btn} ${style.solid}`}
            />
            <p className={style.social_text}> Or Sign up social platforms</p>
            <div className={style.social_media}>
                <a href="#1" className={style.social_icon}>
                    <i className="fab fa-facebook-f"/>
                </a>
                <a href="#" className={style.social_icon}>
                    <i className="fab fa-twitter"/>
                </a>
                <a href="#" className={style.social_icon}>
                    <i className="fab fa-google"/>
                </a>
                <a href="#" className={style.social_icon}>
                    <i className="fab fa-linkedin-in"/>
                </a>
            </div>
        </form>

    );
}

export default Registration;