import './App.css';
import Tabs from './components/Tabs';
import {useState} from 'react';
import Contant from './components/Contant';

function App() {
  const tabss=["Tab1","Tab2","Tab3","Tab4"]
  const [content,setContent]=useState("")
  return (
    <div className="App">
      <Tabs tabs={tabss} fun={setContent}/>
      <Contant text={content}/>
      
    </div>
    

  );
}

export default App;
