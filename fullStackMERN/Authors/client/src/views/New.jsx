import React ,{useState}from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    
    Link 
  } from "react-router-dom";
import axios from 'axios';
import Form from '../components/Form';


const New = (props) => {
    const [errors, setErrors] = useState([]); 

const createAuthor=(name)=>{
    axios.post(`http://localhost:8000/api/new`,{name})
    .then(res=>console.log(res))
    .catch(err=>{
        const errorResponse = err.response.data.errors; // Get the errors from err.response.data
        const errorArr = []; // Define a temp error array to push the messages in
        for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
            errorArr.push(errorResponse[key].message)
        }
        // Set Errors
        setErrors(errorArr);
    }) 
}
    return (
        <div>
            <h1> Favorite Authors</h1>
            <Link to="/">Home</Link>
            <p className="text-warning">add new author:</p>
            <Form name="" onSubmitProp={createAuthor} errors={errors}/>

           
            
        </div>
    )
}

export default New
