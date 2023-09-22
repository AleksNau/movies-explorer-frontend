import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
const emojis = [
    {
        emoji: '😀',
        name: "test grinning face"
    },
    {
        emoji: '🎉',
        name: "party popper"
    },
    {
        emoji: '💃',
        name: "woman dancing"
    }
];
const MoviesCardList = ({cards}) => {
    return (
            <ul className="movies-card-list">
                {
                    emojis.map(emoji => (
                        <MoviesCard/>
                    ))
                }
            </ul>
    );
};

export default MoviesCardList;