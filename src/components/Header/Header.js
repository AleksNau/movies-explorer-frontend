import React from "react";
import { Route, Routes,useNavigate } from "react-router-dom";
import "./Header.css";
import logo from "../../images/logo.svg";

const Header = ({setActive,active}) => {
    const navigate = useNavigate();
    return (
        <header className="header">
            <img src={logo} alt="логотип" className="header__logo" />
            <Routes>
                <Route path="/index" element={<div className="header__movies-conteiner">
                    <button className="header__button" onClick={() => {navigate("/movies")}}>Фильмы</button>
                    <button className="header__button" onClick={() => {navigate("/saved-movies")}}>Сохраненые фильмы</button>
                </div>}/>
            </Routes>
            <Routes>
                <Route path="/" element={<div className="header__profile-conteiner">
                    <button className="header__button header__button_sign-up" onClick={() => {navigate("/sign-up")}}>Регистрация</button>
                    <button className="header__button header__button_sign-in" onClick={() => {navigate("/sign-in")}}>Войти</button>
                </div>}/>
                <Route path="/index" element={<div>
                    <button className="header__button header__button_account" onClick={() => {navigate("/sign-up")}}>Аккаунт</button>
                </div>}/>
            </Routes>
            <button className="header__button-burger" onClick={() => setActive(!active)}>
                <span className="header__button-line"></span>
            </button>
        </header>
    );
};

export default Header;