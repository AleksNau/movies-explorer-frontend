import React, {useEffect, useState} from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import {useLocation} from "react-router-dom";
import LoadingText from "../../contexts/loadingContext";
import Preloader from "../Preloader/Preloader";


const MoviesCardList = ({filteredMovies, addMovie, savedMovies, onDelete,serverError}) => {
    let {pathname} = useLocation();
    const listLength = filteredMovies.length;
    const isLoading = React.useContext(LoadingText);

    const [shownMovies, setShownMovies] = useState(0);

    function shownCount() {
        const display = window.innerWidth;
        if (display > 1180) {
            setShownMovies(16);
        } else if (display > 1023) {
            setShownMovies(12);
        } else if (display > 800) {
            setShownMovies(8);
        } else if (display < 800) {
            setShownMovies(5);
        }
    }

    useEffect(() => {
        shownCount();
    }, [window.innerWidth, pathname]);

    useEffect(() => {
        setTimeout(() => {
            window.addEventListener('resize', shownCount);
        }, 100);
    });

    function loadMore() {

        const moreButton = document.querySelector('.more-button')
        const display = window.innerWidth;
        if (display > 1180) {
            setShownMovies(shownMovies + 4);
        } else if (display > 1023) {
            setShownMovies(shownMovies + 4);
        } else if (display < 1023) {
            setShownMovies(shownMovies + 2);
        }

        if (shownMovies >= listLength) {
            moreButton.style.display = 'none';
        }
    }

    return (
        <>
            {isLoading ? (<Preloader/>) : (listLength > 0 ? (<ul className="movies-card-list">
                {pathname === '/movies' ?
                    (filteredMovies.slice(0, shownMovies).map(card => (
                        <MoviesCard key={card.movieId} cardData={card} addMovie={addMovie} savedMovies={savedMovies}
                                    onDelete={onDelete}/>
                    ))) : (
                        filteredMovies.map(card => (
                            <MoviesCard key={card.movieId} cardData={card} addMovie={addMovie} savedMovies={savedMovies}
                                        onDelete={onDelete}/>
                        )))
                }
            </ul>) : (<p className='movies-card-list__not-found'>Ничего не найдено</p>))}
            <div className="more-button-container">
                {(pathname === "/movies" && !isLoading && shownMovies < listLength) ? (<button className="more-button" onClick={() => loadMore()}>
                    Ещё
                </button>) : ("")}
            </div>

        </>

    );
};

export default MoviesCardList;