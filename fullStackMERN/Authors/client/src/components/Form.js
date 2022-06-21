import React, { useState } from 'react'
import { useHistory} from "react-router-dom";

const Form = (props) => {
    const { name , onSubmitProp,errors } = props;
    const history=useHistory()
    const[authorName,setAuthorName]= useState(name)
    const onSubmitHandler=(e)=>{
        console.log(authorName)
        e.preventDefault()
        onSubmitProp(authorName)
        if(errors.length==1){
            history.push("/")
        }


    }
    return (
        
            <form onSubmit={(e)=>onSubmitHandler(e)}>
                
               
                <div className="mb-3">
                    <p>{authorName}</p>
                    <label  className="form-label">Name</label>
                    <input   type="text"  onChange={(e)=>{setAuthorName(e.target.value)} } value={authorName || name}/>
                    {errors.map((err, index) =><p className='text-danger'>{err}</p>
                )}
                </div>
                <input type="submit" value="Create"/>
            </form>
        
    )
}

export default Form
