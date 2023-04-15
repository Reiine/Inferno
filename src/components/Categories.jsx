import React, { useState } from 'react';
import records from '../shows.json'
import Shows from './Shows';

function Categories() {
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
                <button onClick={()=> categoryClick("A")}>A</button>
                <button onClick={()=> categoryClick("B")}>B</button>
                <button onClick={()=> categoryClick("C")}>C</button>
                <button onClick={()=> categoryClick("D")}>D</button>
                <button onClick={()=> categoryClick("E")}>E</button>
                <button onClick={()=> categoryClick("F")}>F</button>
                <button onClick={()=> categoryClick("G")}>G</button>
                <button onClick={()=> categoryClick("H")}>H</button>
                <button onClick={()=> categoryClick("I")}>I</button>
                <button onClick={()=> categoryClick("J")}>J</button>
                <button onClick={()=> categoryClick("K")}>K</button>
                <button onClick={()=> categoryClick("L")}>L</button>
                <button onClick={()=> categoryClick("M")}>M</button>
                <button onClick={()=> categoryClick("N")}>N</button>
                <button onClick={()=> categoryClick("O")}>O</button>
                <button onClick={()=> categoryClick("P")}>P</button>
                <button onClick={()=> categoryClick("Q")}>Q</button>
                <button onClick={()=> categoryClick("R")}>R</button>
                <button onClick={()=> categoryClick("S")}>S</button>
                <button onClick={()=> categoryClick("T")}>T</button>
                <button onClick={()=> categoryClick("U")}>U</button>
                <button onClick={()=> categoryClick("V")}>V</button>
                <button onClick={()=> categoryClick("W")}>W</button>
                <button onClick={()=> categoryClick("X")}>X</button>
                <button onClick={()=> categoryClick("Y")}>Y</button>
                <button onClick={()=> categoryClick("Z")}>Z</button>
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