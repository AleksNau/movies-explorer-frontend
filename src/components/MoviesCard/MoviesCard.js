import React from "react";
import "./MoviesCard.css";

const MoviesCard = ({cardData}) => {
    return (
            <li className="movies-card">
                <img
                    src={cardData.link}
                    alt={cardData.name}
                    className="elements__image"
                    onClick={() => {
                        onCardClick(cardData);
                    }}
                />
                <div className="elements__info">
                    <p className="elements__text">{cardData.name}</p>
                    <div className="elements__like-container">
                        <button
                            type="button"
                            className={cardLikeButtonClassName}
                            onClick={() => onCardLike(cardData)}
                        />
                        <p className="elements__like-counter">{likes.length}</p>
                    </div>
                    {isOwn && (
                        <button
                            type="button"
                            className="elements__delete"
                            onClick={() => {
                                setActive(!isOpen);
                                setCardToDelete(cardData);
                            }}
                        />
                    )}
                </div>
            </li>
    );
};

export default MoviesCard;