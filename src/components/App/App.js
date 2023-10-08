import './App.css';
import React, {useState,useEffect} from "react";
import {Route, Routes, useLocation, useNavigate} from 'react-router-dom';
import {CurrentUserContext} from '../../contexts/CurrentUserContext';

import moviesApi from "../../utils/MoviesApi";
import authMain from "../../utils/MainApi";
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

import data from "../../utils/constants"
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

    //Состояние прелоадера
    //обработчик загрузки
    const [isLoading, setIsLoading] = useState(false);

    //статус регистрации
    const [statusReg, setStatusReg] = useState(false);

    //стейты попапа
    const [isPopupOpen, setPopup] = useState(false);

    function auth(jwt) {
        return authMain
            .getContent(jwt)
            .then((res) => {
                if (res) {
                    setLoggedIn(true);
                    setCurrentUser({
                        name: res.name,
                        email: res.email,
                    });
                    console.log(res)
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
        authMain
            .signin(data)
            .then((res) => {
                if (!res) throw new Error("Неправильное имя и пароль!");
                if (res.token) {
                    setLoggedIn(true);
                    localStorage.setItem("jwt", res.token);
                    navigate("/");
                }
            })
            .catch(console.error)
            .finally(()=>{
                console.log("Успешная авторизация")
                setIsLoading(false)})
    };

    const onRegister = (data) => {
        console.log(`Данные регистрации :` + data)
        return authMain
            .registration(data)
            .then((res) => {
                if (res) {
                    setStatusReg(true)
                    navigate("/signin");
                }
            })
            .catch(() => {
                console.error();
                setStatusReg(false);
            })
            .finally(()=>{
                console.log("Успешная регистрация")
                })
    };

    const onProfile = (data) => {
        console.log(data)

        setIsLoading(true);
        authMain
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



    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="App">
                {pathsWithHeader && (
                    <Header active={menuActive} setActive={setMenuActive} loggedIn={loggedIn}/>
                )}

                <Routes>
                    <Route path='/' element={isLoading ? (<Preloader/>) : (<Landing/>)}/>
                    <Route path='/profile' element={<Profile onProfile={onProfile} onLogout={signOut}/>}/>
                    <Route path='/signin' element={<Login onLogin={onLogin}/>}/>
                    <Route path='/signup' element={<Register onRegister={onRegister}/>}/>
                    <Route path='/movies' element={<Movies data={data} isChecked={isChecked} setCheck={setCheck} setIsLoading={setIsLoading}/>}/>
                    <Route path='/saved-movies'
                           element={<SavedMovies data={data} isChecked={isChecked} setCheck={setCheck}/>}/>
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