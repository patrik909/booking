import React, { Component } from 'react';
import InputField from './subcomponents/InputField.js';
import Datepicker from './Datepicker'

//import DayPicker from '@kupibilet/react-day-picker';
//import '@kupibilet/react-day-picker/lib/style.css';

class BookingPage extends Component {
  state = {
    /** --- Booking Details --- **/
    amountOfGuests: '',
    bookingDetailsClass: 'show',
    /** --- Guest Details --- **/
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    guestDetailsClass: 'hide',
    /** --- GDPR Details --- **/
    submitBoxClass: 'hide',
  };

  componentDidMount() {}
  /** --- Booking Details --- **/

  setAmountOfGuests = event => {
    this.setState({ amountOfGuests: event.target.value });
  };

  /** ----- Guest Details----- **/

  submitBookingDetails = event => {
    this.setState({ bookingDetailsClass: 'hide' });
    this.setState({ guestDetailsClass: 'show' });
  };

  setGuestDetails = event => {
    event.preventDefault();
    if (
      this.state.firstName !== '' &&
      this.state.lastName !== '' &&
      this.state.email !== '' &&
      this.state.phoneNumber !== ''
    ) {
      this.setState({ submitBoxClass: 'show' });
      this.setState({ guestDetailsClass: 'hide' });
    }
  };

  backGuestDetails = event => {
    event.preventDefault();
    this.setState({ bookingDetailsClass: 'show' });
    this.setState({ guestDetailsClass: 'hide' });
  };

  handleFirstNameInput = event => {
    console.log(event.target.value);
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

    fetch(
      `api/create-guest?firstname=${this.state.firstName}&lastname=${
        this.state.lastName
      }&email=${this.state.email}&phone=${this.state.phoneNumber}`
    )
      .then(response => response.json())
      .then(fetched => {
        console.log(fetched);
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
    this.setState({ bookingDetailsClass: 'show' });
    this.setState({ guestDetailsClass: 'hide' });
    this.setState({ submitBoxClass: 'hide' });
  };

  render() {
    return (
      <div id="BookingWrapper">
        <div id="BookingDetails" className={this.state.bookingDetailsClass}>
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
        <div id="GuestDetails" className={this.state.guestDetailsClass}>
          <p>Guest details</p>
          <form>
            <InputField
              type={'text'}
              name={'firstname'}
              placeholder={'First name'}
              handle={this.handleFirstNameInput}
            />
            <InputField
              type={'text'}
              name={'lastname'}
              placeholder={'Last name'}
              handle={this.handleLastNameInput}
            />
            <InputField
              type={'text'}
              name={'email'}
              placeholder={'Email'}
              handle={this.handleEmailInput}
            />
            <InputField
              type={'number'}
              name={'phonenumber'}
              placeholder={'Phone number'}
              handle={this.handlePhoneNumberInput}
            />
            <button type="submit" onClick={this.backGuestDetails}>
              Back
            </button>
            <button type="submit" onClick={this.setGuestDetails}>
              Next
            </button>
          </form>
        </div>
        <div id="" className={this.state.submitBoxClass}>
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
      </div>
    );
  }
}

export default BookingPage;
