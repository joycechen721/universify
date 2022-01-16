import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './Home';
import Header from './Header'
import About from './About'
import Login from './Login'

function App() {
  return (
    <Router>
      <div className="App">

        <Switch>
          <Route path = "/home">
            <Header />
            <Home />
          </Route>

          <Route path = "/about">
            <About />
          </Route>
          
          <Route path = "/login">
            <Login />
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
