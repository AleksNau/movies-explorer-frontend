import React from "react";
import {useForm} from "react-hook-form";
import "./Login.css";
import PageWithForm from "../PageWithForm/PageWithForm";

const Login = ({onLogin}) => {
    const {
        register,
        handleSubmit,
        formState: {errors, isValid},
        getValues,
        reset,
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
                link={"/index"}
                subtitle={'Ещё не зарегистрированы?'}
                onSubmit={handleLogin}
            >
                <label className="form__label">E-mail
                    <input
                        id="email"
                        className="form__input"
                        placeholder="Email"
                        {...register('email', {
                            pattern:
                                {
                                    value: /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+/g,
                                    message: "Введите коректный эмейл"
                                },
                            minLength:
                                {
                                    value: 2,
                                    message: "Минимум 2 символа"
                                },
                            maxLength:
                                {
                                    value: 40,
                                    message: "Максимум 40 символов"
                                },
                            required: "Поле обязательно к заполнению"

                        })}
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
                        {...register('password', {
                            minLength:
                                {
                                    value: 2,
                                    message: "Минимум 2 символа"
                                },
                            maxLength:
                                {
                                    value: 30,
                                    message: "Максимум 30 символов"
                                },
                            required: "Поле обязательно к заполнению"

                        })}
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