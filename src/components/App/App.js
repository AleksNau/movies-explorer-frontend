import './App.css';
import Header from "../Header/Header";

import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import Profile from "../Profile/Profile";
import Navigation from "../Navigation/Navigation";
import Menu from "../Menu/Menu";
import {useState} from "react";


function App() {
    const [menuActive, setMenuActive] = useState(false);
    const items = [{value: "Главная", href:"/index"},{value: "Услуги", href:"/index"},{value: "Контакты", href:"/index"}]
    return (
        <div className="App">

            <Navigation active={menuActive} setActive={setMenuActive}/>
            <Menu active={menuActive} setActive={setMenuActive} items={items}/>
            <Main/>
        </div>
    );
}

export default App;
