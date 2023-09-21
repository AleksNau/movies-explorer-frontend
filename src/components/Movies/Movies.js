import React from "react";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCard from "../MoviesCard/MoviesCard";

const Movies = () => {
    return (
        <section className="movies">
<SearchForm/>
            <ul className="test-list">
            <MoviesCard/>
            </ul>
        </section>
    );
};

export default Movies;