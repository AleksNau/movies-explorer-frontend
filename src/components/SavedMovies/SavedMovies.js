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
        setQuery(search)
        setFilteredMovies(movies.filter((movie) => {
            const searchName = movie.nameRU.toLowerCase().includes(search.toLowerCase())
            return isChecked ? (searchName && movie.duration <= 40) : searchName
        }))
    },[])

    function searchMovies(search) {
        filter(search,isChecked,data)
    }

    useEffect(() => {
        filter(query,isChecked,data)
    },[filter,query,isChecked,data])

    function changeShort() {
        if (isChecked) {
            setCheck(false)
            filter(query,false,data)
            console.log(data)
        } else {
            setCheck(true)
            filter(query,true,data)
            console.log(data)
        }
    }

    return (
        <Main>
            <section className="saved-movies">
                <SearchForm isChecked={isChecked} setCheck={setCheck} query={query} setQuery={setQuery} changeCheckBox={changeShort}/>
                <MoviesCardList data={filteredMovies}/>
            </section>
        </Main>
    );
};

export default SavedMovies;