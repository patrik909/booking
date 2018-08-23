import React, { Component } from 'react';
import InputField from '../parts/InputField.js';
import Button from '../parts/Button.js';

class AdminUpdateBookings extends Component {
  state = {
    customersName: '',
    customersPhone: '',
    customersEmail: '',
    customersNumOfGuests: '',
    customersBookedTime: '',
    customersBookedDate: '',
  };

  closeUpdateDiv = event => {
    event.preventDefault();
    this.props.closeUpdateDiv();
  };

  render() {
    return (
      <div id="adminUpdateDiv" className={this.props.updateDivClass}>
        <div id="customersBookingDetails">
          <p>{this.props.selectedBookingName}</p>
          <p>{this.props.selectedBookingPhone}</p>
          <p>{this.props.selectedBookingEmail}</p>
          <p>{this.props.selectedBookingNumOfGuests}</p>
          <p>{this.props.selectedBookingDate}</p>
          <p>{this.props.selectedBookingTime}</p>
        </div>
        <Button onClick={this.closeUpdateDiv} innerText={'Cancel'} />
      </div>
    );
  }
}

export default AdminUpdateBookings;
