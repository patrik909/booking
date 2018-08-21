import React, { Component } from 'react';
import Booking from './Booking';

class Reservation extends Component {
  render() {
    return (
      <div className="reservation-wrapper">
        <div className="jumbotron  jumbotron-fluid reservation-jumbo">
          <div className="container">
            <h1 className="display-4">Reservation</h1>
            <p className="lead">Join in and enjoy the dining experience</p>
          </div>
        </div>

        <Booking />
      </div>
    );
  }
}

export default Reservation;
