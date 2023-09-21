import React from "react";
import "./MoviesCard.css";

const MoviesCard = ({cardData,isOwn}) => {
    return (
            <li className="movies-card">
                <img
                   /* src={cardData.link}
                    alt={cardData.name}*/
                    className="movies-card__image"
                    alt="Превью"
                />
                <div className="movies-card__info">
                    <p className="movies-card__name">33 слова о дизайне</p>
                    <p className="movies-card__time">1ч 17м</p>
                </div>
            </li>
    );
};

export default MoviesCard;