import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';
function App() {
  return (
    <div className="App">
      <div className="App">
        <PersonCard firstName="Doe" lastName="Jane" age={45} hairColor="Black"/>
    </div>
    <div className="App">
        <PersonCard firstName="Smith" lastName="John" age={88} hairColor="Brown"/>
    </div>
    <div className="App">
        <PersonCard firstName="Fillmore" lastName="Millard" age={50} hairColor="Brown"/>
    </div>
    <div className="App">
        <PersonCard firstName="Smith" lastName="Maria" age={62} hairColor="Brown"/>
    </div>
    </div>
  );
}

export default App;
