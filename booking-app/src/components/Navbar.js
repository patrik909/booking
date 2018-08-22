import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ChefHat from './../images/chef-hat.svg';

// Reactsrap navbar
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  NavbarBrand,
} from 'reactstrap';

class NavbarBootstrap extends Component {
  constructor(props) {
    super(props);

    /*state for the hamburger navbar the state
      changes depending if the dropdown is open or not*/

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <div className="navbarDiv">
        <Navbar light expand="md">
          <NavbarBrand>
            <Link to="/">
              L <img src={ChefHat} alt="Chef Hat" />
            </Link>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle}>
            {' '}
            <span className="fa fa-reorder" />
          </NavbarToggler>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink>
                  <Link to="/">Home</Link>
                  <hr />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link to="/Reservation">Reservation</Link>
                  <hr />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link to="/Contact">Contact</Link>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        {/*       
        <nav className="navbar navbar-expand-lg">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Reservation">Reservation</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>*/}
      </div>
    );
  }
}

export default NavbarBootstrap;
