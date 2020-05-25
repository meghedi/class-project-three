import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from "./components/pages/Search";
import Saved from "./components/pages/Saved";
import Navigation from "./components/Navigation";
import "./App.css";

// react-bootstrap css (required)
import "bootstrap/dist/css/bootstrap.min.css";

const {
  isLoading,
  user,
  loginWithRedirect,
  logout,
  getTokenSilently,
} = useContext(auth0Context);

function App() {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <header>
        <Router>
          <Navigation />
          <Route exact path="/" component={Search} />
          <Route exact path="/saved" component={Saved} />
        </Router>
      </header>
    </div>
  );
}

export default App;
