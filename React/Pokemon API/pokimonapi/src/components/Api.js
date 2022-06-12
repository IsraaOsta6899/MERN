import React,{useState,useEffect} from 'react'

const Api = (props) => {
    const[peoples,setPeoples]=useState([]);
    const getOutput=
        () => {
            fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
                .then(response => response.json())
                .then(response => setPeoples(response.results))

        }
    
    
    
    return (

        <>
            <button type="submit" onClick={getOutput} >click me</button>
            <div>
            {peoples.length > 0 && peoples.map((person, index)=>{
                return (<div key={index}>{person.name}</div>)
            })}
        </div>
        </>
    )
}

export default Api
