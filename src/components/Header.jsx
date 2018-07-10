import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { Navbar, NavItem, Nav } from 'react-bootstrap';

class Header extends Component {
  render() {

    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/content">Company Name</Link>

          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1}>
            <Link to="/">Home</Link>
          </NavItem>
          <NavItem eventKey={2} href="/aboutUs">
            About Us
            </NavItem>
          <NavItem eventKey={3} href="/contactUs">
            Contact Us
            </NavItem>
          <NavItem eventKey={4}>
            <Link to="adminTab">admin</Link>
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default Header;