import Week1 from "./components/week1";
import Week2 from "./components/week2";

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Homepage = () => (
  <nav>
    <h1>Welcome to Interaction Design</h1>
      <ul>
        <li>
          <Link to="/week-1">Week 1</Link>
        </li>
        <li>
          <Link to="/week-2">Week 2</Link>
        </li>
      </ul>
    </nav>
);

function App() {
  return  (
    <Router>
      <Switch>
          
          <Route path="/week-1">
            <Week1 />
          </Route>
          <Route path="/week-2">
            <Week2 />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
      </Switch>    
    </Router>
  )
}

export default App;