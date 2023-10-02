import React from "react";
import {useLocation, useNavigate} from "react-router-dom";
import "./Header.css";
import logo from "../../images/logo.svg";

const Header = ({setActive, active, loggedIn}) => {
    const navigate = useNavigate();
    let {pathname} = useLocation();
    return (
        <header className="header">
            <img src={logo} alt="логотип" className="header__logo" onClick={() => {
                navigate("/")
            }}/>

            {(loggedIn) && (pathname === "/movies" || pathname === "/saved-movies" || pathname === "/profile") ? (
                <div className="header__movies-conteiner">
                    <button className="header__button" onClick={() => {
                        navigate("/movies")
                    }}>Фильмы
                    </button>
                    <button className="header__button" onClick={() => {
                        navigate("/saved-movies")
                    }}>Сохранённые фильмы
                    </button>
                </div>) : ("")}


            {(pathname === '/' && !loggedIn) ? (<div className="header__profile-conteiner">
                <button type={"button"} className="header__button header__button_sign-up" onClick={() => {
                    navigate("/signup")
                }}>Регистрация
                </button>
                <button type={"button"} className="header__button header__button_sign-in" onClick={() => {
                    navigate("/signin")
                }}>Войти
                </button>
            </div>) : (<div>
                <button type={"button"} className="header__button header__button_account" onClick={() => {
                    navigate("/profile")
                }}>Аккаунт
                </button>
            </div>)}


            <button className="header__button-burger" onClick={() => setActive(!active)}>
                <span className="header__button-line"></span>
            </button>
        </header>
    );
};

export default Header;