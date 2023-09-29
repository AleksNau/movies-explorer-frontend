import React, {useEffect, useState} from "react";
import "./FilterCheckbox.css";
import {useNavigate} from "react-router-dom";

const FilterCheckbox = () => {
    const navigate = useNavigate();
    const [isChecked, setCheck] = useState(false);

    useEffect(() => {
        if (isChecked) {
            navigate("/saved")
        } else {
            navigate("/")
        }
    }, [isChecked]);

    return (
        <div className="filter-сheckbox">
            <div className="filter-сheckbox__conteiner">
                <input className="check" type="checkbox" name="check" id="newchec" value="Название"
                       onClick={() => setCheck(!isChecked)}/>
                <label For="newchec" className="filter-сheckbox__name">Короткометражки</label>
            </div>
        </div>
    );
};

export default FilterCheckbox;