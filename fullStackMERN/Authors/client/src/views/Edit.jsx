import React, { useEffect, useState } from 'react'
import Form from '../components/Form'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Edit = (props) => {
    const {id}=useParams()
    const[authorName,setName]=useState("")
    const [errors, setErrors] = useState([]); 

    useEffect(
       ()=>{
        let isMounted = true;
        axios.get(`http://localhost:8000/api/getOne/${id}`)
        .then(author=>{  if(isMounted) {setName(author.data.name)}})
        return () => { isMounted = false }; 
        
       } ,[id]
    )
const updateAuthor=(name)=>{
    axios.put('http://localhost:8000/api/author/'+id, {
        name
        })
        .then(console.log("sucsess"))
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
            <div>{authorName}</div>
            <Form name={authorName} onSubmitProp={updateAuthor} errors={errors}></Form>
            
        </div>
    )
}

export default Edit
