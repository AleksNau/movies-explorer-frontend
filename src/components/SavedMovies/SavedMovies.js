import React,{useState} from "react";
import "./SavedMovies.css";
import Main from "../Main/Main";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import {useCallback, useEffect} from "react";


const SavedMovies = ({data, isChecked, setCheck}) => {
    const [filteredMovies, setFilteredMovies] = useState(data);
    const [query, setQuery] = useState('');

    const filter = useCallback((search,isChecked,movies) => {
        localStorage.setItem('savedMovies', JSON.stringify(filteredMovies));
        setQuery(search)
        setFilteredMovies(movies.filter((movie) => {
            const searchName = movie.nameRU.toLowerCase().includes(search.toLowerCase())
            return isChecked ? (searchName && movie.duration <= 40) : searchName
        }))
    },[])

    useEffect(() => {
        if (localStorage.savedMovies && localStorage.shorts && localStorage.movies) {
            const movies = JSON.parse(localStorage.savedMovies)
            const search = JSON.parse(localStorage.movies)
            const isCheck = JSON.parse(localStorage.allMovies)
            setQuery(search)
            setCheck(isCheck)
            setFilteredMovies(movies) //скорее всего лишнее
            filter(search,isCheck,movies)
        }
    },[filter])

    function changeShort() {
        if (isChecked) {
            setCheck(false)
            filter(query,false,filteredMovies)
        } else {
            setCheck(true)
            filter(query,true,filteredMovies)
        }
    }

    return (
        <Main>
            <section className="saved-movies">
                <SearchForm isChecked={isChecked} setCheck={setCheck} query={query} setQuery={setQuery} changeCheckBox={changeShort}/>
                <MoviesCardList data={data}/>
            </section>
        </Main>
    );
};

export default SavedMovies;