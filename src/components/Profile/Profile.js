import React, {useState} from "react";
import "./Profile.css";
import {useForm} from "react-hook-form";

const Profile = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");

    const {
        register,
        handleSubmit,
        formState: {errors, isValid},
        reset
    } = useForm({mode: "onChange"});

    const onSubmit = (data) => {
        alert(JSON.stringify(data))
    }

    function handleName(e) {
        setName(e.target.value);
    }

    function handleEmail(e) {
        setEmail(e.target.value);
    }

    return (
        <section className="profile">
            <h3 className="profile__title">Привет,Виталий!</h3>
            <form id="form" className="profile__form" onSubmit={
                handleSubmit(onSubmit)
            }>
                <label className="profile__field">
                    Имя
                    <input
                        className="profile__input"
                        id="name-input"
                        type="text"
                        value="Виталий"
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

                </label>
                <span className="profile__input-error">&nbsp;</span>
                <label className="profile__field">
                    E-mail
                    <input
                        className="profile__input"
                        id="email-input"
                        value="test@mail.ru"
                        onChange={handleEmail}
                        {...register('email', {
                            pattern:
                                {
                                    value: /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+/g,
                                    message: "Введите коректный эмейл"
                                },
                            maxLength:
                                {
                                    value: 40,
                                    message: "Максимум 40 символов"
                                },
                            required: "Поле обязательно к заполнению"

                        })}
                    />

                </label>
                <span className="profile__input-error">&nbsp;</span>
                <button
                    className="profile__button profile__button_submit"
                    type="submit">
                    Редактировать
                </button>
                <button type="button" className="profile__button profile__button_logout">
                    Выйти из аккаунта
                </button>
            </form>
        </section>
    );
};

export default Profile;