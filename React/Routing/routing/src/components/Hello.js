import React from 'react'
import { useParams } from "react-router";
const Hello = (props) => {
    const{param}=useParams();
    return (
       isNaN(param)?<div>the world is :{param}</div>:<div>the number is :{param}</div>
    )
}

export default Hello
