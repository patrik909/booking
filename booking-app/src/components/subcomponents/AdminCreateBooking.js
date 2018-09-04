import React, { Component } from 'react';
import Datepicker from '../Datepicker';
import Button from '../parts/Button.js';
import BookingGuestDetails from '../parts/BookingGuestDetails.js';
import AdminBookingSubmitted from '../parts/AdminBookingSubmitted.js';
import ErrorMessage from '../ErrorMessage.js';
import ErrorMessageContent from '../parts/ErrorMessageContent.js';

class AdminCreateBooking extends Component {
  state = {
    globalErrorMessage: false,
    time: '',
    date: '',
    numOfGuests: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    errorName: '',
    errorLastName: '',
    errorEmail: '',
    errorPhoneNumber: '',
    errorDateTimeNumOfGuests: '',
    displayAdminBookingContent: 'create',
  };

  getDate = date => {
    this.setState({ date });
  };

  setTime = time => {
    this.setState({ time });
  };

  setAmountOfGuests = amount => {
    this.setState({ numOfGuests: amount });
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

  checkIfInputIsEmpty = event => {
    event.preventDefault();
    /*if one of the fields are 
   empty an error message will be displayed */

    if (this.state.firstName === '') {
      this.setState({ errorName: 'Please enter your name!' });
    }

    if (this.state.lastName === '') {
      this.setState({ errorLastName: 'Please enter your last name!' });
    }

    if (this.state.email === '') {
      this.setState({ errorEmail: 'Please enter your email!' });
    }

    if (this.state.phoneNumber === '') {
      this.setState({ errorPhoneNumber: 'Please enter your phone number!' });
    }

    if (this.state.numOfGuests === '') {
      this.setState({
        errorDateTimeNumOfGuests: `Please make sure you've choosen a Date, Time and Number of Guests`,
      });
    }

    //If no fields are empty, submit booking
    if (
      this.state.firstName !== '' &&
      this.state.lastName !== '' &&
      this.state.email !== '' &&
      this.state.phoneNumber !== '' &&
      this.state.numOfGuests !== '' &&
      this.state.time !== '' &&
      this.state.date !== ''
    ) {
      this.submitBooking();
    }
  };

  submitBooking = values => {
    values = {
      guest: {
        firstname: this.state.firstName,
        lastname: this.state.lastName,
        email: this.state.email,
        phone: this.state.phoneNumber,
      },
      details: {
        numOfGuests: this.state.numOfGuests,
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
        this.setState({ displayAdminBookingContent: 'submitted' });
      })
      .catch(error => {
        this.setState({ globalErrorMessage: true });
      });
  };

  closeCreateBooking = event => {
    event.preventDefault();
    //Takes you back to create booking page and resets state
    this.setState({
      time: '',
      date: '',
      numOfGuests: '',
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      errorName: '',
      errorLastName: '',
      errorEmail: '',
      errorPhoneNumber: '',
      errorDateTimeNumOfGuests: '',
      firstSeatClass: 'hide',
      secondSeatClass: 'hide',
      displayAdminBookingContent: 'create',
    });
  };

  closeGlobalErrorMessage = () => {
    this.setState({ globalErrorMessage: false });
  };

  render() {
    return (
      <div id="adminCreateBooking">
        {this.state.globalErrorMessage === true ? (
          <ErrorMessage element={document.getElementById('modal')}>
            <ErrorMessageContent
              closeGlobalErrorMessage={this.closeGlobalErrorMessage}
            />
          </ErrorMessage>
        ) : null}
        {this.state.displayAdminBookingContent === 'create' ? (
          <React.Fragment>
            <div id="guestTime" className="col-12">
              <p className="error-msg">{this.state.errorDateTimeNumOfGuests}</p>
            </div>
            <div
              id="adminCreateBookingContent"
              className={this.state.createBooking + ' row'}
            >
              <div id="adminCreateBookingDatepicker" className="col-6">
                <Datepicker
                  getDate={this.getDate}
                  setTime={this.setTime}
                  seat1Class={this.isFirstSeatAvailable}
                  seat2Class={this.isSecondSeatAvailable}
                  setAmountOfGuests={this.setAmountOfGuests}
                />
              </div>

              <div id="adminGuestDetails" className="col-6">
                <BookingGuestDetails
                  handleFirstNameInput={this.handleFirstNameInput}
                  handleLastNameInput={this.handleLastNameInput}
                  handleEmailInput={this.handleEmailInput}
                  handlePhoneNumberInput={this.handlePhoneNumberInput}
                  setGuestDetails={this.setGuestDetails}
                  errorName={this.state.errorName}
                  errorLastName={this.state.errorLastName}
                  errorEmail={this.state.errorEmail}
                  errorPhoneNumber={this.state.errorPhoneNumber}
                />
                <Button onClick={this.checkIfInputIsEmpty} innerText={'Book'} />
              </div>
            </div>
          </React.Fragment>
        ) : this.state.displayAdminBookingContent === 'submitted' ? (
          <AdminBookingSubmitted
            name={this.state.firstName + ' ' + this.state.lastName}
            email={this.state.email}
            phoneNumber={this.state.phoneNumber}
            numOfGuests={this.state.numOfGuests}
            timeDate={this.state.time + ' | ' + this.state.date}
            closeCreateBooking={this.closeCreateBooking}
          />
        ) : null}
      </div>
    );
  }
}

export default AdminCreateBooking;
