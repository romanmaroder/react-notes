import React from 'react';
import style from '../LoginPage.module.css';
import imgAuth from  '../../../assets/img/authentication.svg';
const LeftPanel = (props) => {

    return (
        <div className={`${style.panel} ${style.left_panel}`}>
            <div className={style.content}>
                <h3>New here?</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
                    cum ex quis recusandae temporibus, ullam.
                </p>
                <button
                    onClick={props.onChangeHandler}
                    className={`${style.btn} ${style.transparent}`}
                    id="sign_up_btn"
                >
                    Sign up
                </button>
            </div>
            <img
                src={imgAuth}
                className={style.image}
                alt="authentication"
            />
        </div>
    );
}

export default LeftPanel;