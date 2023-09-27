import React, { useState } from "react";
import "./Register.css";
import {useForm} from "react-hook-form";

const Register = ({onRegister}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const {
        register,
        handleSubmit,
        formState: {errors,isValid},
        reset
    } = useForm({mode:"onChange"});

    const onSubmit = (data) => {
        alert(JSON.stringify(data))
    }

    function handleName(e) {
        setName(e.target.value);
    }
    function handleEmail(e) {
        setEmail(e.target.value);
    }

    // input change
    function handlePassword(e) {
        setPassword(e.target.value);
    }

    function handleSubmit23() {
        onRegister(name,email, password)
    }
    return (
        <div className="register">
            <form
                onSubmit={
                    handleSubmit(onSubmit)
                }
                name={`sign-up-form`}
                className={`register__form register__form_sign-up`}
                id={`sign-up-form`}
                method="post"
            >
                <fieldset className="register__fieldset">
                    <legend className="register__title">Добро пожаловать!</legend>
                    <label className="register__label">Имя
                        <input
                            id="name"
                            type="text"
                            className="register__input"
                            placeholder="имя"
                            onChange={handleName}
                            {...register('name',{
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
                        <span id="name-error" className="register__error">{errors?.name?.message}
              &nbsp;
            </span>

                    </label>
                    <label className="register__label">E-mail
                        <input
                            id="email"
                            type="email"
                            className="register__input"
                            placeholder="Email"
                            onChange={handleEmail}
                            {...register('email',{
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
                                required:"Поле обязательно к заполнению",

                            })}
                        />
                        <span id="name-error" className="register__error">{errors?.email?.message}
              &nbsp;
            </span>
                    </label>
                    <label className="register__label">Пароль
                        <input
                            name="password"
                            id="pass"
                            type="password"
                            className="register__input"
                            placeholder="Пароль"
                            onChange={(e) => handlePassword(e)}
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
                        <span id="info-error" className="register__error">{errors?.password?.message}
              &nbsp;
            </span>
                    </label>
                    <button
                        type="submit"
                        disabled={!isValid}
                        className="register__submit"
                        form={`sign-up-form`}
                    >
                        Зарегистрироваться
                    </button>
                    <p className="register__question">Уже зарегистрированы? <a href="/index" className="register__link">Войти</a></p>
                </fieldset>
            </form>
        </div>
    );
};

export default Register;