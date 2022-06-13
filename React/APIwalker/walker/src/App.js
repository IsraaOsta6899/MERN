import logo from './logo.svg';
import './App.css';
import Search from './components/Search';
import React ,{useState}from 'react';
import DisplayPerson from './components/DisplayPerson';
import DisplayPlants from './components/DisplayPlants';
import {
  BrowserRouter,
  Switch,
  Route,
  Link 
} from "react-router-dom";

function App() {
  

  return (
    <BrowserRouter>
    <div className="App">
      <Search />
    </div>
    <Switch>
      
        
    <Route exact path="/">
        </Route>
        <Route path="/people/:id">
          <DisplayPerson />
        </Route>
        
        
        <Route exact path="/planets/:id">
          <DisplayPlants />
        </Route>
      </Switch>

    </BrowserRouter>
  );
}

export default App;
