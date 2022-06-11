import React,{useState }from'react';

import './App.css';
import Form from './components/Form';
import Boxses from './components/Boxses';


function App() {
  const[allColors,setAllColors]=useState ([]);
  const updateColors = ( newColor ) => {

    setAllColors(allColors=>[...allColors,newColor]  );
}
  return (
    <div className="App">
      <Form  addNewColor={updateColors} colors={allColors} />
      {allColors}
      <Boxses colors1={allColors} />
    </div>
  );
}

export default App;
