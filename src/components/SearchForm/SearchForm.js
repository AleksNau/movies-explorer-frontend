import React from "react";
import "./SearchForm.css";

const SearchForm = () => {
    return (
            <form className="search-form">
                <input type="search" placeholder="Фильм" className="search-form__input"></input>
                <button className="search-form__submit"></button>
            </form>
    );
};

export default SearchForm;