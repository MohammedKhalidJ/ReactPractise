import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import { Navbar, NavItem, Nav } from 'react-bootstrap';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      headerTitle: ['Home', 'About Us', 'Contact Us']
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      headerTitle: ['About', 'Home', 'Location']
    });
  }

  render() {

    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/content">Company Name</Link>

          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="/" onClick={this.handleClick}>
            Home
              </NavItem>
          <NavItem eventKey={2} href="/content" onClick={this.handleClick}>
            Contact
            </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default Header;