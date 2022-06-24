import logo from './logo.svg';
import './App.css';
import {
Link,
BrowserRouter,
Switch,
Route,

}
from 'react-router-dom'
import Main from './components/Main';
import ManagePlayers from './views/ManagePlayers';
import List from './components/List';
import Add from './components/Add';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Status from './components/Status';


function App() {
const [allPlayers,setAllPlayers]=useState([])
useEffect(
  ()=>{
     axios.get('http://localhost:8000/api/allPlayers')
    .then(players=>setAllPlayers(players.data))
    },[])

  return (
    <div className='App'>
      <BrowserRouter>
      <Main/>
      
        <switch>
          <Route exact path="/">
            <div>
              hello
            </div>
          </Route>
        <Route  exact path="/players/list">
          <ManagePlayers >
            <List playersList={allPlayers} setPlayersList={setAllPlayers}/>
          </ManagePlayers >
        </Route>
        <Route  exact path="/players/addPlayer">
          <ManagePlayers >
            <Add setPlayersList={setAllPlayers} playersList={allPlayers}/>          
          </ManagePlayers>
        </Route>
        
       
       <Route exact path="/status/game/:id">
        <Status playersList={allPlayers} setPlayersList={setAllPlayers} />
       
        </Route>
        </switch>
        
      </BrowserRouter>
      </div>
      
      
    
  );
}

export default App;
