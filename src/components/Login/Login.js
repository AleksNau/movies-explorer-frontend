import React, { useState } from "react";
import "./Login.css";

const Login = ({onLogin}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    function handlEmail(e) {
        setEmail(e.target.value);
    }

    // input change
    function handlePassword(e) {
        setPassword(e.target.value);
    }

    function handleSubmit() {
        onLogin(email, password)
    }
    return (
        <div className="login">
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    handleSubmit();
                }}
                name={`sign-up-form`}
                className={`login__form login__form_sign-up`}
                id={`sign-up-form`}
                method="post"
            >
                <fieldset className="login__fieldset">
                    <legend className="login__title">Рады видеть!</legend>

                    <label className="login__label">E-mail
                        <input
                            name="email"
                            id="email"
                            type="email"
                            className="login__input"
                            minLength="2"
                            maxLength="40"
                            placeholder="Email"
                            onChange={handlEmail}
                            required
                        />
                        <span id="name-error" className="login__error">
              &nbsp;
            </span>
                    </label>
                    <label className="login__label">Пароль
                        <input
                            name="password"
                            id="pass"
                            type="password"
                            className="login__input"
                            minLength="2"
                            maxLength="30"
                            placeholder="Пароль"
                            onChange={handlePassword}
                            required
                        />
                        <span id="info-error" className="login__error">
              &nbsp;
            </span>
                    </label>
                    <button
                        type="submit"
                        className="login__submit"
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