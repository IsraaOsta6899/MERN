import React from 'react'
import { useHistory } from "react-router-dom";
const List = (props) => {
    const history = useHistory();
    const pushToAnotherLink=(id)=>{
        history.push(`/${id}`)
    }
    return (
        <div>
            <h1>All Products :</h1>
            
            
            { props.AllProducts.map( (item, i) => 
                <div><a  onClick={()=>pushToAnotherLink(item._id)}>{ item.title }</a><br></br></div> ) }
             
        </div>
    )
}

export default List
