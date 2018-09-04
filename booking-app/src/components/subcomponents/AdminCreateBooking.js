import React, { Component } from 'react';
import Datepicker from '../Datepicker';
import Button from '../parts/Button.js';
import BookingGuestDetails from '../parts/BookingGuestDetails.js';
import AdminBookingSubmitted from '../parts/AdminBookingSubmitted.js';

class AdminCreateBooking extends Component {
  state = {
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
    // firstSeatClass: 'hide',
    // secondSeatClass: 'hide',
    displayAdminBookingContent: 'create',
    // firstSeatActived: '',
    // secondSeatActived: '',
  };

  getDate = date => {
    this.setState({ date });
  };

  setTime = time => {
    this.setState({ time });
  };

  setAmountOfGuests = amount => {
    console.log(amount);
    this.setState({ numOfGuests: amount });
  };

  // isFirstSeatAvailable = seat => {
  //   this.setState({ firstSeatClass: seat });
  // };

  // isSecondSeatAvailable = seat => {
  //   this.setState({ secondSeatClass: seat });
  // };

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
    this.state.firstName === ''
      ? this.setState({ errorName: 'Please enter your name!' })
      : null;

    this.state.lastName === ''
      ? this.setState({ errorLastName: 'Please enter your last name!' })
      : null;

    this.state.email === ''
      ? this.setState({ errorEmail: 'Please enter your email!' })
      : null;

    this.state.phoneNumber === ''
      ? this.setState({ errorPhoneNumber: 'Please enter your phone number!' })
      : null;

    this.state.numOfGuests === ''
      ? this.setState({
          errorDateTimeNumOfGuests: `Please make sure you've choosen a Date, Time and Number of Guests`,
        })
      : null;

    console.log(this.state.numOfGuests);
    console.log(this.state.time);
    console.log(this.state.date);
    //If no fields are empty, submit booking
    this.state.firstName !== '' &&
    this.state.lastName !== '' &&
    this.state.email !== '' &&
    this.state.phoneNumber !== '' &&
    this.state.numOfGuests !== '' &&
    this.state.time !== '' &&
    this.state.date !== ''
      ? this.submitBooking()
      : null;
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
        console.log(error);
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

  render() {
    return (
      <div id="adminCreateBooking">
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
