import React, {useEffect, useState} from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import {useLocation} from "react-router-dom";
import {useWindowWidth} from '../../utils/hooks/useWindowWidth';
import {BIG_STEP, MEDIUM_STEP, SMALL_STEP} from '../../utils/constants';
import LoadingPreloader from "../../contexts/loadingContext";
import Preloader from "../Preloader/Preloader";


const MoviesCardList = ({filteredMovies, addMovie, savedMovies, onDelete}) => {
    let {pathname} = useLocation();
    const [windowWidth] = useWindowWidth();

    const listLength = filteredMovies.length;
    const isLoading = React.useContext(LoadingPreloader);

    const [shownMovies, setShownMovies] = useState(0);

    const moreButton = document.querySelector('.more-button')

    useEffect(() => {
        if (windowWidth >= 1280) {
            setShownMovies(16);
        } else if (windowWidth >= 768) {
            setShownMovies(12);
        } else if (windowWidth >= 480) {
            setShownMovies(5);
        }
    }, [windowWidth]);

    function loadMore() {
        if (windowWidth >= 1280) {
            setShownMovies(shownMovies + BIG_STEP);
        } else if (windowWidth >= 768) {
            setShownMovies(shownMovies + MEDIUM_STEP);
        } else if (windowWidth >= 480) {
            setShownMovies(shownMovies + SMALL_STEP);
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
                {(pathname === "/movies" && !isLoading && shownMovies < listLength) ? (
                    <button className="more-button" onClick={() => loadMore()}>
                        Ещё
                    </button>) : ("")}
            </div>

        </>

    );
};

export default MoviesCardList;