import React from 'react'
import { useParams } from "react-router";
const HelloWithStyle = (props) => {
    const{world,tcolor,bcolor}=useParams();
    return (
        <div style={{color:tcolor,backgroundColor:bcolor}}>
            {world}
            
        </div>
    )
}

export default HelloWithStyle
