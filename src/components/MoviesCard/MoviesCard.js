import React, {useState} from "react";
import "./MoviesCard.css";
import {useLocation} from "react-router-dom";

const MoviesCard = ({cardData,savedMovies,addMovie}) => {
    const [isChecked, setCheck] = useState(cardData.isSaved);
    let {pathname} = useLocation();
    const {image} = cardData;

    const handleAddMovie = () => {
      if (savedMovies.some(item => cardData.id === item.movieId)) {
          setCheck(true)
          addMovie(cardData)
      } else {
          setCheck(false)
          addMovie(cardData)//проверить нужно ли
      }
    }

    return (
        <li className="movies-card">
            <div className="movies-card__conteiner">
                <video
                    className="movies-card__image"
                    poster={`https://api.nomoreparties.co/${image.url}`}
                >
                </video>
                {pathname === "/movies" ? !isChecked ? (
                    <button className="movies-card__button-save" onClick={() => setCheck(!isChecked)}>Сохранить</button>
                ) : (
                    <button className="movies-card__button-checked" onClick={() => setCheck(!isChecked)}>
                        <svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.5 3.34961L3.31905 5.59961L8.5 1.09961" stroke="white" stroke-width="1.3"/>
                        </svg>
                    </button>
                ) : (<button className="movies-card__button-checked movies-card__button-checked_del">
                    <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M3.5 4.44287L5.85705 6.79992L6.91771 5.73926L4.56066 3.38221L6.79992 1.14295L5.73926 0.0822905L3.5 2.32155L1.26086 0.0824062L0.200195 1.14307L2.43934 3.38221L0.0824064 5.73914L1.14307 6.7998L3.5 4.44287Z"
                              fill="white"/>
                    </svg>
                </button>)}
            </div>

            <div className="movies-card__info">
                <p className="movies-card__name">{cardData.nameRU}</p>
                <p className="movies-card__time">{cardData.duration}ч {cardData.duration}м</p>
            </div>
        </li>
    );
};

export default MoviesCard;

/* <iframe className="movies-card__image"src={cardData.trailer} poster={cardData.image}  frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen title={cardData.movieId}></iframe>*/