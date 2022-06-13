import React,{useState,useEffect} from 'react'
import { useParams } from "react-router";
import axios from 'axios';



const DisplayPerson = (props) => {
    const{id}=useParams();
    const[person,setPerson]=useState({})
     useEffect(
        () => {
            axios.get('https://swapi.dev/api/people/'+id)
        .then(response=>{setPerson(response.data)
            console.log(response.data)
        })
            
        }
        ,[id])
    return (
        <div>
            <h1>Name :{person.name}</h1>
            <h3>Height :{person.height}</h3>
            <h3>Mass :{person.mass}</h3>
            <h3>Hair Color :{person.hair_color}</h3>
            <h3>Skin Color :{person.skin_color}</h3>

            
        </div>
    )
}

export default DisplayPerson;
