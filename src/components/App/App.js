import './App.css';
import Header from "../Header/Header";

import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import Register from "../Register/Register";
import Login from "../Login/Login";


function App() {
    return (
        <div className="App">
            <Header/>
            <Login/>
            <Main/>
            <Footer/>
        </div>
    );
}

export default App;
