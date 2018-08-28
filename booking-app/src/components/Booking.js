import React, { Component } from 'react';
import InputField from './subcomponents/InputField.js';
import Datepicker from './Datepicker';
import BookingGuestDetails from './parts/BookingGuestDetails.js';
import BookingSubmitBooking from './parts/BookingSubmitBooking.js';

//import DayPicker from '@kupibilet/react-day-picker';
//import '@kupibilet/react-day-picker/lib/style.css';

class BookingPage extends Component {
  state = {
    /** --- Booking Details --- **/
    amountOfGuests: '',
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
    addBookingDiv: 'submitBooking',
  };

  componentDidMount() {}
  /** --- Booking Details --- **/

  setAmountOfGuests = event => {
    this.setState({ amountOfGuests: event.target.value });
  };

  /** ----- Guest Details----- **/

  submitBookingDetails = event => {
    this.setState({ addBookingDiv: 'guestDetails' });
  };

  setGuestDetails = event => {
    console.log(isNaN(this.state.phoneNumber));
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

  submitGuestDetails = event => {
    event.preventDefault();

    console.log(this.state.firstName);
    console.log(this.state.lastName);
    console.log(this.state.email);
    console.log(this.state.phoneNumber);

    // fetch(
    //   `api/create-guest?firstname=${this.state.firstName}&lastname=${
    //     this.state.lastName
    //   }&email=${this.state.email}&phone=${this.state.phoneNumber}`
    // )
    //   .then(response => response.json())
    //   .then(fetched => {
    //     console.log(fetched);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  };

  cancelBooking = event => {
    this.setState({ amountOfGuests: '' });
    this.setState({ firstName: '' });
    this.setState({ lastName: '' });
    this.setState({ email: '' });
    this.setState({ phoneNumber: '' });
    this.setState({ addBookingDiv: 'bookingDetails' });
  };

  bookingInfo = () => {
    //if its in an error state then display the error message
    let errorNameMessage = null;
    let errorLastNameMessage = null;
    let errorEmailMessage = null;
    let errorPhoneMessage = null;

    if (this.state.errorName) {
      errorNameMessage = <p>{this.state.errorName}</p>;
    }
    if (this.state.errorLastName) {
      errorLastNameMessage = <p>{this.state.errorLastName}</p>;
    }
    if (this.state.errorEmail) {
      errorEmailMessage = <p>{this.state.errorEmail}</p>;
    }
    if (this.state.errorPhoneNumber) {
      errorPhoneMessage = <p>{this.state.errorPhoneNumber}</p>;
    }
    if (this.state.addBookingDiv === 'bookingDetails') {
      return (
        <div id="BookingDetails">
          <p>Booking Details</p>
          <Datepicker />
          <select onChange={this.setAmountOfGuests}>
            <option value="1">1 Guest</option>
            <option value="2">2 Guests</option>
            <option value="3">3 Guests</option>
            <option value="4">4 Guests</option>
            <option value="5">5 Guests</option>
            <option value="6">6 Guests</option>
          </select>
          <button type="submit" onClick={this.submitBookingDetails}>
            Next
          </button>
        </div>
      );
    } else if (this.state.addBookingDiv === 'guestDetails') {
      return (
        <BookingGuestDetails
          handleFirstNameInput={this.handleFirstNameInput}
          handleFirstNameInput={this.handleLastNameInput}
          handleFirstNameInput={this.handleEmailInput}
          handleFirstNameInput={this.handlePhoneNumberInput}
          backGuestDetails={this.backGuestDetails}
          setGuestDetails={this.setGuestDetails}
          errorNameMessage={errorNameMessage}
          errorLastNameMessage={errorLastNameMessage}
          errorEmailMessage={errorEmailMessage}
          errorPhoneMessage={errorPhoneMessage}
        />
      );
    } else if (this.state.addBookingDiv === 'submitBooking') {
      return <BookingSubmitBooking cancelBooking={this.cancelBooking} />;
    }
  };

  render() {
    return (
      <div id="BookingWrapper" className="container">
        {this.bookingInfo()}
      </div>
    );
  }
}
export default BookingPage;
