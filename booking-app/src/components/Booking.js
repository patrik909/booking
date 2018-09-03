import React, { Component } from 'react';
import BookingDetails from './parts/BookingDetails.js';
import BookingGuestDetails from './parts/BookingGuestDetails.js';
import BookingSubmitBooking from './parts/BookingSubmitBooking.js';
import BookingSubmitted from './parts/BookingSubmitted.js';

class BookingPage extends Component {
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

  /** --- Booking Details --- **/

  getTime = time => {
    this.setState({ time });
    console.log(time);
  };

  getDate = date => {
    this.setState({ date });
    console.log(date);
  };

  setAmountOfGuests = event => {
    this.setState({ amountOfGuests: event.target.value });
    console.log(event.target.value);
  };

  /** ----- Guest Details----- **/

  submitBookingDetails = event => {
    this.state.amountOfGuests && this.state.date
      ? this.setState({ addBookingDiv: 'guestDetails' })
      : //felmeddelande
        null;
  };

  setGuestDetails = event => {
    event.preventDefault();
    /*if one of the fields are 
   empty an error message will be displayed */
    if (this.state.firstName === '') {
      this.setState({ errorName: 'Please enter your name!' });
    }
    if (this.state.lastName === '') {
      this.setState({ errorLastName: 'Please enter your last name!' });
    }
    if (this.state.email === '' && !this.state.email.includes('@')) {
      this.setState({ errorEmail: 'Please enter your email!' });
    }
    if (this.state.phoneNumber === '') {
      this.setState({ errorPhoneNumber: 'Please enter your phone number!' });
    } else {
      this.setState({ addBookingDiv: 'submitBooking' });
    }
  };

  backGuestDetails = event => {
    event.preventDefault();
    this.setState({ addBookingDiv: 'bookingDetails' });
    this.setState({ errorName: '' });
    this.setState({ errorLastName: '' });
    this.setState({ errorEmail: '' });
    this.setState({ errorPhoneNumber: '' });
  };

  handleFirstNameInput = event => {
    this.setState({ firstName: event.target.value });
  };

  handleLastNameInput = event => {
    this.setState({ lastName: event.target.value });
  };

  handleEmailInput = event => {
    this.setState({ email: event.target.value });
  };

  handlePhoneNumberInput = event => {
    this.setState({ phoneNumber: event.target.value });
  };

  /** ---- SUBMIT & GDPR ---- **/

  submitBooking = (event, values) => {
    event.preventDefault();

    values = {
      guest: {
        firstname: this.state.firstName,
        lastname: this.state.lastName,
        email: this.state.email,
        phone: this.state.phoneNumber,
      },
      details: {
        numOfGuests: this.state.amountOfGuests,
        // waiting from progress from datepicker.js
        time: this.state.time,
        date: this.state.date,
      },
    };

    fetch('api/booking', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
      .then(response => response.json())
      .then(booking => {
        this.setState({ addBookingDiv: 'bookingSubmitted' });
      })
      .catch(error => {
        console.log(error);
      });
  };

  cancelBooking = event => {
    this.setState({ amountOfGuests: '' });
    this.setState({ firstName: '' });
    this.setState({ lastName: '' });
    this.setState({ email: '' });
    this.setState({ phoneNumber: '' });
    this.setState({ addBookingDiv: 'bookingDetails' });
  };

  render() {
    return (
      <div id="BookingWrapper" className="container">
        {this.state.addBookingDiv === 'bookingDetails' ? (
          <BookingDetails
            getDate={this.getDate}
            getTime={this.getTime}
            setAmountOfGuests={this.setAmountOfGuests}
            submitBookingDetails={this.submitBookingDetails}
          />
        ) : this.state.addBookingDiv === 'guestDetails' ? (
          <BookingGuestDetails
            handleFirstNameInput={this.handleFirstNameInput}
            handleLastNameInput={this.handleLastNameInput}
            handleEmailInput={this.handleEmailInput}
            handlePhoneNumberInput={this.handlePhoneNumberInput}
            backGuestDetails={this.backGuestDetails}
            setGuestDetails={this.setGuestDetails}
            errorName={this.state.errorName}
            errorLastName={this.state.errorLastName}
            errorEmail={this.state.errorEmail}
            errorPhoneNumber={this.state.errorPhoneNumber}
          />
        ) : this.state.addBookingDiv === 'submitBooking' ? (
          <BookingSubmitBooking
            cancelBooking={this.cancelBooking}
            submitBooking={this.submitBooking}
            name={this.state.firstName + ' ' + this.state.lastName}
            email={this.state.email}
            phone={this.state.phoneNumber}
          />
        ) : this.state.addBookingDiv === 'bookingSubmitted' ? (
          <BookingSubmitted firstName={this.state.firstName} />
        ) : null}
      </div>
    );
  }
}
export default BookingPage;
