import React, { useState } from 'react';
import records from '../shows.json'
import Shows from './Shows';

function Categories() {
    const alphabet =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    const [items, setFilterItems] = useState(records)
    const [letterClicked, setLetter] = useState('')
    const [aval, setA] = useState('')
    const categoryClick = (val)=>{
        var a = records.filter((data)=>{
            return data.Title[0] === val
        })
        setFilterItems(a)
        setA(a)
        setLetter(val)
    }
    return (  
        <>
            <div className='alphabet'>
                <h3 className='cate'>Categories</h3>
                <button onClick={()=>{setFilterItems(records); setLetter('')}}>Reset</button>
                {alphabet.map((element,index)=>{
                    return(
                        <button key = {index} onClick={()=>categoryClick(element)}>{element}</button>
                    )
                })}
            </div>
            {items.map((element,index)=>{
                return(
                    <Shows
                        key={index}
                        Poster={element.Poster}
                        imdbID={element.imdbID}
                        Title={element.Title}
                        Year={element.Year}
                    />
                )
                
            })}
            {aval.length===0 && letterClicked!==''? <div className='noresult'><p>No Result Found</p><p>Sorry, There are no movies starting with letter {letterClicked}</p></div> : null}
            
            
        </>
        

    );
}

export default Categories;