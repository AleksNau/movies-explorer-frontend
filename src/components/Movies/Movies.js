import React from "react";
import {Route, Routes} from "react-router-dom";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import data from "../../utils/constants"
import SavedMovies from "../SavedMovies/SavedMovies";


const Movies = () => {
    return (
        <section className="movies">
            <SearchForm/>
            <Routes>
                <Route path="/" element={<MoviesCardList data={data}/>}></Route>
                <Route path="/saved"
                       element={<SavedMovies data={data.filter((movie) => movie.isSaved === true)}/>}></Route>
            </Routes>

        </section>
    );
};

export default Movies;
/* */