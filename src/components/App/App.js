import './App.css';
import React, {useEffect, useState} from "react";
import {Navigate, Route, Routes, useLocation, useNavigate} from 'react-router-dom';
import {CurrentUserContext} from '../../contexts/CurrentUserContext';
import LoadingPreloader from '../../contexts/loadingContext';

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
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

import Preloader from "../Preloader/Preloader";

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

    //обработчик загрузки
    const [isLoading, setIsLoading] = useState(true);

    //статус регистрации
    const [errorSubmit, setErrorSubmit] = useState(false);

    //стейт сохраненных карточек
    const [savedMovies, setSavedMovies] = useState([]);

    const [editProfile, setEditProfile] = useState(false);

    function auth(jwt) {
        return apiMain
            .getContent(jwt)
            .then((res) => {
                setIsLoading(true)
                if (res) {
                    setLoggedIn(true);
                    setCurrentUser({
                        name: res.name,
                        email: res.email,
                    });

                }
            })
            .then(() => setIsLoading(false))
            .catch(console.error);
    }

    useEffect(() => {
        const token = localStorage.getItem("jwt");
        if (token) {
            auth(token);
        }
    }, []);


    const onLogin = (data) => {
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
            .finally(() => {
                setIsLoading(false)
                navigate("/movies");
            })
    };

    const onRegister = (data) => {
        return apiMain
            .registration(data)
            .then((res) => {
                if (res) {
                    onLogin({email: data.email, password: data.password})
                }
            })
            .catch(() => {
                console.error();
                setErrorSubmit(true);

            })
            .finally(() => {
                console.log("Успешная регистрация")
            })
    };

    const onProfile = (data) => {
        setIsLoading(true);
        apiMain
            .setProfileInfo(data, localStorage.getItem("jwt"))
            .then((updatedInfo) => {
                setCurrentUser(updatedInfo);
            })
            .then(() => setEditProfile(true))
            .catch(console.error)
            .finally(() => setIsLoading(false));
    };

    useEffect(() => {
        setEditProfile(false)
    }, [pathname])

    function signOut() {
        localStorage.clear();
        setLoggedIn(false);
        navigate("/");
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
        const searchClickMovie = savedMovies.filter((movie) => {
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
        Promise.all([apiMain.getProfileInfo(localStorage.getItem("jwt")), apiMain.getCards(localStorage.getItem("jwt"))])
            .then(([info, cards]) => {

                setCurrentUser(info);
                setSavedMovies(cards);
                setIsLoading(false)
            })
            .catch(console.error)
            .finally(() => {
                setIsLoading(false);
            });
    }, [loggedIn]);


    return (
        <CurrentUserContext.Provider value={currentUser}>
            <LoadingPreloader.Provider value={isLoading}>{
                isLoading ? (<Preloader/>) : (
                    <div className="App">
                        {pathsWithHeader && (
                            <Header active={menuActive} setActive={setMenuActive} loggedIn={loggedIn}/>
                        )}

                        <Routes>
                            <Route path='/' element={isLoading ? (<Preloader/>) : (<Landing/>)}/>
                            <Route path='/profile' element={
                                <ProtectedRoute
                                    component={Profile}
                                    onProfile={onProfile}
                                    onLogout={signOut}
                                    editProfile={editProfile}
                                    setEditProfile={setEditProfile}
                                    loggedIn={loggedIn}
                                />
                            }/>
                            <Route path='/signin'
                                   element={loggedIn ? (<Navigate to="/movies" replace/>) : (<Login onLogin={onLogin}
                                                                                                    errorSubmit={errorSubmit}
                                                                                                    setErrorSubmit={setErrorSubmit}/>)}/>
                            <Route path='/signup' element={loggedIn ? (<Navigate to="/movies" replace/>) : (
                                <Register onRegister={onRegister}
                                          errorSubmit={errorSubmit}
                                          setErrorSubmit={setErrorSubmit}/>)}/>
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
                                           data={savedMovies}
                                           isChecked={isChecked}
                                           isLoading={isLoading}
                                           setCheck={setCheck}
                                           onDelete={handleCardDelete}
                                       />
                                   }/>
                            <Route path='*' element={<NotFoundPage/>}/>
                        </Routes>
                        {pathsWithFooter && <Footer/>}
                    </div>)}
            </LoadingPreloader.Provider>
        </CurrentUserContext.Provider>
    );
}

export default App;