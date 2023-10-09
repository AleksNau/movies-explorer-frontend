import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";


const MoviesCardList = ({data,addMovie,savedMovies}) => {
    const listLength = data.length;
    let maxList = 6;

    function loadMore() {
        maxList += 3;
        const moreButton = document.querySelector('.more-button')
        const array = Array.from(document.querySelector('.movies-card-list').children);
        const visItems = array.slice(0, maxList)

        visItems.forEach(el => el.classList.add('is-visible'));

        if (visItems.length === listLength) {
            moreButton.style.display = 'none';
        }
    }

    return (
        <>
            <ul className="movies-card-list">
                {
                    data.map(card => (
                        <MoviesCard key={card.movieId} cardData={card} addMovie={addMovie} savedMovies={savedMovies}/>
                    ))
                }
            </ul>
            <div className="more-button-container">
                <button className="more-button" onClick={() => loadMore()}>
                    Ещё
                </button>
            </div>

        </>

    );
};

export default MoviesCardList;