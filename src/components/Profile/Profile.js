import React, {useContext, useEffect, useState} from "react";
import "./Profile.css";
import {useForm} from "react-hook-form";
import {CurrentUserContext} from '../../contexts/CurrentUserContext.js';
import {emailValidation, nameValidation,} from '../../utils/validation';
import {DISABLED_BUTTON, ENABLED_BUTTON} from '../../utils/constants';
import Main from "../Main/Main";

const Profile = ({onProfile, onLogout, editProfile, setEditProfile}) => {
    const {name = "Боб", email = 'test@mail.ru'} = useContext(CurrentUserContext);
    //Cтейт кнопки редактирования
    const [formNotActive, setFormNotActive] = useState(true);
    const [isCurrentUser, setUserDifference] = useState(true);
    const {
        register,
        handleSubmit,
        formState: {errors, isValid},
        getValues,
        setValue,
        watch,
    } = useForm({mode: "onChange"});

    const watchName = watch("name");
    const watchEmail = watch("email");

    useEffect(() => {
        setValue('name', name);
        setValue('email', email);

    }, [watch])

    useEffect(() => {
        name !== watchName || email !== watchEmail
            ? setUserDifference(false)
            : setUserDifference(true);
    }, [watchName, watchEmail]);

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
                            {...register('name', {
                                onChange: () => {
                                    setEditProfile(false)
                                }, ...nameValidation
                            })}
                        />

                    </label>
                    <span
                        className="profile__input-error profile__input-error_line">{errors?.name?.message}&nbsp;</span>
                    <label className="profile__field profile__field_email">
                        E-mail
                        <input
                            className="profile__input"
                            id="email-input"
                            disabled={formNotActive}
                            {...register('email', {
                                onChange: () => {
                                    setEditProfile(false)
                                }, ...emailValidation
                            })}
                        />

                    </label>
                    <span className="profile__input-error">{errors?.email?.message}&nbsp;</span>
                    {formNotActive ? (<>
                        <p className="profile__success-message">{editProfile ? ("Вы успешно обновили данные") : ("")}</p>
                        <button
                            className="profile__button profile__button_edit"
                            type="button" onClick={() => setFormNotActive(false)}>
                            Редактировать
                        </button>
                        <button type="button" className="profile__button profile__button_logout" onClick={onLogout}>
                            Выйти из аккаунта
                        </button>
                    </>) : (<button type="submit"
                                    disabled={isCurrentUser ? (true) : (!isValid ? (true) : (false))}
                                    className={isCurrentUser ? (DISABLED_BUTTON) : (!isValid ? (DISABLED_BUTTON) : (ENABLED_BUTTON))}>
                        Сохранить
                    </button>)}
                </form>
            </section>
        </Main>

    );
};

export default Profile;