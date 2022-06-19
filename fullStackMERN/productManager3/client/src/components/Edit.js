import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams ,useHistory} from "react-router-dom";
    
const Edit = (props) => {
    const[title,setTitle]=useState("")
    const [price,setPrice]=useState("");
    const[description,setDescription]=useState("")
    const {id}=useParams()
    const history=useHistory()
    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);

            })
    }, [id]);
    const updateProduct=(e,id)=>{
        e.preventDefault();
        axios.put('http://localhost:8000/api/product/' + id, {
            title,
            price,
            description
        })
            .then(res => console.log(res))
            .catch(err => console.error(err));
            history.push('/')

    }
    return (
        <form onSubmit={(e)=>updateProduct(e,id)}>
            <p>
                <label>Title</label><br/>
                <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/>
            </p>
            <p>
                <label>Price</label><br/>
                <input type="text" onChange={(e)=>setPrice(e.target.value)} value={price}/>
            </p>
            <p>
                <label>Description</label><br/>
                <input type="text" onChange={(e)=>setDescription(e.target.value)} value={description}/>
            </p>
            <input type="submit" value="Create"/>
        </form>
    )
}

export default Edit
