import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import "./App.css";

function Head(props) {
  return (
    <div id="wrapper">
      <ReactBootStrap.Navbar
        collapseOnSelect
        expand="lg"
        bg="transparent"
        variant="light"
        id="nav"
      >
        <ReactBootStrap.Navbar.Brand href="#home" id="brand">
          RENEGADES
        </ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootStrap.Nav className="ml-auto" id="nav-el">
            <ReactBootStrap.Nav.Link id="home" onClick={props.handleUp}>
              HOME
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link id="abouts" onClick={props.handleUp}>
              ABOUT
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link id="nearby" onClick={props.handleUp}>
              NEARBY
            </ReactBootStrap.Nav.Link>
          </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
    </div>
  );
}
export default Head;
