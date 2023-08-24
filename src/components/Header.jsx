import React, { useState } from 'react';
import records from '../shows.json';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();
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
            navigate(`/search/${searchValue}`);
        }
    }

    return (
        <>
            <nav>
                <Link to='/'><h1 className='font-bold text-4xl'>Inferno</h1></Link>
                <div className='search'>
                    <input type="text" onChange={(e) => searchIt(e.target.value)} onKeyDown={handleKeyPress} />

                    <Link to={`/search/${searchValue}`}>Search</Link>
                    {navSearch && navSearch.map((element, index) => {
                        return (
                            <div className='searchItems' key={index}>
                                <img src={element.Poster} alt="img" />
                                <div className='searchItemInfo'>
                                    <Link to={`/details/${element.imdbID}`}><h6>{element.Title}</h6></Link>
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