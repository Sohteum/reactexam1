import axios from 'axios';
import React, { useEffect, useState } from 'react';


const Header = () => {

    const [search, setSearch] = useState()
    const [data, setData] = useState(null);

    const onChangeSearch = (e) => {
        e.preventDefault()
        setSearch(e.target.value);
    }

const onClick =(e)=>{
    e.preventDefault()
    // fetch("www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
    // .then((response) => response.json());
    fetch("www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: "Test",
          body: "Testing!",
          userId: 1,
        }),
      })
        .then((response) => response.json())
}

    return (
        <>
            <header>
                <div className='header'>
                    <img className='logo' src="img/header.png" alt="" />
                    <h2>Cocktail Lover</h2>
                </div>
                <form className="search">
                    <input value={search} onChange={onChangeSearch} placeholder='Search your cocktail' type="text" />
                    <button onClick={onClick}><i className="fa-solid fa-magnifying-glass"></i></button>
                </form>
            </header>
        </>
    );
};

export default Header;