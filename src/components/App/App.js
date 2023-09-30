import './App.css';
import React, {useState} from "react";
import {Route, Routes, useLocation, useNavigate} from 'react-router-dom';

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import Profile from "../Profile/Profile";
import Navigation from "../Navigation/Navigation";
import SavedMovies from "../SavedMovies/SavedMovies";
import Movies from "../Movies/Movies";
import InfoTooltip from "../InfoTooltip/InfoTooltip";

import data from "../../utils/constants"

function App() {
    const navigate = useNavigate();
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

    const onLogin = (data) => {
        navigate("/");
        setLoggedIn(true);
        console.log(data)
    };

    const onRegister = (data) => {
        navigate("/signin");
        console.log(data)
        setStatusReg(true)
    };

    const onProfile = (data) => {
        console.log(data)
    };

    function closePopup() {
        setPopup(false);
    }

    return (

        <div className="App">
            {pathsWithHeader && (
                <Header active={menuActive} setActive={setMenuActive} loggedIn={loggedIn}/>
            )}
            <Navigation active={menuActive} setActive={setMenuActive}/>
            <Routes>
                <Route path='/' element={<Main/>}/>
                <Route path='/profile' element={<Profile onProfile={onProfile}/> }/>
                <Route path='/signin' element={<Login onLogin={onLogin}/>}/>
                <Route path='/signup' element={<Register onRegister={onRegister}/>}/>
                <Route path='/movies' element={<Movies data={data} isChecked={isChecked} setCheck={setCheck}/>}/>
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

    );
}

export default App;