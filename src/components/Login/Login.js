import React, { useState } from "react";
import {useForm} from "react-hook-form";
import "./Login.css";

const Login = ({onLogin}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {
        register,
        handleSubmit,
        formState: {errors,isValid},
        reset
    } = useForm({mode:"onChange"});

    const onSubmit = (data) => {
        alert(JSON.stringify(data))
        //onLogin(email, password)
    }
    function handleEmail(e) {
        setEmail(e.target.value);
    }

    // input change
    function handlePassword(e) {
        setPassword(e.target.value);
    }

    return (
        <div className="login">
            <form
                onSubmit={
                    handleSubmit(onSubmit)
                }
                name={`sign-up-form`}
                className={`login__form login__form_sign-up`}
                id={`sign-up-form`}
                method="post"
            >
                <fieldset className="login__fieldset">
                    <legend className="login__title">Рады видеть!</legend>

                    <label className="login__label">E-mail
                        <input
                            id="email"
                            className="login__input"
                            placeholder="Email"
                            onChange={handleEmail}
                            {...register('email',{
                                pattern:
                                    {
                                        value:/[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+/g,
                                        message:"Введите коректный эмейл"
                                    },
                                minLength:
                                    {
                                        value:2,
                                        message:"Минимум 2 символа"
                                    },
                                maxLength:
                                    {
                                        value:40,
                                        message:"Максимум 40 символов"
                                    },
                                required:"Поле обязательно к заполнению"

                            })}
                        />
                        <span id="name-error" className="login__error">{errors?.email?.message}
              &nbsp;
            </span>
                    </label>
                    <label className="login__label">Пароль
                        <input
                            id="pass"
                            type="password"
                            className="login__input"
                            placeholder="Пароль"
                            onChange={handlePassword}
                            {...register('password',{
                                minLength:
                                    {
                                        value:2,
                                        message:"Минимум 2 символа"
                                    },
                                maxLength:
                                    {
                                        value:30,
                                        message:"Максимум 30 символов"
                                    },
                                required:"Поле обязательно к заполнению"

                            })}
                        />
                        <span id="info-error" className="login__error">{errors?.password?.message}
              &nbsp;
            </span>
                    </label>
                    <button
                        type="submit"
                        className="login__submit"
                        disabled={!isValid}
                        form={`sign-up-form`}
                        value="Войти"
                    >
                        Войти
                    </button>
                    <p className="login__question">Ещё не зарегистрированы? <a href="/index" className="login__link">Регистрация</a></p>
                </fieldset>
            </form>
        </div>
    );
};

export default Login;