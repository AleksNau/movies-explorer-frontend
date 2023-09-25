import React from "react";
import "./Navigation.css";

const Navigation = ({setActive,active}) => {
    return (
            <nav className="navigation">
                <button className="navigation__button" onClick={() => setActive(!active)}>
                    <span className="navigation__button-line"></span>
                </button>
            </nav>

    );
};

export default Navigation;