import React,{useState} from "react";
import "./SavedMovies.css";
import Main from "../Main/Main";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";


const SavedMovies = ({data, isChecked, setCheck}) => {
    const [query, setQuery] = useState('');
    return (
        <Main>
            <section className="saved-movies">
                <SearchForm isChecked={isChecked} setCheck={setCheck} query={query} setQuery={setQuery}/>
                <MoviesCardList data={data.filter((movie) => movie.isSaved === true)}/>
            </section>
        </Main>
    );
};

export default SavedMovies;