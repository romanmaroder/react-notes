import React from 'react';
import style from './RegistrForm.module.css';

const RegistrForm = (props) => {
    return (
            <div className={style.registr_form__wrapper}>
                <form className={style.registr_form}>
                        <input className={style.registr_form__input} type="text" placeholder='Login'/>
                        <input className={style.registr_form__input} type="email" placeholder='E-mail'/>
                        <input className={style.registr_form__input} type="password" placeholder='Password'/>
                        <button className={style.registr_form__button}>Регистрация</button>
                </form>
            </div>
    )
}

export default RegistrForm;