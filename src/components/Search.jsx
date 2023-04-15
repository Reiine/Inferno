import React, { useState, useEffect } from 'react';
import records from '../shows.json'
import { useParams } from 'react-router-dom';
import Shows from './Shows';

function Search() {
    const [searchLinkResult, setSearchLinkResult] = useState(records)
    const [value, setValue]= useState(records)
    const {link} = useParams();

    useEffect(() => {
        const filteredRecords = records.filter((data) => {
            return data.Title.toLowerCase().includes(link.toLowerCase())
        })
        if (filteredRecords.length===0){
            setValue(null)
            setSearchLinkResult(records)
        }
        else{
            setSearchLinkResult(filteredRecords)
        }
    }, [link])


    return (
        <div className='searchPage'>
            {value === null ?<div>
                    <h4>No result found for: {link}</h4>
                    <h4>Browse our other movies: </h4>
                </div>:
                <h4>Here are results for: {link}</h4>
            }
            
            {searchLinkResult.map((element, index) => {
                return (
                    <Shows
                        key={index}
                        Poster={element.Poster}
                        imdbID={element.imdbID}
                        Title={element.Title}
                        Year={element.Year}
                    />
                )

            })}
        </div>
    );
}

export default Search;
