import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams ,useHistory} from "react-router-dom";
import ProductForm from '../components/productForm';
    
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
    const updateProduct=(title,price,description)=>{
      
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
        <ProductForm initialTitle={title} initialPrice={price} initialDescription={description} onSubmitProp={updateProduct} />

    )
}

export default Edit
