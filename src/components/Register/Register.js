import React from "react";
import "./Register.css";
import {useForm} from "react-hook-form";
import PageWithForm from "../PageWithForm/PageWithForm";
import {emailValidation, nameValidation, passwordValidation} from '../../utils/validation';

const Register = ({onRegister}) => {

    const {
        register,
        formState: {errors},
        getValues
    } = useForm({mode: "onChange"});

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
                buttonClass={'form__submit_register'}
            >
                <label className="register__label">Имя
                    <input
                        id="name"
                        type="text"
                        className="register__input"
                        placeholder="имя"
                        {...register('name', nameValidation)}
                    />
                    <span id="name-error" className="register__error">{errors?.name?.message}&nbsp;</span>
                </label>
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
                        className={errors?.password? ('form__input form__input_error') : (`form__input`)}
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

export default Register;