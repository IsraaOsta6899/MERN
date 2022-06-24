import axios from 'axios'
import React from 'react'

const List = (props) => {
    const  deletePlayer=(playerId,index)=>{
        var h=window.confirm('are you sure to delete this player?')
        if(h){
        axios.delete(`http://localhost:8000/api/player/${playerId}`)
        .then(console.log("deleted succsessfuly"))
       let afterDelete=props.playersList.splice(index,1)
       console.log(afterDelete)
       console.log()
        props.setPlayersList([...props.playersList])
        }

    }
    return (
        <table>
            <thead>
                <th>Team Name</th>
                <th>Preferd Position</th>
                <th>Actions</th>            
            </thead>
          
            { props.playersList.map( (player, i) => 
                <tr>
                    <td>{ player.name }</td>
                    <td>{ player.position }</td>
                    <button onClick={()=>deletePlayer(player._id,i)}>Delete</button>


                
                </tr>) 
            }

            <tbody>

            </tbody>
        </table>
    )
}

export default List
