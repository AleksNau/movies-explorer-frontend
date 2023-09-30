import React from "react";
import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

const SearchForm = ({isChecked, setCheck}) => {
    return (<>
            <form className="search-form">
                <input type="search" placeholder="Фильм" className="search-form__input"></input>
                <button className="search-form__submit"></button>
            </form>
            <FilterCheckbox isChecked={isChecked} setCheck={setCheck}/>
        </>
    );
};

export default SearchForm;