import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter,
  Switch,
  Route 
} from "react-router-dom";
import Home from './views/Home';
import New from './views/New';
import Edit from './views/Edit';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Switch>
    <Route exact path="/">
      <Home/>
    </Route>
     <Route exact path="/new">
      <New/>
    </Route>
    <Route path="/author/:id/edit">
      <Edit/>
      </Route>
    </Switch>

    
    
      
    </div>
    
    </BrowserRouter>
  );
}

export default App;
