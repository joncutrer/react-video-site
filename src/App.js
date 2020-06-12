import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import Home from "./components/Home.js";
import About from "./components/About.js";
import News from "./components/News.js";
import Videos from "./components/Videos.js";

import "./styles.css";

// console.log(getVideoById("DLX62G4lc44"));

export default function App() {
  return (
    <Router>
      <div className="App">
        <h1>React Router Test</h1>
        <p class="subtitle">
          This code example demostrates how to use <code>react-router-dom</code>{" "}
          in your React app.
        </p>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/news">News</Link>
            </li>
            <li>
              <Link to="/videos">Videos</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact={true} path="/">
            <Home />
          </Route>
          <Route path="/news">
            <News />
          </Route>
          <Route path="/videos">
            <Videos />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
