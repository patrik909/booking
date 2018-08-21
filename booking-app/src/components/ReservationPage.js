import React, { Component } from 'react';
import Booking from './Booking';

class Reservation extends Component {
  render() {
    return (
      <div>
        <h2>Reservation</h2>
        <Booking />
      </div>
    );
  }
}

export default Reservation;
