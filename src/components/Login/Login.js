import React from "react";
import {useForm} from "react-hook-form";
import "./Login.css";
import PageWithForm from "../PageWithForm/PageWithForm";
import {emailValidation, passwordValidation} from '../../utils/validation';

const Login = ({onLogin,setErrorSubmit}) => {
    const {
        register,
        formState: {errors,isValid},
        getValues,

    } = useForm({mode: "onChange"});

    function handleLogin() {
        onLogin(getValues())
    }

    return (
        <div className="login">
            <PageWithForm
                title={'Рады видеть!'}
                buttonTitle={'Войти'}
                linkText={'Регистрация'}
                link={"/signup"}
                subtitle={'Ещё не зарегистрированы?'}
                onSubmit={handleLogin}
                buttonClass={''}
                isValid={isValid}
                setErrorSubmit={setErrorSubmit}
            >
                <label className="form__label">E-mail
                    <input
                        id="email"
                        className="form__input"
                        placeholder="Email"
                        {...register('email', emailValidation)}
                    />
                    <span id="name-error" className="form__error">{errors?.email?.message}
                        &nbsp;
            </span>
                </label>
                <label className="form__label">Пароль
                    <input
                        id="pass"
                        type="password"
                        className="form__input"
                        placeholder="Пароль"
                        {...register('password', passwordValidation)}
                    />
                    <span id="info-error" className="form__error">{errors?.password?.message}
                        &nbsp;
            </span>
                </label>
            </PageWithForm>

        </div>
    );
};

export default Login;