import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/Contact">Contact</Link>
                </li>
                <li>
                  <Link to="/Reservation">Reservation</Link>
                </li>
              </ul>
             </nav>
             </div>

        );
    }
}

export default Navbar;
