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
import {useState} from "react";


function App() {
    const [menuActive, setMenuActive] = useState(false);
    const items = [{value: "Главная", href:"/index"},{value: "Фильмы", href:"/index"},{value: "Сохранённые фильмы", href:"/index"}]
    return (
        <div className="App">
            <Header active={menuActive} setActive={setMenuActive}/>
            <Navigation active={menuActive} setActive={setMenuActive} items={items}/>
            <Movies/>
            <Main/>

        </div>
    );
}

export default App;
/*            <Header active={menuActive} setActive={setMenuActive}/>
            <Navigation active={menuActive} setActive={setMenuActive} items={items}/>
            <Movies/>
            <Main/>*/