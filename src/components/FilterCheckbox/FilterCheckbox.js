import React from "react";
import "./FilterCheckbox.css";

const FilterCheckbox = () => {
    return (
        <div className="filter-сheckbox">
            <input className="check" type="checkbox" name="check" id="newchec" value="Название"/>
            <label htmlFor="newchec"></label>
        </div>
    );
};

export default FilterCheckbox;