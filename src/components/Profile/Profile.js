import React,{useState} from "react";
import "./Profile.css";

const Profile = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    function handleName(e) {
        setName(e.target.value);
    }
    function handleEmail(e) {
        setEmail(e.target.value);
    }

    return (
        <section className="profile">
                <h3 className="profile__title">Привет,Виталий!</h3>
                <form id="form" className="profile__form" noValidate>
                    <label className="profile__field">
                        Имя
                        <input
                            name="name"
                            className="profile__input"
                            id="name-input"
                            type="text"
                            minLength="2"
                            maxLength="40"
                            required
                            value="Виталий"
                            onChange={handleName}
                        />

                    </label>
                    <span className="profile__input-error">&nbsp;</span>
                    <label className="profile__field">
                        E-mail
                        <input
                            name="email"
                            className="profile__input"
                            id="email-input"
                            type="email"
                            value="test@mail.ru"
                            required
                            onChange={handleEmail}
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