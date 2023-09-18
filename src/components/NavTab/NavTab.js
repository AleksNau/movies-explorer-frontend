import React from "react";
import "./NavTab.css";

const NavTab = () => {
    return (
        <nav className="nav-tab">
            <li className="nav-tab__button">О проекте</li>
            <li className="nav-tab__button">Технологии</li>
            <li className="nav-tab__button">Студент</li>
        </nav>
    );
};

export default NavTab;