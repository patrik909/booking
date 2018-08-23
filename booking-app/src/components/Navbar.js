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

    /*state for the hamburger navbar The state
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
          <NavbarBrand tag={props => <Link to="/" {...props} />}>
            {/* <Link to="/"> */}L <img src={ChefHat} alt="Chef Hat" />
            {/* </Link> */}
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle}>
            <span className="fa fa-reorder" />
          </NavbarToggler>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={props => <Link to="/" {...props} />}>
                  {/* <Link to="/">Home</Link> */}
                  Home
                  <hr />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={props => <Link to="/Reservation" {...props} />}>
                  {/* <Link  to="/Reservation">Reservation</Link> */}
                  Reservation
                  <hr />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={props => <Link to="/Contact" {...props} />}>
                  {/* <Link to="/Contact">Contact</Link> */}
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
