import './App.css';
import Header from "../Header/Header";

import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";


function App() {
    return (
        <div className="App">
            <Header/>
            <Movies/>
<Main/>
            <Footer/>
        </div>
    );
}

export default App;
