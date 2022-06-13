import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Link,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home';
import Hello from './components/Hello';
import HelloWithStyle from './components/HelloWithStyle';
 
function App() {
  return (
    <BrowserRouter>
      
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route exact path="/:param">
          <Hello />
        </Route>
        <Route path="/:world/:tcolor/:bcolor">
          <HelloWithStyle />
        </Route>       
      </Switch>
    </BrowserRouter>
  );
}

export default App;
