import React,{useState} from "react";
import "./SavedMovies.css";
import Main from "../Main/Main";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import {useCallback, useEffect} from "react";


const SavedMovies = ({data, isChecked, setCheck}) => {
    const [filteredMovies, setFilteredMovies] = useState(data);
    const [isCheck, setIsCheck] = useState(false);
    const [query, setQuery] = useState('');

    const filter = useCallback((search,isCheck,movies) => {
        setQuery(search)
        setFilteredMovies(movies.filter((movie) => {
            const searchName = movie.nameRU.toLowerCase().includes(search.toLowerCase())
            return isChecked ? (searchName && movie.duration <= 40) : searchName
        }))
    },[])

    function searchMovies(search) {
        filter(search,isCheck,data)
    }

    useEffect(() => {
        filter(query,isCheck,data)
    },[filter,query,isCheck,data])

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
                <SearchForm isChecked={isChecked} setCheck={setCheck} query={query} setQuery={setQuery} changeCheckBox={changeShort}/>
                <MoviesCardList data={data}/>
            </section>
        </Main>
    );
};

export default SavedMovies;