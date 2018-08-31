import React, { Component } from 'react';
import Datepicker from '../Datepicker';
import Button from '../parts/Button.js';
import BookingGuestDetails from '../parts/BookingGuestDetails.js';

class AdminCreateBooking extends Component {
  state = {
    /** --- Booking Details --- **/
    numOfGuests: '',
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
    errorDateTimeNumOfGuests: '',
    /** --- Available Seats --- */
    seat1Class: 'hide',
    seat2Class: 'hide',
    /** --- Page --- */
    createBooking: '',
    bookingSubmitted: 'hide',
  };

  getDate = date => {
    this.setState({ date });
  };

  setTime = event => {
    event.preventDefault();
    this.setState({ time: event.target.value });
  };

  setNumOfGuests = event => {
    this.setState({ numOfGuests: event.target.value });
  };

  seat1Class = seat1 => {
    this.setState({ seat1Class: seat1 });
  };

  seat2Class = seat2 => {
    this.setState({ seat2Class: seat2 });
  };

  submitBooking = event => {
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
    }
    if (this.state.numOfGuests === '') {
      this.setState({
        errorDateTimeNumOfGuests: `Please make sure you've choosen a Date, Time and Number of Guests`,
      });
    }

    if (
      this.state.firstName !== '' &&
      this.state.lastName !== '' &&
      this.state.email !== '' &&
      this.state.phoneNumber !== '' &&
      this.state.numOfGuests !== '' &&
      this.state.time !== '' &&
      this.state.date !== ''
    ) {
      this.sendBooking();
    }
  };
  closeCreateBooking = event => {
    event.preventDefault();
    this.setState({
      createBooking: 'show',
      bookingSubmitted: 'hide',
    });
  };

  sendBooking = values => {
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
        console.log('done');
        this.setState({
          createBooking: 'hide',
          bookingSubmitted: 'show',
        });
      })
      .catch(error => {
        console.log(error);
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

  render() {
    console.log(this.state.errorDateTimeNumOfGuests);
    console.log(this.state.numOfGuests);
    console.log(this.state.date);
    console.log(this.state.time);
    return (
      <div id="adminCreateBooking">
        <div
          id="adminCreateBookingContent"
          className={this.state.createBooking + ' row'}
        >
          <div id="adminCreateBookingDatepicker" className="col-5">
            <Datepicker
              getDate={this.getDate}
              seat1Class={this.seat1Class}
              seat2Class={this.seat2Class}
            />
          </div>
          <div id="guestTime" className="col-3">
            <p id="numOfGuests">Number of Guest(s)</p>
            <select id="numOfGuestsDropdown" onChange={this.setNumOfGuests}>
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
              <option value="5">5 Guests</option>
              <option value="6">6 Guests</option>
            </select>
            <div id="availableTimes">
              <Button
                className={this.state.seat1Class}
                onClick={this.setTime}
                value={'18.00'}
                innerText={'18.00'}
              />
              <Button
                className={this.state.seat2Class}
                onClick={this.setTime}
                value={'21.00'}
                innerText={'21.00'}
              />
            </div>
            <p className="text-danger">{this.state.errorDateTimeNumOfGuests}</p>
          </div>
          <div id="adminGuestDetails" className="col-4">
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
            <Button onClick={this.submitBooking} innerText={'Book'} />
          </div>
        </div>
        <div
          id="adminBookingSubmittedContent"
          className={this.state.bookingSubmitted + ' row'}
        >
          booking info:
          <p>{this.state.firstName + ' ' + this.state.lastName}</p>
          <p>{this.state.phoneNumber}</p>
          <p>{this.state.email}</p>
          <p>{this.state.numOfGuests}</p>
          <p>{this.state.time + ' | ' + this.state.date}</p>
          <Button onClick={this.closeCreateBooking} innerText={'Ok'} />
        </div>
      </div>
    );
  }
}

export default AdminCreateBooking;
