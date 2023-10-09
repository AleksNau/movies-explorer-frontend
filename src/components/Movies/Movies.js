import React from "react";
import "./Movies.css";
import Main from "../Main/Main";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import moviesApi from "../../utils/MoviesApi";
import {useState,useEffect,useCallback} from "react";


const Movies = ({savedMovies, isChecked, setCheck,setIsLoading,addMovie}) => {
    const [allMovies, setAllMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [query, setQuery] = useState('');
    const [notFound, setNotFound] = useState(false);


    const filter = useCallback((search,isChecked,movies) => {
        localStorage.setItem('movies', JSON.stringify(search));
        localStorage.setItem('shorts', JSON.stringify(isChecked));
        localStorage.setItem('allMovies', JSON.stringify(movies));
        setQuery(search)
        setFilteredMovies(movies.filter((movie) => {
            const searchName = movie.nameRU.toLowerCase().includes(search.toLowerCase())
            return isChecked ? (searchName && movie.duration <= 40) : searchName
        }))
    },[])

    function onSearchMovies(search) {
        if(allMovies.length === 0) {
            moviesApi
                .getCards()
                .then((cardsData) => {
                    setAllMovies(cardsData)
                    setCheck(false)
                    filter(search,isChecked,cardsData)
                })
                .catch(console.error)
                .finally(() => setIsLoading(false))
        } else {
            filter(search,isChecked,allMovies)
        }
    }
    useEffect(() => {
        if (filteredMovies.length === 0) {
            setNotFound(true)
        }
    },[filter])
    useEffect(() => {
        if (localStorage.allMovies && localStorage.shorts && localStorage.movies) {
            const movies = JSON.parse(localStorage.allMovies)
            const search = JSON.parse(localStorage.movies)
            const isCheck = JSON.parse(localStorage.allMovies)
            setQuery(search)
            setCheck(isCheck)
            setAllMovies(movies) //скорее всего лишнее
            filter(search,isCheck,movies)
        }
    },[filter])

    function changeShort() {
        if (isChecked) {
            setCheck(false)
            filter(query,false,allMovies)
        } else {
            setCheck(true)
            filter(query,true,allMovies)
        }
    }


        return (
        <Main>
            <section className="movies">
                <SearchForm isChecked={isChecked} setCheck={setCheck} onSearchMovies={onSearchMovies} query={query} setQuery={setQuery} changeCheckBox={changeShort}/>
                <MoviesCardList data={filteredMovies} addMovie={addMovie} savedMovies={savedMovies} notFound={notFound}/>
            </section>
        </Main>

    );
};

export default Movies;
