import React from "react";
import "./NavTab.css";

const NavTab = () => {
    return (
        <nav className="nav-tab">
            <li className="nav-tab__button"><a className="nav-tab__link" href="#about-project">О проекте</a></li>
            <li className="nav-tab__button"><a className="nav-tab__link" href="#technologies">Технологии</a></li>
            <li className="nav-tab__button"><a className="nav-tab__link" href="#about-me">Студент</a></li>
        </nav>
    );
};

export default NavTab;