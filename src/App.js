
import './App.css';
import React from "react"
import NavigationBar from './NavigationBar.js'
import Home from './Home.js'
import About from './About.js'
import Content from './Content.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <Switch>

          <Route path='/About'>
            <About />
          </Route>

          <Route path='/Content'>
            <Content />
          </Route>

          <Route path='/Home'>
            <Home />
          </Route>

          <Route path='/'>
            
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
