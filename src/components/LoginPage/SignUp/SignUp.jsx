import React from 'react';
 import style from '../LoginPage.module.css';

const SignUp = () => {

    return (

        <form action="" className={style.sign_up_form}>
            <h2 className={style.title}>Sign up</h2>
            <div className={style.input_field}>
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Username"/>
            </div>
            <div className={style.input_field}>
                <i className="fas fa-envelope"></i>
                <input type="email" placeholder="E-mail"/>
            </div>
            <div className={style.input_field}>
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password"/>
            </div>
            <input
                type="submit"
                value="Sign up"
                className={`${style.btn} ${style.solid}`}
            />
            <p className={style.social_text}> Or Sign up social platforms</p>
            <div className={style.social_media}>
                <a href="#" className={style.social_icon}>
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className={style.social_icon}>
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className={style.social_icon}>
                    <i className="fab fa-google"></i>
                </a>
                <a href="#" className={style.social_icon}>
                    <i className="fab fa-linkedin-in"></i>
                </a>
            </div>
        </form>

    );
}

export default SignUp;