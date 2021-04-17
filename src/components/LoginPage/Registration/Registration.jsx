import React from 'react';
import axios from "axios";
import style from '../LoginPage.module.css';
import {registerAPI} from "../../../api/api";
import {setRegistrationResponse} from "../../../store/registration/actions";


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

    let handleSubmit = (e) => {

        e.preventDefault();
        // alert('ЗАПРОС');
        const data = {
            username: props.username,
            email: props.email,
            password: props.password,
        }
        // props.req(data)
        // console.log(props.response);
        registerAPI.signupUser(data)
           .then(data => {
               if (data.code === 200) {
                   let mess = data.message;
                   props.setRegistrationResponse(mess);
                   props.username ='';
                   props.email ='';
                   props.password ='';
               } else if (data.code === 422) {
                   let mess = [];
                   mess.push(<p key={1}>{data.message.username}</p>);
                   mess.push(<p key={2}>{data.message.email}</p>);
                   mess.push(<p key={3}>{data.message.password}</p>);

                   props.setRegistrationResponse(mess)
               }
           })
           .catch((err) => {
               console.log(err);
           });
    };


    return (

        <form action="" className={style.sign_up_form} onSubmit={handleSubmit}>
            <h2 className={style.title}>Sign up</h2>
            <div className={style.input_field}>
                <i className="fas fa-user"/>
                <input type="text"
                       placeholder="Username"
                       name="username"
                       value={props.username}
                       onChange={onUsernameChange}/>
            </div>
            <div className={style.input_field}>
                <i className="fas fa-envelope"/>
                <input type="email"
                       placeholder="E-mail"
                       name="email"
                       value={props.email}
                       onChange={onEmailChange}/>
            </div>
            <div className={style.input_field}>
                <i className="fas fa-lock"/>
                <input type="password"
                       placeholder="Password"
                       name="password"
                       value={props.password}
                       onChange={onPasswordChange}/>
            </div>
            <input
                type="submit"
                value="Sign up"
                className={`${style.btn} ${style.solid}`}
            />
            {/*<p className={style.social_text} id="mess"> Or Sign up social platforms</p>*/}
            <p className={style.social_text}>{props.response}</p>

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