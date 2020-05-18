import React from "react";
// reactstrap components
import {
  UncontrolledCollapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from "reactstrap";
// core components

function Example(){
  return (
    <>
      <Navbar className="bg-primary" expand="lg">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
              Primary color
            </NavbarBrand>
            <button
              className="navbar-toggler"
              id="example-navbar-primary"
              type="button"
            >
              <span className="navbar-toggler-bar bar1"></span>
              <span className="navbar-toggler-bar bar2"></span>
              <span className="navbar-toggler-bar bar3"></span>
            </button>
          </div>
          <UncontrolledCollapse navbar toggler="#example-navbar-primary">
            <Nav className="ml-auto" navbar>
              <NavItem className="active">
                <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                  <i className="now-ui-icons objects_globe"></i>
                  <p>Discover</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                  <i className="now-ui-icons users_circle-08"></i>
                  <p>Profile</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                  <i className="now-ui-icons ui-1_settings-gear-63"></i>
                  <p>Settings</p>
                </NavLink>
              </NavItem>
            </Nav>
          </UncontrolledCollapse>
        </Container>
      </Navbar>
      <Navbar className="bg-info" expand="lg">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
              Info color
            </NavbarBrand>
            <button
              className="navbar-toggler"
              id="example-navbar-info"
              type="button"
            >
              <span className="navbar-toggler-bar bar1"></span>
              <span className="navbar-toggler-bar bar2"></span>
              <span className="navbar-toggler-bar bar3"></span>
            </button>
          </div>
          <UncontrolledCollapse navbar toggler="#example-navbar-info">
            <Nav className="ml-auto" navbar>
              <NavItem className="active">
                <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                  <i className="now-ui-icons objects_globe"></i>
                  <p>Discover</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                  <i className="now-ui-icons users_circle-08"></i>
                  <p>Profile</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                  <i className="now-ui-icons ui-1_settings-gear-63"></i>
                  <p>Settings</p>
                </NavLink>
              </NavItem>
            </Nav>
          </UncontrolledCollapse>
        </Container>
      </Navbar>
      <Navbar className="bg-success" expand="lg">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
              Success color
            </NavbarBrand>
            <button
              className="navbar-toggler"
              id="example-navbar-success"
              type="button"
            >
              <span className="navbar-toggler-bar bar1"></span>
              <span className="navbar-toggler-bar bar2"></span>
              <span className="navbar-toggler-bar bar3"></span>
            </button>
          </div>
          <UncontrolledCollapse navbar toggler="#example-navbar-success">
            <Nav className="ml-auto" navbar>
              <NavItem className="active">
                <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                  <i className="now-ui-icons objects_globe"></i>
                  <p>Discover</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                  <i className="now-ui-icons users_circle-08"></i>
                  <p>Profile</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                  <i className="now-ui-icons ui-1_settings-gear-63"></i>
                  <p>Settings</p>
                </NavLink>
              </NavItem>
            </Nav>
          </UncontrolledCollapse>
        </Container>
      </Navbar>
      <Navbar className="bg-warning" expand="lg">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
              Warning color
            </NavbarBrand>
            <button
              className="navbar-toggler"
              id="example-navbar-warning"
              type="button"
            >
              <span className="navbar-toggler-bar bar1"></span>
              <span className="navbar-toggler-bar bar2"></span>
              <span className="navbar-toggler-bar bar3"></span>
            </button>
          </div>
          <UncontrolledCollapse navbar toggler="#example-navbar-warning">
            <Nav className="ml-auto" navbar>
              <NavItem className="active">
                <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                  <i className="now-ui-icons objects_globe"></i>
                  <p>Discover</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                  <i className="now-ui-icons users_circle-08"></i>
                  <p>Profile</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                  <i className="now-ui-icons ui-1_settings-gear-63"></i>
                  <p>Settings</p>
                </NavLink>
              </NavItem>
            </Nav>
          </UncontrolledCollapse>
        </Container>
      </Navbar>
      <Navbar className="bg-danger" expand="lg">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
              Danger color
            </NavbarBrand>
            <button
              className="navbar-toggler"
              id="example-navbar-danger"
              type="button"
            >
              <span className="navbar-toggler-bar bar1"></span>
              <span className="navbar-toggler-bar bar2"></span>
              <span className="navbar-toggler-bar bar3"></span>
            </button>
          </div>
          <UncontrolledCollapse navbar toggler="#example-navbar-danger">
            <Nav className="ml-auto" navbar>
              <NavItem className="active">
                <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                  <i className="now-ui-icons objects_globe"></i>
                  <p>Discover</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                  <i className="now-ui-icons users_circle-08"></i>
                  <p>Profile</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                  <i className="now-ui-icons ui-1_settings-gear-63"></i>
                  <p>Settings</p>
                </NavLink>
              </NavItem>
            </Nav>
          </UncontrolledCollapse>
        </Container>
      </Navbar>
      <Navbar className="navbar-transparent" expand="lg">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
              Transparent
            </NavbarBrand>
            <button
              className="navbar-toggler"
              id="example-navbar-transparent"
              type="button"
            >
              <span className="navbar-toggler-bar bar1"></span>
              <span className="navbar-toggler-bar bar2"></span>
              <span className="navbar-toggler-bar bar3"></span>
            </button>
          </div>
          <UncontrolledCollapse navbar toggler="#example-navbar-transparent">
            <Nav className="ml-auto" navbar>
              <NavItem className="active">
                <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                  <i className="now-ui-icons objects_globe"></i>
                  <p>Discover</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                  <i className="now-ui-icons users_circle-08"></i>
                  <p>Profile</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                  <i className="now-ui-icons ui-1_settings-gear-63"></i>
                  <p>Settings</p>
                </NavLink>
              </NavItem>
            </Nav>
          </UncontrolledCollapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Example;