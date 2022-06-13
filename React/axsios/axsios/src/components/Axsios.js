import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Axsios = props => {
    const [pokimons, setPokimons] = useState([]);
    
    const displayPokimons=()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=100&offset=1')
        .then(response=>{setPokimons(response.data.results)
            console.log(response.data.results)
        })
    }
    return(
        <>
        <button onClick={displayPokimons}>Click Me !</button>
        <div>
            {pokimons.length > 0 && pokimons.map((pokimon, index)=>{
                return (<div key={index}>{pokimon.name}</div>)
            })}
        </div>
        </>
    )
}
export default Axsios