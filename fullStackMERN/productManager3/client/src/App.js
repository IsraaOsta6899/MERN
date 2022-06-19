import './App.css';
import Main from './Main';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Display from './components/Display';
import Edit from './components/Edit';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Switch>
    <Route exact path="/">
      <Main/>
    </Route>
    <Route path="/product/:id/edit">
      <Edit/>
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
