import logo from './logo.svg';
import './App.css';
import AddComponent from './components/AddComponent.js';
import {useState} from 'react';
import Display from './components/Display';

function App() {

  const[allTasks,setAllTasks]=useState([]);
  const addNewTask=(newTask)=>{
    setAllTasks(allTasks=>[...allTasks,newTask])
  }
  return (
    <div className="App">
      <AddComponent addTa={addNewTask}/>
      <Display tasks={allTasks} fun={setAllTasks}/>
    </div>
  );
}

export default App;
