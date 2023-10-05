import React from "react";
import "./Movies.css";
import Main from "../Main/Main";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";


const Movies = ({data, isChecked, setCheck}) => {
    return (
        <Main>
            <section className="movies">
                <SearchForm isChecked={isChecked} setCheck={setCheck}/>
                <MoviesCardList data={data}/>
            </section>
        </Main>

    );
};

export default Movies;
