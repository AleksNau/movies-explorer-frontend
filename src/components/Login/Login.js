import React, {useState} from "react";
import {useForm} from "react-hook-form";
import "./Login.css";
import PageWithForm from "../PageWithForm/PageWithForm";

const Login = ({onLogin}) => {

    const onSubmit = (data) => {
        alert(JSON.stringify(data))
        //onLogin(email, password)
    }

    return (
        <div className="login">
            <PageWithForm
                title={'Рады видеть!'}
                buttonTitle={'Войти'}
                linkText={'Регистрация'}
                link={"/index"}
                subtitle={'Ещё не зарегистрированы?'}
            />

        </div>
    );
};

export default Login;