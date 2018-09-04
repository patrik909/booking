import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ChefHat from './../images/logo.svg';

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

    /*state for the hamburger navbar The state
      changes depending if the dropdown is open or not*/

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    const mediaScreen = window.matchMedia('(max-width:768px)');
    /*if the screen matches with the max-width close the navbar when you click on an navitem*/
    if (mediaScreen.matches) {
      this.setState({
        isOpen: !this.state.isOpen,
      });
    }
  }

  render() {
    return (
      <div className="navbarDiv">
        <Navbar light expand="md">
          <NavbarBrand tag={props => <Link to="/" {...props} />}>
            L <img src={ChefHat} alt="Chef Hat" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle}>
            <span className="fa fa-reorder" />
          </NavbarToggler>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink
                  onClick={this.toggle}
                  tag={props => <Link to="/" {...props} />}
                >
                  Home
                  <hr />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  onClick={this.toggle}
                  tag={props => <Link to="/Reservation" {...props} />}
                >
                  Reservation
                  <hr />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  onClick={this.toggle}
                  tag={props => <Link to="/Contact" {...props} />}
                >
                  Contact
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavbarBootstrap;
