import './App.css';
import Main from './views/Main';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Display from './views/Display';
import Edit from './views/Edit';
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
