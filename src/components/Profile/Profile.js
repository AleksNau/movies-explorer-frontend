import React from "react";
import "./Profile.css";
import {useForm} from "react-hook-form";

const Profile = ({onProfile}) => {

    const {
        register,
        handleSubmit,
        formState: {errors, isValid},
        getValues
    } = useForm({mode: "onChange"});

    function handleProfile() {
        onProfile(getValues())
    }

    return (
        <section className="profile">
            <h3 className="profile__title">Привет,Виталий!</h3>
            <form id="form" className="profile__form" onSubmit={
                handleSubmit(handleProfile)
            }>
                <label className="profile__field">
                    Имя
                    <input
                        className="profile__input"
                        id="name-input"
                        type="text"
                        value="Виталий"
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
                <span className="profile__input-error">{errors?.name?.message}&nbsp;</span>
                <label className="profile__field">
                    E-mail
                    <input
                        className="profile__input"
                        id="email-input"
                        value="test@mail.ru"
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
                <span className="profile__input-error">{errors?.email?.message}&nbsp;</span>
                <button
                    className="profile__button profile__button_submit"
                    type="submit">
                    Редактировать
                </button>
                <button type="button" disabled={!isValid} className="profile__button profile__button_logout">
                    Выйти из аккаунта
                </button>
            </form>
        </section>
    );
};

export default Profile;