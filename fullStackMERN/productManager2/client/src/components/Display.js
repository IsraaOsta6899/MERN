import React ,{useState,useEffect}from 'react'
import { useParams } from "react-router";
import axios from 'axios';

const Display = (props) => {
    const{id}=useParams()
    const [product,setProduct]=useState({})
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/product/${id}`)
        .then(product=>setProduct(product.data))
    },[id])
    return (
        <div>
            <ul>
                <li>Title:{product.title}</li>
                <li>Price:{product.price}</li>
                <li>Description:{product.description}</li>

            </ul>
            

        </div>
    )
}

export default Display
