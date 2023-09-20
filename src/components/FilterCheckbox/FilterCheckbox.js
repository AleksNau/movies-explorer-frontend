import React from "react";
import "./FilterCheckbox.css";

const FilterCheckbox = () => {
    return (
        <div className="filter-сheckbox">
        <div className="filter-сheckbox__conteiner">
            <input className="check" type="checkbox" name="check" id="newchec" value="Название"/>
            <label For="newchec" className="filter-сheckbox__name">Короткометражки</label>
        </div>
        </div>
    );
};

export default FilterCheckbox;