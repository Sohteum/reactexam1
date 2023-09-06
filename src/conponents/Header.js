import React, { useEffect, useRef, useState } from 'react';

// /www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita
const Header = () => {

    const [search, setSearch] = useState()
    // const [data, setData] = useState(null);
 
 

    const onChangeSearch = (e) => {
        e.preventDefault()
        setSearch(e.target.value);
    }

    const getData = async () => {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    ).then((res) => res.json());

    
   };

  useEffect(() => {
    setTimeout(() => {
      getData();
    }, 1500);
  }, []);
 
    return (
        <>
            <header>
                <div className='header'>
                    <img className='logo' src="img/header.png" alt="" />
                    <h2>Cocktail Lover</h2>
                </div>
                <form className="search">
                    <input value={search} onChange={onChangeSearch} placeholder='Search your cocktail' type="text" />
                    <button  ><i className="fa-solid fa-magnifying-glass"></i></button>
                </form>
            </header>
        </>
    );
};

export default Header;