import React, { Component } from 'react';
import BookingDetails from '../parts/BookingDetails.js';
import BookingGuestDetails from '../parts/BookingGuestDetails.js';

class AdminCreateBooking extends Component {
  state = {
    /** --- Booking Details --- **/
    amountOfGuests: '',
    time: '',
    date: '',
    /** --- Guest Details --- **/
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    /** --- Error Messages --- **/
    errorName: '',
    errorLastName: '',
    errorEmail: '',
    errorPhoneNumber: '',
    /** --- GDPR Details --- **/
    submitBoxClass: 'hide',
    addBookingDiv: 'bookingDetails',
  };
  render() {
    return (
      <div id="adminCreateBooking" className="container">
        <div className="row">
          <div className="col-6">
            <BookingDetails />
          </div>
          <div className="col-6">
            <BookingGuestDetails />
          </div>
        </div>
      </div>
    );
  }
}

export default AdminCreateBooking;
