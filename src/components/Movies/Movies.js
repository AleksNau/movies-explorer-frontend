import React from "react";
import "./Movies.css";
import Main from "../Main/Main";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import moviesApi from "../../utils/MoviesApi";
import {useState} from "react";


const Movies = ({data, isChecked, setCheck}) => {
    const [dataM, setDataM] = useState(data);
    function onSearchMovies(query) {
        moviesApi
            .getCards()
            .then((cardsData) => {
                setDataM(cardsData)
            })
            .catch(console.error)
    }


        return (
        <Main>
            <section className="movies">
                <SearchForm isChecked={isChecked} setCheck={setCheck} onSearchMovies={onSearchMovies}/>
                <MoviesCardList data={dataM}/>
            </section>
        </Main>

    );
};

export default Movies;
