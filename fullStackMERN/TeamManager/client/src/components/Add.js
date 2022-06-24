import React ,{useState,useEffect}from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
const Add = (props) => {
    const [name,setName]=useState("")
    const [position,setPosition]=useState("")
    const [status,setStatus]=useState([0,0,0])

    const divStyle = {
        backgroundColor: 'white',
        width:'70%',
        height:'50%',
        textAlign:'left',
        paddingTop: '2%',
        marginLeft:'15%',
        border:'3px solid black',
        marginTop:'7%'
        
      }
    const history=useHistory()
    const addPlayer=(e)=>{
        e.preventDefault()
        setStatus([0,0,0])
        axios.post('http://localhost:8000/api/player',{
            name,
            position,
            status
        }).then(()=>{alert("added sucssesfuly")
        props.setPlayersList([...props.playersList,{name,position,status}])
        
    })
        history.push("/players/list")

    }
    return (
        <div style={divStyle}>
            <form onSubmit={(e)=>addPlayer(e)}>
                <label>Player Name :</label><br></br>
                <input type="text" placeholder='player name ' onChange={(e)=>{setName(e.target.value)}}/><br></br>
                <label>Player Position :</label><br></br>
                <input type="text" placeholder='player position ' onChange={(e)=>setPosition(e.target.value)}/><br></br>
                <input type='submit' value="create"/>
            </form>
        
        </div>
    )
}

export default Add
