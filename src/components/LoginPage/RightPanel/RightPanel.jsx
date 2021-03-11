import React from 'react';
import style from '../LoginPage.module.css';

const RightPanel = (props) => {

    return (
        <div className={`${style.panel} ${style.right_panel}`}>
            <div className={style.content}>
                <h3>One of us?</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
                    cum ex quis recusandae temporibus, ullam.
                </p>
                <button
                    onClick={props.onChangeHandler}
                    className={`${style.btn} ${style.transparent}`}
                    id="sign_in_btn"
                >
                    Sign in
                </button>
            </div>
            <img src="img/sign_in.svg" className={style.image} alt="sign in"/>
        </div>
    );
}

export default RightPanel;