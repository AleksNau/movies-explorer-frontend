import './App.css';
import Header from "../Header/Header";
import React,{useState,useEffect}  from "react";
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import Footer from "../Footer/Footer";
import Main from "../Main/Main";

import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import Profile from "../Profile/Profile";
import Navigation from "../Navigation/Navigation";
import data from "../../utils/constants"
import SavedMovies from "../SavedMovies/SavedMovies";
import Movies from "../Movies/Movies";



function App() {
    const navigate = useNavigate();
    //Состояния меню
    const [menuActive, setMenuActive] = useState(false);
    //Список меню

    //Подключаем хэдер и футер к роутам
    const { pathname } = useLocation();
    const pathsWithHeader = ['/', '/movies', '/saved-movies', '/profile'].includes(pathname);
    const pathsWithFooter = ['/', '/movies', '/saved-movies'].includes(pathname);
    const [isChecked, setCheck] = useState(false);

    //Заготовка под логин
    const [loggedIn, setLoggedIn] = useState(false);

    const onLogin = (data) => {
        navigate("/");
        setLoggedIn(true);
        console.log(data)
    };

    const onRegister = (data) => {
        navigate("/signin");
        console.log(data)
    };

    return (
        <div className="App">
            {pathsWithHeader && (
                <Header active={menuActive} setActive={setMenuActive} loggedIn={loggedIn}/>
            )}
            <Navigation active={menuActive} setActive={setMenuActive} />
            <Routes>
                <Route path='/' element={<Main/>} />
                <Route path='/profile' element={<Profile/>} />
                <Route path='/signin' element={<Login onLogin={onLogin}/>} />
                <Route path='/signup' element={<Register onRegister={onRegister}/>} />
                <Route path='/movies' element={<Movies data={data} isChecked={isChecked} setCheck={setCheck}/>}/>
                <Route path='/saved-movies' element={<SavedMovies data={data} isChecked={isChecked} setCheck={setCheck}/>}/>
            </Routes>
            {pathsWithFooter && <Footer />}
        </div>
    );
}

export default App;