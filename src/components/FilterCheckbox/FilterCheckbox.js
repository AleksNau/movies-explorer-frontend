import React from "react";
import "./FilterCheckbox.css";


const FilterCheckbox = ({isChecked, setCheck}) => {

    return (
        <div className="filter-сheckbox">
            <div className="filter-сheckbox__conteiner">
                <input className="check" type="checkbox" name="check" id="short-movie" value="Короткометражки"
                       onClick={() => {
                           setCheck(!isChecked)
                       }}/>
                <label For="short-movie" className="filter-сheckbox__name">Короткометражки</label>
            </div>
        </div>
    );
};

export default FilterCheckbox;