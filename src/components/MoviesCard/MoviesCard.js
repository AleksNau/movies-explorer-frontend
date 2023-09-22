import React from "react";
import "./MoviesCard.css";

const MoviesCard = ({cardData,isOwn}) => {
    return (
            <li className="movies-card">
                <video
                   /* src={cardData.link}
                    alt={cardData.name}*/
                    className="movies-card__image"
                    alt="Превью"
                />
                <button className="movies-card__button-save">Сохранить</button>
                <button className="movies-card__button-checked">
                    <svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.5 3.34961L3.31905 5.59961L8.5 1.09961" stroke="white" stroke-width="1.3"/>
                    </svg>

                </button>
                <div className="movies-card__info">
                    <p className="movies-card__name">33 слова о дизайне</p>
                    <p className="movies-card__time">1ч 17м</p>
                </div>
            </li>
    );
};

export default MoviesCard;