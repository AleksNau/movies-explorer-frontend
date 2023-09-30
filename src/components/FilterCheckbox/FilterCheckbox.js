import React, {useEffect, useState} from "react";
import "./FilterCheckbox.css";



const FilterCheckbox = ({isChecked, setCheck}) => {

    return (
        <div className="filter-сheckbox">
            <div className="filter-сheckbox__conteiner">
                <input className="check" type="checkbox" name="check" id="newchec" value="Название"
                       onClick={() => {
                           setCheck(!isChecked)
                         /*  !isChecked? navigate("/saved-movies") : navigate("/movies")*/
                       }}/>
                <label For="newchec" className="filter-сheckbox__name">Короткометражки</label>
            </div>
        </div>
    );
};

export default FilterCheckbox;