import React from "react";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";


const Movies = ({data,isChecked, setCheck}) => {
    return (
        <section className="movies">
            <SearchForm isChecked={isChecked} setCheck={setCheck}/>
                <MoviesCardList data={data}/>
        </section>
    );
};

export default Movies;
