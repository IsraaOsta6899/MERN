import React ,{useEffect,useState}from 'react'
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    
    Link 
  } from "react-router-dom";
import axios from 'axios';
const Home = (props) => {
    const history=useHistory()
    const[Authors,setAuthors]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:8000/api/authors")
        .then(Authors=>setAuthors(Authors.data))
    },[Authors])
const deleteAuthor=(id)=>{
    axios.delete(`http://localhost:8000/api/authors/${id}`)
    .then(res=>console.log(res))
}
const pushToAthorLink=(id)=>{
    history.push('/author/'+id+'/edit')
}
    return (
        <div >
            <h1> Favorite Authors</h1>
            <Link to="/new">add an Author</Link>
            <p className="text-warning">we have qouts by:</p>
            <div style={{width:"50%" }} className="m-3 p-3">
            <table className="table table-bordered">
                <thead>
                    <tr>
                    <td>Author</td>
                    <td className=''>Action Availabel</td>
                    </tr>
                </thead>
                <tbody>
                    {Authors.map( (author, i) => 
                        <tr key={i}>
                            <td>{ author.name }</td>
                            <td>
                                <button className='btn btn-secondary'onClick={()=>pushToAthorLink(author._id)} >Edit</button> | 
                                <button className="btn btn-info" onClick={()=>deleteAuthor(author._id)}>Delete</button>
                            </td>
                
                         </tr> )}                
                    
                    
                </tbody>
            </table>
            </div>

        </div>
    )
}

export default Home
