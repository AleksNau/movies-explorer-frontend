import React from "react";
import "./Menu.css";

const Menu = ({items,active,setActive}) => {
    return (
        <div className={active ? "menu menu_active" : "menu"} onClick={() => setActive(false)}>
            <div className="menu__content" onClick={e => e.stopPropagation()} >
                <ul className="menu__list">
                    {items.map(item => <li className="menu__item"><a href={item.href}></a>{item.value}</li>)}
                </ul>
            </div>
        </div>
    );
};

export default Menu;