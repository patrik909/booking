import React, { Component } from 'react';
import { Button } from 'reactstrap';
import BookingDetailsContent from './parts/BookingDetails.js';
import BookingGuestDetailsContent from './parts/BookingGuestDetails.js';
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
    addBookingDiv: 'bookingDetails',
  };

  /** --- Booking Details --- **/

  setTime = time => {
    this.setState({ time });
  };

  getDate = date => {
    this.setState({ date });
  };

  setAmountOfGuests = num => {
    this.setState({ amountOfGuests: num });
  };

  /** ----- Guest Details----- **/

  submitBookingDetails = () => {
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
    this.setState({
      addBookingDiv: 'bookingDetails',
      errorName: '',
      errorLastName: '',
      errorEmail: '',
      errorPhoneNumber: '',
    });
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
      .then(() => {
        this.setState({ addBookingDiv: 'bookingSubmitted' });
      })
      .catch(error => {
        console.log(error);
      });
  };

  cancelBooking = () => {
    this.setState({
      amountOfGuests: '',
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      addBookingDiv: 'bookingDetails',
    });
  };

  render() {
    return (
      <div id="bookingWrapper" className="container">
        {this.state.addBookingDiv === 'bookingDetails' ? (
          <div id="bookingDetails" className="row">
            <h2 className="col-12">Booking Details</h2>
            <BookingDetailsContent
              getDate={this.getDate}
              setTime={this.setTime}
              setAmountOfGuests={this.setAmountOfGuests}
              submitBookingDetails={this.submitBookingDetails}
            />

            <div className="col-12">
              <Button
                className="col-md-12 col-lg-1"
                type="submit"
                onClick={this.submitBookingDetails}
              >
                Next
              </Button>
            </div>
          </div>
        ) : this.state.addBookingDiv === 'guestDetails' ? (
          <div id="bookingGuestDetails" className="row">
            <h2 className="col-12">Guest Details</h2>
            <BookingGuestDetailsContent
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
            <div id="guestDetailsButtons" className="row">
              <div className="backButtonBooking">
                <Button type="submit" onClick={this.backGuestDetails}>
                  Back
                </Button>
              </div>
              <div className="nextButtonBooking">
                <Button type="submit" onClick={this.setGuestDetails}>
                  Next
                </Button>
              </div>
            </div>
          </div>
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
