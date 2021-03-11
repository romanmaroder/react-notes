import React, {useState} from 'react';
import classNames from 'classnames/bind';
import style from './LoginPage.module.css';
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";
import LeftPanel from "./LeftPanel/LeftPanel";
import RightPanel from "./RightPanel/RightPanel";

let styles = classNames.bind(style);

const LoginPage = () => {

    // Хук переключения форм регистрации и входа
    const [login, setLogin] = useState(true);

    // Функция обработчик клика по кнопкам переключения форм
    const onChangeHandler = () => {
        setLogin(!login);
    }
    let container = styles({
        container: true,
        sign_up_mode: !login
    })
    return (
        <div className={container}>
            <div className={style.forms_container}>
                <div className={style.signin_signup}>
                    <SignIn />
                    <SignUp />
                </div>
            </div>
            <div className={style.panels_container}>
                <LeftPanel onChangeHandler={onChangeHandler} />
                <RightPanel onChangeHandler={onChangeHandler} />
            </div>
        </div>
    );
}

export default LoginPage;