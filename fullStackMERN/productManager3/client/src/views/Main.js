import React, { useEffect, useState } from 'react';
import List from '../components/List';
import axios from 'axios';
import ProductForm from '../components/productForm';
export default () => {
    const[allProducts,setAllProducts]=useState([]);
   


    useEffect(()=>{
        axios.get('http://localhost:8000/api/allProducts')
            .then(response=>{setAllProducts(response.data)
                
            })
    }, [allProducts]);
    const createPerson=(title,price,description)=>{
        axios.post('http://localhost:8000/api/product', {
            title,
            price,
            description
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }
  
    return (
        
        <div>
            <ProductForm initialTitle={""} initialPrice="" initialDescription="" onSubmitProp={createPerson} />
            <hr></hr>
            <List AllProducts={allProducts}/>
        </div>
    )
}