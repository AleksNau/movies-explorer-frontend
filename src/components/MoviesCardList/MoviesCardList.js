import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import data from "../../utils/constants"
const MoviesCardList = ({cards}) => {
    return (
        <>
            <ul className="movies-card-list">
            {
                data.map(card => (
                    <MoviesCard/>
                ))
            }
        </ul>
            <div className="movies-card-list__button-container">
                    <button className="movies-card-list__button">
                        Ещё
                    </button>
            </div>
    </>

    );
};

export default MoviesCardList;