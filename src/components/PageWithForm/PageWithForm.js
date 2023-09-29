import React from "react";
import "./PageWithForm.css";
import {useState} from "react";
import {useForm} from "react-hook-form";
import logo from "../../images/logo.svg";

const PageWithForm = ({title,buttonTitle,children,subtitle,linkText,link}) => {

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


    return (<>
        <img src={logo} alt="логотип" className="form__logo" />
            <form
                onSubmit={
                    handleSubmit(onSubmit)
                }
                name={`sign-up-form`}
                className={`form`}
                id={`sign-up-form`}
                method="post"
            >
                <fieldset className="form__fieldset">
                    <legend className="form__title">{title}</legend>
                    {children}
                    <label className="form__label">E-mail
                        <input
                            id="email"
                            className="form__input"
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
                        <span id="info-error" className="form__error">{errors?.password?.message}
                            &nbsp;
            </span>
                    </label>
                    <button
                        type="submit"
                        className="form__submit"
                        disabled={!isValid}
                        form={`sign-up-form`}
                        value={buttonTitle}
                    >
                        {buttonTitle}
                    </button>
                    <p className="form__question">{subtitle} <a href={link} className="form__link">{linkText}</a></p>
                </fieldset>
            </form>
    </>
    );
};

export default PageWithForm;