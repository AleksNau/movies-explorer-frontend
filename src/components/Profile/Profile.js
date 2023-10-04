import React, {useContext, useEffect, useState} from "react";
import "./Profile.css";
import {useForm} from "react-hook-form";
import {CurrentUserContext} from '../../contexts/CurrentUserContext.js';
import {emailValidation, nameValidation,} from '../../utils/validation';
import Main from "../Main/Main";

const Profile = ({onProfile}) => {
    const {name = "Боб", email = 'test@mail.ru'} = useContext(CurrentUserContext);
    //Cтейт кнопки редактирования
    const [formNotActive, setFormNotActive] = useState(true);
    const {
        register,
        handleSubmit,
        formState: {errors, isValid},
        getValues,
        setValue
    } = useForm({mode: "onChange"});

    useEffect(() => {
        setValue('name', name);
        setValue('email', email);
    }, [name, email])


    function handleProfile() {
        onProfile(getValues())
        setFormNotActive(true)
    }

    return (
        <Main>
            <section className="profile">
                <h2 className="profile__title">Привет, {name}!</h2>
                <form id="form" className="profile__form" onSubmit={
                    handleSubmit(handleProfile)
                }>
                    <label className="profile__field">
                        Имя
                        <input
                            className="profile__input"
                            id="name-input"
                            type="text"
                            disabled={formNotActive}
                            {...register('name', nameValidation)}
                        />

                    </label>
                    <span className="profile__input-error profile__input-error_line">{errors?.name?.message}&nbsp;</span>
                    <label className="profile__field profile__field_email">
                        E-mail
                        <input
                            className="profile__input"
                            id="email-input"
                            disabled={formNotActive}
                            {...register('email', emailValidation)}
                        />

                    </label>
                    <span className="profile__input-error">{errors?.email?.message}&nbsp;</span>
                    {formNotActive ? (<>
                        <button
                            className="profile__button profile__button_edit"
                            type="button" onClick={() => setFormNotActive(false)}>
                            Редактировать
                        </button>
                        <button type="button" className="profile__button profile__button_logout">
                            Выйти из аккаунта
                        </button>
                    </>) : (<button type="submit" disabled={!isValid} className="profile__button profile__button_submit">
                        Сохранить
                    </button>)}
                </form>
            </section>
        </Main>

    );
};

export default Profile;