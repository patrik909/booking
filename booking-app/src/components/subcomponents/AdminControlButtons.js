import React, { Component } from 'react';
import Button from '../parts/Button.js';

class AdminControlButtons extends Component {
  openCreateBooking = () => {
    this.props.manageAdminPage('openCreateBooking');
  };

  openViewUpdateBooking = () => {
    this.props.manageAdminPage('openViewUpdateBooking');
  };

  render() {
    return (
      <div id="adminControlButtons" className="row">
        <div className="col-md-6">
          <Button
            innerText="Create Booking"
            onClick={this.openCreateBooking}
            className="btn btn-primary btn-lg"
          />
        </div>
        <div className="col-md-6">
          <Button
            innerText="View/Update Bookings"
            onClick={this.openViewUpdateBooking}
            className="btn btn-primary btn-lg"
          />
        </div>
      </div>
    );
  }
}

export default AdminControlButtons;
