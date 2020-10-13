import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import About from './About';
import Test from './Test';
import Depression from './Depression';

// function Hello() {
//   Hello
//   return <div id="hello">hello</div>;
// }

function App() {
  return (
    <Router>
      <div>

        {/* <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/test">Test</Link>
          </li>
          <li>
            <Link to="/depression">Depression</Link>
          </li>
        </ul> */}

        <Switch>
          <Route path="/about" children={<About />} />
          <Route path="/test/:id" component={Test} />
          <Route path="/depression/:id" component={Depression} />

        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
