import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from './components/pages/Search';
import Login from './components/pages/Login';
import Nav from './components/Nav';
import './App.css';

function App() {
  return (
    <Router>
    <div>
      <Nav />
      <Route exact path="/" component={Search} />
      <Route exact path="/Login" component={Login} />
    </div>
  </Router>
  );
}

export default App;
