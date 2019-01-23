import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import Routes from "../../../src/Routes";
import "./Navigationbar.css";

export default class Navigationbar extends Component {
  render() {
    return (
      <div className="Navigationbar">
        <Navbar inverse  collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <Link to="/">Digital Cloud Service</Link>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                    <LinkContainer to="/services">
                        <NavItem>Services</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/articles">
                        <NavItem>Articles</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/about">
                        <NavItem>About</NavItem>
                    </LinkContainer>                
                </Nav>
                <Nav pullRight>
                    <LinkContainer to="/signup">
                        <NavItem>Signup</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/login">
                        <NavItem>Login</NavItem>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
            <Routes />
        </div>
    );
  }
}
