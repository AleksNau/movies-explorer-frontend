import './App.css';
import React, {useState,useEffect} from "react";
import {Route, Routes, useLocation, useNavigate} from 'react-router-dom';
import {CurrentUserContext} from '../../contexts/CurrentUserContext';

import moviesApi from "../../utils/MoviesApi";
import apiMain from "../../utils/MainApi";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Landing from "../Landing/Landing";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import Profile from "../Profile/Profile";
import SavedMovies from "../SavedMovies/SavedMovies";
import Movies from "../Movies/Movies";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

import data from "../../utils/constants"
import Preloader from "../Preloader/Preloader";
import mainApi from "../../utils/MainApi";

function App() {
    const navigate = useNavigate();
    //Стейт пользователя
    const [currentUser, setCurrentUser] = useState({});
    //Состояния меню
    const [menuActive, setMenuActive] = useState(false);
    //Список меню

    //Подключаем хэдер и футер к роутам
    const {pathname} = useLocation();
    const pathsWithHeader = ['/', '/movies', '/saved-movies', '/profile'].includes(pathname);
    const pathsWithFooter = ['/', '/movies', '/saved-movies'].includes(pathname);
    const [isChecked, setCheck] = useState(false);

    //Заготовка под логин
    const [loggedIn, setLoggedIn] = useState(false);

    //Состояние прелоадера
    //обработчик загрузки
    const [isLoading, setIsLoading] = useState(false);

    //статус регистрации
    const [statusReg, setStatusReg] = useState(false);
    //статус регистрации
    const [errorSubmit, setErrorSubmit] = useState(false);
    //стейты попапа
    const [isPopupOpen, setPopup] = useState(false);
    //стейт сохраненных карточек
    const [savedMovies, setSavedMovies] = useState([]);

    function auth(jwt) {
        return apiMain
            .getContent(jwt)
            .then((res) => {
                if (res) {
                    setLoggedIn(true);
                    setCurrentUser({
                        name: res.name,
                        email: res.email,
                    });
                    navigate("/")
                }
            })
            .catch(console.error);
    }

    useEffect(() => {
        const token = localStorage.getItem("jwt");
        if (token) {
            auth(token);
        }
    }, []);

    useEffect(() => {
        if (loggedIn) {
            navigate("/");
        }
    }, [loggedIn]);

    const onLogin = (data) => {
        console.log(`Данные логина:`+ data)
        apiMain
            .signin(data)
            .then((res) => {
                if (!res) throw new Error("Неправильное имя и пароль!");
                if (res.token) {
                    setLoggedIn(true);
                    localStorage.setItem("jwt", res.token);

                }
            })
            .catch(console.error)
            .finally(()=>{
                navigate("/");
                console.log("Успешная авторизация")
                setIsLoading(false)})
    };

    const onRegister = (data) => {
        console.log(`Данные регистрации :` + data)
        return apiMain
            .registration(data)
            .then((res) => {
                if (res) {
                    setStatusReg(true)
                    navigate("/signin");
                }
            })
            .catch(() => {
                console.error();
                setErrorSubmit(true);

            })
            .finally(()=>{
                console.log("Успешная регистрация")
                })
    };

    const onProfile = (data) => {
        console.log(data)

        setIsLoading(true);
        apiMain
            .setProfileInfo(data,localStorage.getItem("jwt"))
            .then((updatedInfo) => {
                setCurrentUser(updatedInfo);
            })
            .catch(console.error)
            .finally(() => setIsLoading(false));
    };

    function signOut() {
        localStorage.clear();//localStorage.removeItem("jwt");
        setLoggedIn(false);
        navigate("/signin");
    }

    function closePopup() {
        setPopup(false);
    }

    function handleCardDelete(card) {
        setIsLoading(true);
        apiMain
            .deleteCard(card._id, localStorage.getItem("jwt"))
            .then(() => {
                setSavedMovies((state) => state.filter((item) => item._id !== card._id));//может быть проблема с id .id _id проверить как на бэке
            })
            .catch(console.error)
            .finally(() => {
                setIsLoading(false);
            });
    }

    function HandleToggleMovie(data) {
        const isAdd = savedMovies.some(element => data.id === element.movieId)
        const searchClickMovie = savedMovies.filter((movie)=> {
            return movie.movieId === data.id
        })

        if (isAdd) {
            handleCardDelete(searchClickMovie[0])
        } else {
            apiMain.addMovie(data, localStorage.getItem("jwt"))
                .then(res => {
                    setSavedMovies([res, ...savedMovies])
                })
        }
    }

    React.useEffect(() => {
        Promise.all([mainApi.getProfileInfo(localStorage.getItem("jwt")), mainApi.getCards(localStorage.getItem("jwt"))])
            .then(([info, cards]) => {
                setCurrentUser(info);
                setSavedMovies(cards);
            })
            .catch(console.error);
    }, [loggedIn]);



    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="App">
                {pathsWithHeader && (
                    <Header active={menuActive} setActive={setMenuActive} loggedIn={loggedIn}/>
                )}

                <Routes>
                    <Route path='/' element={isLoading ? (<Preloader/>) : (<Landing/>)}/>
                    <Route path='/profile' element={
                        <ProtectedRoute
                            component={Profile}
                            loggedIn={loggedIn}
                            onProfile={onProfile}
                            onLogout={signOut}
                        />
                    }/>
                    <Route path='/signin' element={<Login onLogin={onLogin}
                                                          errorSubmit={errorSubmit}
                                                          setErrorSubmit={setErrorSubmit}/>}/>
                    <Route path='/signup' element={<Register onRegister={onRegister}
                                                             errorSubmit={errorSubmit}
                                                             setErrorSubmit={setErrorSubmit}/>}/>
                    <Route path='/movies' element={
                        <ProtectedRoute
                            component={Movies}
                            loggedIn={loggedIn}
                            isChecked={isChecked}
                            setCheck={setCheck}
                            setIsLoading={setIsLoading}
                            addMovie={HandleToggleMovie}
                            savedMovies={savedMovies}
                        />
                    }/>
                    <Route path='/saved-movies'
                           element={
                               <ProtectedRoute
                                   component={SavedMovies}
                                   loggedIn={loggedIn}
                                   data={savedMovies} isChecked={isChecked} setCheck={setCheck} onDelete={handleCardDelete}
                               />
                           }/>
                    <Route path='*' element={<NotFoundPage/>}/>
                </Routes>
                {pathsWithFooter && <Footer/>}
                { /*Заготовка под модалку с ошибкой*/}
                <InfoTooltip
                    isOpen={isPopupOpen}
                    onClose={closePopup}
                    statusReg={statusReg}
                />
            </div>
        </CurrentUserContext.Provider>
    );
}

export default App;