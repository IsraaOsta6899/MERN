import './App.css';
import Main from './Main';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Display from './components/Display';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Switch>
    <Route exact path="/">
      <Main/>
    </Route>
    <Route path="/:id">
      <Display/>
    </Route>
      </Switch>
    </div>
    
    </BrowserRouter>
  );
}

export default App;
