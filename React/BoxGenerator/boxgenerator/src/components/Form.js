import React ,{useState }from 'react'

const Form = props => {
    var colors=props.colors
    const[color,setColor]=useState("")

    const handelSubmit=(e)=>{
        e.preventDefault();
       
        props.addNewColor(color)
        

    }
    

   

    return (
        // 
        <form onSubmit={handelSubmit} >
            <label>Color :</label>
            <input type="text" onChange={e=>setColor(e.target.value)}></input>
            <input type="submit" value="Send"></input>
            </form>
        
    )
}



export default Form
