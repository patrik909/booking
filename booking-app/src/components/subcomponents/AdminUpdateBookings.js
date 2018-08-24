import React, { Component } from 'react';
import DayPicker from '@kupibilet/react-day-picker';
import '@kupibilet/react-day-picker/lib/style.css';
import InputField from '../parts/InputField.js';
import Button from '../parts/Button.js';

class AdminUpdateBookings extends Component {
  state = {};

  closeUpdateDiv = event => {
    event.preventDefault();
    this.props.closeUpdateDiv();
  };

  render() {
    return (
      <div id="adminUpdateDiv" className={this.props.updateDivClass}>
        <div id="customersBookingWrapper" className="row">
          <div id="customersBookingDetails" className="col-md-5">
            <h3>Current details</h3>
            <p>
              <span>Name</span>
            </p>
            <p>{this.props.selectedBookingName}</p>
            <p>
              <span>Phone</span>
            </p>
            <p>{this.props.selectedBookingPhone}</p>
            <p>
              <span>Email</span>
            </p>
            <p>{this.props.selectedBookingEmail}</p>
            <p>
              <span>Number of Guests</span>
            </p>
            <p>{this.props.selectedBookingNumOfGuests}</p>
            <p>
              <span>At:</span>
            </p>
            <p>
              {this.props.selectedBookingTime} |{this.props.selectedBookingDate}
            </p>
          </div>
          <div className="col-md-7">
            <h3>Update details</h3>
            <DayPicker />
          </div>
        </div>
        <div id="adminUpdateButtons">
          <Button onClick={this.closeUpdateDiv} innerText={'Cancel'} />
          <Button onClick={this.closeUpdateDiv} innerText={'Update'} />
        </div>
      </div>
    );
  }
}

export default AdminUpdateBookings;
