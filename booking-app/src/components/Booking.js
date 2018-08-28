import React, { Component } from 'react';
import InputField from './subcomponents/InputField.js';
import Datepicker from './Datepicker';

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
    addBookingDiv: 'bookingDetails',
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
    console.log(event.target.value);
    this.setState({ firstName: event.target.value });
  };

  handleLastNameInput = event => {
    console.log(event.target.value);

    this.setState({ lastName: event.target.value });
  };

  handleEmailInput = event => {
    console.log(event.target.value);

    this.setState({ email: event.target.value });
  };

  handlePhoneNumberInput = event => {
    console.log(event.target.value);

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
        <div id="GuestDetails">
          <p>Guest details</p>
          <form>
            <InputField
              type={'text'}
              name={'firstname'}
              placeholder={'First name'}
              handle={this.handleFirstNameInput}
            />
            <p className="text-danger">{errorNameMessage}</p>

            <InputField
              type={'text'}
              name={'lastname'}
              placeholder={'Last name'}
              handle={this.handleLastNameInput}
            />
            <p className="text-danger">{errorLastNameMessage}</p>

            <InputField
              type={'text'}
              name={'email'}
              placeholder={'Email'}
              handle={this.handleEmailInput}
            />
            <p className="text-danger">{errorEmailMessage}</p>

            <InputField
              type={'tel'}
              name={'phonenumber'}
              placeholder={'Phone number'}
              handle={this.handlePhoneNumberInput}
            />

            <p className="text-danger">{errorPhoneMessage}</p>

            <button type="submit" onClick={this.backGuestDetails}>
              Back
            </button>
            <button type="submit" value="Next" onClick={this.setGuestDetails}>
              Next
            </button>
          </form>
        </div>
      );
    } else if (this.state.addBookingDiv === 'submitBooking') {
      return (
        <div id="">
          <p>
            We're storing your personal details to enhance your experience, when
            pressing accept you give us the right to save the information below:
          </p>
          <p>
            {this.state.firstName} {this.state.lastName}
          </p>

          <p>{this.state.email}</p>
          <p>{this.state.phoneNumber}</p>
          <button type="submit" onClick={this.cancelBooking}>
            Cancel
          </button>
          <button type="submit" onClick={this.submitGuestDetails}>
            Book
          </button>
        </div>
      );
    }
  };

  render() {
    return <div id="BookingWrapper">{this.bookingInfo()}</div>;
  }
}
export default BookingPage;
