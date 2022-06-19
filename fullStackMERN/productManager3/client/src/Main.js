import React, { useEffect, useState } from 'react';
import List from './components/List';
import axios from 'axios';
import ProductForm from './components/productForm';
export default () => {
    const[allProducts,setAllProducts]=useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/allProducts')
            .then(response=>{setAllProducts(response.data)})
    }, [allProducts]);

  
    return (
        
        <div>
            <ProductForm/>
            <hr></hr>
            <List AllProducts={allProducts}/>
        </div>
    )
}