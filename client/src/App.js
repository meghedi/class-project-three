import React, {useContext} from "react";
import {auth0Context} from "./contexts/Auth0Context";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from "./components/pages/Search";
import Saved from "./components/pages/Saved";
import Navigation from "./components/Navigation";

import "./App.css";

// react-bootstrap css (required)
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const {
    user,
  } = useContext(auth0Context);

  return (
    <div className="App">
      <header>
        <Navigation />
        <Router>
          <Route exact path="/" component={Search} />
          {user ? (
          <Route exact path="/saved" component={Saved} />
          ): (
            null
          )}
        </Router>
      </header>
    </div>
  );
}

export default App;
