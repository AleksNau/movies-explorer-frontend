import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

const MoviesCardList = ({cards}) => {
    return (
            <ul className="movies-card-list">
                {cards.map((card) => {
                    return (
                        <MoviesCard
                            key={card._id}
                            cardData={card}
                            isOpen={isPopupSubmit}
                            setActive={onSubmitDelete}
                            onCardClick={onCardClick}
                            onCardDelete={onCardDelete}
                            setCardToDelete={setCardToDelete}
                        />
                    );
                })}
            </ul>
    );
};

export default MoviesCardList;