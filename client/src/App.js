import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from './components/pages/Search';
import Login from './components/pages/Login';
// import NavBar from './components/NavBar';
import Nav from './components/Navbars/Navbarsexamples';
import './App.css';
// import IndexHeader from './components/Headers/IndexHeader';

import { useAuth0 } from "./react-auth0-spa";

// react-bootstrap css (required)
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <header>
        <Router>
          <Nav />
          {/* <NavBar /> */}
          {/* <IndexHeader /> */}
          <Route exact path="/" component={Search} />
        </Router>


      </header>
    </div>
  );
}



// function App() {
//   return (
//     <Router>
//     <div>
//       <Nav />
//       <Route exact path="/" component={Search} />
//       <Route exact path="/Login" component={Login} />
//     </div>
//   </Router>
//   );
// }

export default App;
