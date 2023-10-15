import React from "react";
import "./Navigation.css";
import {Link, useNavigate} from "react-router-dom";

const Navigation = ({active, setActive}) => {
    const navigate = useNavigate();
    return (
        <div className={active ? "navigation navigation_active" : "navigation"} onClick={() => setActive(false)}>
            <div className="navigation__content" onClick={e => e.stopPropagation()}>
                <button type={"button"} className="navigation__button-close" onClick={() => setActive(false)}/>
                <ul className="navigation__list">
                    <li className="navigation__item"><Link className="navigation__link" to="/">Главная</Link></li>
                    <li className="navigation__item"><Link className="navigation__link" to='/movies'>Фильмы</Link></li>
                    <li className="navigation__item"><Link className="navigation__link" to='/saved-movies'>Сохранённые
                        фильмы</Link></li>
                </ul>
                <button type={"button"} className="navigation__button-account"
                        onClick={() => navigate('/profile')}>Аккаунт
                </button>
            </div>
        </div>

    );
};

export default Navigation;