import React ,{useState,useEffect}from 'react'
import { useParams ,useHistory} from "react-router";
import axios from 'axios';
import DeleteButton from '../components/DeleteButton';

const Display = (props) => {
    const history=useHistory()
    const{id}=useParams()
    const [product,setProduct]=useState({})
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/product/${id}`)
        .then(product=>setProduct(product.data))
    },[product._id])
    
    const UpdateThisProduct=(id)=>{

            history.push(`/product/${id}/edit`)
    }
    return (
        <div>
            <ul>
                <li>Title:{product.title}</li>
                <li>Price:{product.price}</li>
                <li>Description:{product.description}</li>
                <DeleteButton productId={product._id} successCallback={()=>{history.push('/')}} />
                <button onClick={(e)=>UpdateThisProduct(product._id)}>Edit</button>

            </ul>
            

        </div>
    )
}

export default Display
