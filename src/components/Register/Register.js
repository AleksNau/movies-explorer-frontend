import React, {useState} from "react";
import "./Register.css";
import {useForm} from "react-hook-form";
import PageWithForm from "../PageWithForm/PageWithForm";

const Register = ({onRegister}) => {

    const [name, setName] = useState("");
    const {
        register,
        handleSubmit,
        formState: {errors,isValid},
        reset
    } = useForm({mode:"onChange"});
    function handleName(e) {
        setName(e.target.value);
    }

    return (
        <div className="register">

            <PageWithForm
                title={'Добро пожаловать!'}
                buttonTitle={'Зарегистрироваться'}
                linkText={'Войти'}
                link={"/index"}
                subtitle={'Уже зарегистрированы?'}
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
            </PageWithForm>
        </div>
    );
};

export default Register;