import React, {useContext} from "react";
import { Navbar, Nav } from "react-bootstrap";
import {auth0Context} from "../contexts/Auth0Context";
function Navigation() {
 
  const {
    isLoading,
    user,
    loginWithRedirect,
    logout,
    getTokenSilently,
  } = useContext(auth0Context);

   console.log(user);
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Navbar.Brand href="/">Five Star Foodies</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
        {user && (
          <Nav.Link href="/saved" >Favorites</Nav.Link>
        )}
          {!user && (
            <Nav.Link eventKey={2} onClick={() => loginWithRedirect({})}>
              Login
            </Nav.Link>
          )}
          {user && (
            <Nav.Link eventKey={2} onClick={() => logout()}>
              Log out
            </Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
