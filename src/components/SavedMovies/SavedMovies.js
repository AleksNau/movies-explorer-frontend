import React from "react";
import "./SavedMovies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";


const SavedMovies = ({data, isChecked, setCheck}) => {
    return (
        <section className="saved-movies">
            <SearchForm isChecked={isChecked} setCheck={setCheck}/>
            <MoviesCardList data={data.filter((movie) => movie.isSaved === true)}/>
        </section>
    );
};

export default SavedMovies;