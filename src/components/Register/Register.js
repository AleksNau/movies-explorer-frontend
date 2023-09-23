import React, { useState } from "react";
import "./Register.css";

const Register = ({onRegister}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
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

    function handleSubmit() {
        onRegister(name,email, password)
    }
    return (
        <div className="register">
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    handleSubmit();
                }}
                name={`sign-up-form`}
                className={`register__form register__form_sign-up`}
                id={`sign-up-form`}
                method="post"
            >
                <fieldset className="register__fieldset">
                    <legend className="register__title">Добро пожаловать!</legend>
                    <label className="register__label">Имя
                        <input
                            name="name"
                            id="name"
                            type="text"
                            className="register__input"
                            minLength="2"
                            maxLength="40"
                            placeholder="имя"
                            onChange={handleName}
                            required
                        />
                        <span id="name-error" className="register__error">
              &nbsp;
            </span>
                    </label>
                    <label className="register__label">E-mail
                        <input
                            name="email"
                            id="email"
                            type="email"
                            className="register__input"
                            minLength="2"
                            maxLength="40"
                            placeholder="Email"
                            onChange={handleEmail}
                            required
                        />
                        <span id="name-error" className="register__error">
              &nbsp;
            </span>
                    </label>
                    <label className="register__label">Пароль
                        <input
                            name="password"
                            id="pass"
                            type="password"
                            className="register__input"
                            minLength="2"
                            maxLength="30"
                            placeholder="Пароль"
                            onChange={(e) => handlePassword(e)}
                            required
                        />
                        <span id="info-error" className="register__error">
              &nbsp;
            </span>
                    </label>
                    <button
                        type="submit"
                        className="register__submit"
                        form={`sign-up-form`}
                        value="Зарегистрироваться"
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