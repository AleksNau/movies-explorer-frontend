import React,{useState} from "react";
import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

const SearchForm = ({isChecked, setCheck,onSearchMovies,query,setQuery,changeCheckBox}) => {

    function handleSubmit(e) {
        e.preventDefault()
        console.log(query)
        onSearchMovies(query)//изменить для saved movies
    }
    return (<>
            <form className="search-form" onSubmit={handleSubmit}>
                <input type="search" placeholder="Фильм" className="search-form__input" onChange={(e) => setQuery(e.target.value)}></input>
                <button type='submit' className="search-form__submit"></button>
            </form>
            <FilterCheckbox isChecked={isChecked} setCheck={setCheck} changeCheckBox={changeCheckBox}/>
        </>
    );
};

export default SearchForm;