import React ,{useState,useEffect}from 'react'
import { useParams ,useHistory} from "react-router";
import axios from 'axios';

const Display = (props) => {
    const{id}=useParams()
    const { removeFromDom } = props;
    const history=useHistory()
    const [product,setProduct]=useState({})
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/product/${id}`)
        .then(product=>setProduct(product.data))
    },[id])
    const deleteThisProduct=(id)=>{
        axios.delete(`http://localhost:8000/api/product/${id}`)
            .then(res => {
                removeFromDom(product._id)
            })
            .catch(err => console.error(err));
            history.push('/')
    }
    const UpdateThisProduct=(id)=>{

            history.push(`/product/${id}/edit`)
    }
    return (
        <div>
            <ul>
                <li>Title:{product.title}</li>
                <li>Price:{product.price}</li>
                <li>Description:{product.description}</li>
                <button onClick={(e)=>deleteThisProduct(product._id)}>Delete</button>
                <button onClick={(e)=>UpdateThisProduct(product._id)}>Edit</button>

            </ul>
            

        </div>
    )
}

export default Display
