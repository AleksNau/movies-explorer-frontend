import React, {useState} from "react";
import "./Register.css";
import {useForm} from "react-hook-form";
import PageWithForm from "../PageWithForm/PageWithForm";

const Register = ({onRegister}) => {

    const [name, setName] = useState("");
    const {
        register,
        formState: {errors,isValid},
        getValues
    } = useForm({mode:"onChange"});

    function handleName(e) {
        setName(e.target.value);
    }

    function handleRegister() {
        onRegister(getValues())
    }

    return (
        <div className="register">

            <PageWithForm
                title={'Добро пожаловать!'}
                buttonTitle={'Зарегистрироваться'}
                linkText={'Войти'}
                link={"/index"}
                subtitle={'Уже зарегистрированы?'}
                onSubmit={handleRegister}
            >
                <label className="register__label">Имя
                    <input
                        id="name"
                        type="text"
                        className="register__input"
                        placeholder="имя"
                        onChange={handleName}
                        {...register('name', {
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
                    <span id="name-error" className="register__error">{errors?.name?.message}&nbsp;</span>
                </label>
                <label className="form__label">E-mail
                    <input
                        id="email"
                        className="form__input"
                        placeholder="Email"
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
                    <span id="info-error" className="form__error">{errors?.password?.message}
                        &nbsp;
            </span>
                </label>
            </PageWithForm>
        </div>
    );
};

export default Register;