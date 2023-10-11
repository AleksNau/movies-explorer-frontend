import React,{useState} from "react";
import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

const SearchForm = ({isChecked, setCheck,onSearchMovies,query,setQuery,changeCheckBox}) => {
    const [isNull, setIsNull] = useState(false);
    function handleSubmit(e) {
        e.preventDefault()
        if (query === "") {
            setIsNull(true)
            return
        } else {
            console.log(query)
            setIsNull(false)
            onSearchMovies(query)//изменить для saved movies
        }

    }
    return (<>
            <form className="search-form" onSubmit={handleSubmit}>
                <input type="search" placeholder="Фильм" value={query} className="search-form__input" onChange={(e) => setQuery(e.target.value)}></input>
                <button type='submit' className="search-form__submit"></button>
            </form>
            <p className='search-form__error' >{isNull ? ("Нужно ввести ключевое слово") : ('')}</p>
            <FilterCheckbox isChecked={isChecked} setCheck={setCheck} changeCheckBox={changeCheckBox}/>
        </>
    );
};

export default SearchForm;