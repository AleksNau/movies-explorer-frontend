import React, {useCallback, useEffect, useState} from "react";
import "./SavedMovies.css";
import Main from "../Main/Main";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";


const SavedMovies = ({data, onDelete}) => {
    const [filteredMovies, setFilteredMovies] = useState(data);
    const [query, setQuery] = useState('');
    const [check, setCheck] = useState(false);

    const filter = useCallback((search, isChecked, movies) => {
        setQuery(search)
        setFilteredMovies(movies.filter((movie) => {
            const searchName = movie.nameRU.toLowerCase().includes(search.toLowerCase())
            return isChecked ? (searchName && movie.duration <= 40) : searchName
        }))
    }, [])

    function searchMovies(search) {
        filter(search, check, data)
    }

    useEffect(() => {
        filter(query, check, data)
    }, [filter, query, check, data])

//функция чекбокса
    function changeShort() {
        if (check) {
            setCheck(false)
            filter(query, false, data)
        } else {
            setCheck(true)
            filter(query, true, data)
        }
    }

    return (
        <Main>
            <section className="saved-movies">
                <SearchForm isChecked={check} query={query} setQuery={setQuery} changeCheckBox={changeShort}
                            onSearchMovies={searchMovies}/>
                <MoviesCardList filteredMovies={filteredMovies} savedMovies={data} onDelete={onDelete}/>
            </section>
        </Main>
    );
};

export default SavedMovies;