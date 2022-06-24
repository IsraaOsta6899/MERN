import axios from 'axios'
import React, { useState } from 'react'
import { Link ,useParams} from 'react-router-dom'

const Status = (props) => {
    const [status,setStatus]=useState([0,0,0])
    const {playersList,setPlayersList}=props
    const {id}=useParams()
    const span=3
    const red= {
        backgroundColor: 'red',      
    }
    const green={
        backgroundColor: 'green',      
    }
    const yellow={
        backgroundColor: 'yellow',      

    }
    const changeStatus=(state,playerId,name,position,index)=>{
        if(state ==0){
            setStatus([1,0,0])
            playersList[index].status=status
            setPlayersList(playersList)
        }else if(state==1){
            setStatus([0,1,0])
            playersList[index].status=status
            setPlayersList(playersList)
        }
        else {
            setStatus([0,0,1])
            playersList[index].status=status
            setPlayersList(playersList)
        }
        axios.put('http://localhost:8000/api/player/' + playerId, {
            name,
            position,
            status
        }
        )

        setPlayersList([...playersList])

    }
    return (
        <>
        <div>
            <h1>Player Status - Game {id}</h1>
            <Link to="/status/game/1">Game1</Link> | 
            <Link to="/status/game/2">Game2</Link> | 
            <Link to="/status/game/3">Game3</Link>
        </div>
        <table>
            <thead>
                <th>Name :</th>
                <th>Actions :</th>
            </thead>
            <tbody>
            {(() => {
        switch (id) {
          case '1':
            return <>{ playersList.map( (player, i) => 
            
                <tr>
                    <td>{ player.name }</td>
                    <td colSpan={span}>
                        {player.status[0]==1?<button style={green} onClick={()=>changeStatus(0,player._id,player.name,player.position,i)}>Playing</button>:<button onClick={()=>changeStatus(0,player._id,player.name,player.position,i)} >Playing</button>}
                        {player.status[1]==1?<button style={red} onClick={()=>changeStatus(1,player._id,player.name,player.position,i)}>not playing</button>:<button className='' onClick={()=>changeStatus(1,player._id,player.name,player.position,i)}>not playing</button>}
                        {player.status[2]==1?<button style={yellow} onClick={()=>changeStatus(2,player._id,player.name,player.position,i)}>not in match</button>:<button className='' onClick={()=>changeStatus(2,player._id,player.name,player.position,i)}>not in match</button>}
                    </td>               
                </tr>) 
            }</>
          
            return null
        }
      })()}
            
            

                
            </tbody>

        </table>
        </>
    )
}

export default Status
