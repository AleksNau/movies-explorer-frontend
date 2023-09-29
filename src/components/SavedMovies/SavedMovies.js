import React from "react";
import "./SavedMovies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

const SavedMovies = ({data}) => {
    return (
        <div className="saved-movies">
            <MoviesCardList data={data}/>
        </div>
    );
};

export default SavedMovies;