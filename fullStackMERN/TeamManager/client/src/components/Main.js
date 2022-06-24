import React from 'react'
import { Link } from 'react-router-dom'

const Main = (props) => {
    const divStyle = {
        backgroundColor: 'gray',
        width:'100%',
        height:'10%',
        textAlign:'center',
        paddingTop: '2%',
        
      }
      const fontStyle = {
        fontFamily: 'cursive',
        fontSize: 'large',
        fontWeight: 'bolder',
        margin:'10px'

        
      }
    return (
        <div style={divStyle} >
           
            <Link  to ="/players/list" style={fontStyle}>Manage Players </Link> |   
            <Link to ="/status/game/1" style={fontStyle}>Manage Player Status</Link>
           
        
           
        </div>
    )
}

export default Main
