import React from "react";
import {useLocation, useNavigate} from "react-router-dom";
import "./Header.css";
import logo from "../../images/logo.svg";
import Navigation from "../Navigation/Navigation";

const Header = ({setActive, active, loggedIn}) => {
    const navigate = useNavigate();
    let {pathname} = useLocation();
    const pathForMovieButtons = [ '/','/movies', '/saved-movies', '/profile'].includes(pathname);
    return (
        <header className="header">
            <img src={logo} alt="логотип" className="header__logo" onClick={() => {
                navigate("/")
            }}/>

            {(pathForMovieButtons && (loggedIn === true)) ? (
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


            {((pathname === '/') && (loggedIn === false)) ? (<div className="header__profile-conteiner">
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


            {((pathForMovieButtons || pathname === '/')&& (loggedIn === true)) ? (<button className="header__button-burger" onClick={() => setActive(!active)}>
                <span className="header__button-line"/>
            </button>) : ('')}
            <Navigation active={active} setActive={setActive}/>
        </header>
    );
};

export default Header;