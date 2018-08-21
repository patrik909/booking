import React, { Component } from 'react';
import Button from '../parts/Button.js';

class AdminControlButtons extends Component {
  openCreateBooking = () => {
    this.props.manageAdminPage('openCreateBooking');
  };

  openViewChangeBooking = () => {
    this.props.manageAdminPage('openViewChangeBooking');
  };

  render() {
    return (
      <div id="adminControlButtons">
        <Button innerText="Create Booking" onClick={this.openCreateBooking} />
        <Button
          innerText="View/Change Bookings"
          onClick={this.openViewChangeBooking}
        />
      </div>
    );
  }
}

export default AdminControlButtons;
