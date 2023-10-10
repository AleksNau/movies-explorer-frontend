import React,{useState} from "react";
import "./SavedMovies.css";
import Main from "../Main/Main";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import {useCallback, useEffect} from "react";


const SavedMovies = ({data, isChecked, setCheck,onDelete}) => {
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
//функция чекбокса
    function changeShort() {
        if (isChecked) {
            setCheck(false)
            filter(query,false,data)
        } else {
            setCheck(true)
            filter(query,true,data)
        }
    }

    return (
        <Main>
            <section className="saved-movies">
                <SearchForm isChecked={isChecked} setCheck={setCheck} query={query} setQuery={setQuery} changeCheckBox={changeShort} onSearchMovies={searchMovies}/>
                <MoviesCardList data={filteredMovies} savedMovies={data} onDelete={onDelete}/>
            </section>
        </Main>
    );
};

export default SavedMovies;