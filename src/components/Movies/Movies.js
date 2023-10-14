import React, {useCallback, useEffect, useState} from "react";
import "./Movies.css";
import Main from "../Main/Main";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import moviesApi from "../../utils/MoviesApi";


const Movies = ({savedMovies, isChecked, setCheck, setIsLoading, addMovie}) => {
    const [allMovies, setAllMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [query, setQuery] = useState('');


    const filter = useCallback((search, isChecked, movies) => {
        localStorage.setItem('movies', JSON.stringify(search));
        localStorage.setItem('shorts', JSON.stringify(isChecked));
        localStorage.setItem('allMovies', JSON.stringify(movies));
        setQuery(search)
        setFilteredMovies(movies.filter((movie) => {
            const searchName = movie.nameRU.toLowerCase().includes(search.toLowerCase())
            return isChecked ? (searchName && movie.duration <= 40) : searchName
        }))
    }, [])

    function onSearchMovies(search) {
        setIsLoading(true)

        if (allMovies.length === 0) {
            moviesApi
                .getCards()
                .then((cardsData) => {
                    setAllMovies(cardsData)
                    setCheck(false)
                    filter(search, isChecked, cardsData)
                })
                .catch((err) => {
                    console.log(err)
                })
                .finally(() => setIsLoading(false))
        } else {
            filter(search, isChecked, allMovies)
            setIsLoading(false)
        }
    }

    useEffect(() => {
        if (localStorage.allMovies && localStorage.shorts && localStorage.movies) {
            const movies = JSON.parse(localStorage.allMovies)
            const search = JSON.parse(localStorage.movies)
            const isCheck = JSON.parse(localStorage.shorts)
            setQuery(search)
            setCheck(isCheck)
            setAllMovies(movies) //скорее всего лишнее
            filter(search, isCheck, movies)
        }
    }, [filter])

    function changeShort() {
        if (isChecked) {
            setCheck(false)
            filter(query, false, allMovies)
        } else {
            setCheck(true)
            filter(query, true, allMovies)
        }
    }


    return (
        <Main>
            <section className="movies">
                <SearchForm isChecked={isChecked} onSearchMovies={onSearchMovies} query={query} setQuery={setQuery}
                            changeCheckBox={changeShort}/>
                <MoviesCardList filteredMovies={filteredMovies} addMovie={addMovie} savedMovies={savedMovies}/>
            </section>
        </Main>

    );
};

export default Movies;
