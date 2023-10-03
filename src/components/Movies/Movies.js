import React from "react";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";


const Movies = ({data, isChecked, setCheck}) => {
    return (
        <div className="movies">
            <SearchForm isChecked={isChecked} setCheck={setCheck}/>
            <MoviesCardList data={data}/>
        </div>
    );
};

export default Movies;
