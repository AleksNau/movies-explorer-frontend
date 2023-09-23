import React from "react";
import "./MoviesCard.css";

const MoviesCard = ({cardData,isOwn}) => {
    return (
            <li className="movies-card">

                <video
                    alt={cardData.trailer}
                    className="movies-card__image"
                    poster={cardData.image}
                >
                </video>
                <button className="movies-card__button-save">Сохранить</button>
                <button className="movies-card__button-checked">
                    <svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.5 3.34961L3.31905 5.59961L8.5 1.09961" stroke="white" stroke-width="1.3"/>
                    </svg>

                </button>
                <div className="movies-card__info">
                    <p className="movies-card__name">{cardData.description}</p>
                    <p className="movies-card__time">{cardData.duration}</p>
                </div>
            </li>
    );
};

export default MoviesCard;

/* <iframe className="movies-card__image"src={cardData.trailer} poster={cardData.image}  frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen title={cardData.movieId}></iframe>*/