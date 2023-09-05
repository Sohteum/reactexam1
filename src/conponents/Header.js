import React from 'react';


const Header = () => {
    return (
        < >
           <header>
                <div className='header'>
                    <img className='logo' src="img/header.png" alt=""/>
                    <h2>Cocktail Lover</h2>
                </div>
                <div class="search">
                    <input type="text"/>
                    <button><i class="fa-solid fa-magnifying-glass"></i></button>
                </div>
           </header>
        </>
    );
};

export default Header;