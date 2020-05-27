import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { useAuth0 } from "../react-auth0-spa";

function Navigation() {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Navbar.Brand href="/">Five Star Foodies</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
        {isAuthenticated && (
          <Nav.Link href="/saved" >Favorites</Nav.Link>
        )}
          {!isAuthenticated && (
            <Nav.Link eventKey={2} onClick={() => loginWithRedirect({})}>
              Login
            </Nav.Link>
          )}
          {isAuthenticated && (
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
