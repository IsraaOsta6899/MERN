import React,{useState,useEffect} from 'react'
import { useParams } from "react-router";
import axios from 'axios';


const DisplayPlants = (props) => {
    const{id}=useParams();
    const[plant,setPlant]=useState({})
     useEffect(
        () => {
            axios.get('https://swapi.dev/api/planets/'+id)
        .then(response=>{setPlant(response.data)
            console.log(response.data)
        })
            
        }
        ,[id])
    return (
        <div>
            <h1>Name :{plant.name}</h1>
            <h3>Climate :{plant.climate}</h3>
            <h3>Surface Water :{plant.surface_water?<label>True</label>:<label>No</label>}</h3>
            <h3>Population :{plant.population}</h3>
        </div>
    )
}

export default DisplayPlants;
