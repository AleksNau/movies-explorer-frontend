import React from "react";
import "./MoviesCard.css";

const MoviesCard = ({cardData,isOwn}) => {
    return (
            <li className="movies-card">
                <img
                   /* src={cardData.link}
                    alt={cardData.name}*/
                    className="movies-card__image"
                />
                <div className="movies-card__info">
                    <p className="movies-card__text">Что-то</p>
                    <div className="movies-card__like-container">
                        <button
                            type="button"
                        />
                    </div>
                    {isOwn && (
                        <button
                            type="button"
                            className="movies-card__delete"
                            onClick={() => {
                               /* setActive(!isOpen);
                                setCardToDelete(cardData);*/
                            }}
                        />
                    )}
                </div>
            </li>
    );
};

export default MoviesCard;