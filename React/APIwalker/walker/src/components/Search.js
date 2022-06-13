import React ,{useState}from 'react'
import { useHistory } from "react-router-dom";

const Search = (props) => {
    const[world,setWorld]=useState("");
    const[id,setId]=useState("");
    const history = useHistory();
    const handelText=(e)=>{
        setWorld(e.target.value);
    }
    const handelID=(e)=>{
        setId(e.target.value);
    }
    const sendData=(e)=>{
        e.preventDefault();
        
        history.push("/"+world+"/"+id)

    }

    return (
        <form onSubmit={(e)=>sendData(e)}>
            
            <label>Search For:</label>/
            <select  onChange={e => setWorld(e.target.value)}>
                
                    <option key={1} value="people">people</option>
                    <option key={2} value="planets">planets</option>

              
            </select>
            <span>{                     }</span>
            <label>ID:</label>
            <input type="text" onChange={(e)=>handelID(e)}></input>
            <input type="submit" value="Search"/>


            
        </form>
    )
}

export default Search
