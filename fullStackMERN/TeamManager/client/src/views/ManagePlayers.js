import React from 'react'
import {Link} from 'react-router-dom'
import Add from '../components/Add'
import List from '../components/List'
const ManagePlayers = ({children}) => {
    const divStyle = {
        backgroundColor: 'white',
        width:'80%',
        height:'80%',
        textAlign:'left',
        paddingTop: '2%',
        marginLeft:'10%',
        border:'1px solid black'
        
      }
      const fontStyle = {
        fontFamily: 'cursive',
        fontSize: 'large',
        fontWeight: 'bolder',
        margin:'10px'

        
      }
    return (
        
        <div style={divStyle} >
           
            <Link to ="/players/list" style={fontStyle}>List </Link> |   
            <Link to ="/players/addPlayer" style={fontStyle}>Add Player</Link>
            {children}

           

        </div>
        
    )
}

export default ManagePlayers
