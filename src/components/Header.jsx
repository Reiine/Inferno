import React, { useState } from 'react';
import records from '../shows.json';

function Header() {
    const [navSearch, setNavSearch] = useState(null)
    const [searchValue , setSearchValue] = useState(null)
    const searchIt = (val)=>{
        if (val===''){
            setNavSearch(null)
        }
        else{
            setSearchValue(val)
            var a = records.filter((data)=>{
                return data.Title.toLowerCase().includes(val)
            })
            const sliced = a.slice(0,3)
            setNavSearch(sliced)
        }
    }
    const handleKeyPress =(e) =>{
        if (e.key==='Enter'){
            window.location.replace(`/Inferno/search/${searchValue}`)
        }
    }

    return (
        <>
            <nav>
                <a href='/Inferno'><h1 className='font-bold text-4xl'>Inferno</h1></a>
                <div className='search'>
                    <input type="text" onChange={(e) => searchIt(e.target.value)} onKeyDown={handleKeyPress} />

                    <a href={`/Inferno/search/${searchValue}`}>Search</a>
                    {navSearch && navSearch.map((element, index) => {
                        return (
                            <div className='searchItems' key={index}>
                                <img src={element.Poster} alt="img" />
                                <div className='searchItemInfo'>
                                    <a href={`/Inferno/details/${element.imdbID}`}><h6>{element.Title}</h6></a>
                                    <p>{element.Year}</p>
                                </div>
                            </div>

                        );
                    })}


                </div>



            </nav>



        </>
    )
}
export default Header;

//<a href="https://www.flaticon.com/free-icons/search-bar" title="search bar icons">Search bar icons created by Tanah Basah - Flaticon</a>