import React from "react";
import "./Navigation.css";

const Navigation = ({items,active,setActive}) => {
    return (
        <div className={active ? "navigation navigation_active" : "navigation"} onClick={() => setActive(false)}>
            <div className="navigation__content" onClick={e => e.stopPropagation()} >
                <button className="navigation__button-close" onClick={() => setActive(false)}></button>
                <nav className="navigation__list">
                    {items.map(item => <li className="navigation__item"><a className="navigation__link" href={item.href}>{item.value}</a></li>)}
                </nav>
                <button className="navigation__button-account">Аккаунт</button>
            </div>
        </div>

    );
};

export default Navigation;