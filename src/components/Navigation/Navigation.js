import React from "react";
import "./Navigation.css";
import {Link} from "react-router-dom";

const Navigation = ({active,setActive}) => {
    return (
        <div className={active ? "navigation navigation_active" : "navigation"} onClick={() => setActive(false)}>
            <div className="navigation__content" onClick={e => e.stopPropagation()} >
                <button className="navigation__button-close" onClick={() => setActive(false)}></button>
                <nav className="navigation__list">

                    <li className="navigation__item"><Link className="navigation__link" to="/">Главная</Link></li>
                    <li className="navigation__item"><Link className="navigation__link" to='/movies'>Фильмы</Link></li>
                    <li className="navigation__item"><Link className="navigation__link" to='/saved-movies'>Сохранённые фильмы</Link></li>
                </nav>
                <button className="navigation__button-account"><Link className="navigation__link" to='/profile'>Аккаунт</Link></button>
            </div>
        </div>

    );
};

export default Navigation;