import React, { Component } from 'react';
import InputField from './subcomponents/InputField.js';
import DayPicker from '@kupibilet/react-day-picker';
import '@kupibilet/react-day-picker/lib/style.css';

class BookingPage extends Component {
  state = {
    /** --- Booking Details --- **/
    amountOfGuests: '',
    /** --- Guest Details --- **/
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
  };

  componentDidMount() {}
  /** --- Booking Details --- **/

  setAmountOfGuests = event => {
    this.setState({ amountOfGuests: event.target.value });
  };

  lol = event => {
    console.log(event);
    console.log('hej');
  };

  /** ----- Guest Details----- **/

  submitGuestDetails = event => {
    event.preventDefault();
    console.log(this.state.firstName);
    console.log(this.state.lastName);
    console.log(this.state.email);
    console.log(this.state.phoneNumber);

    //        fetch('http://localhost:3000/create-guest?firstname=kalle&lastname=fdfdfd&email=fdfdfd&phone=88878')

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

  render() {
    return (
      <div id="BookingWrapper">
        <div id="BookingDetails">
          <p>Booking Details</p>
          <DayPicker onClick={this.lol} />
          <select onChange={this.setAmountOfGuests}>
            <option value="1">1 Guest</option>
            <option value="2">2 Guests</option>
            <option value="3">3 Guests</option>
            <option value="4">4 Guests</option>
            <option value="5">5 Guests</option>
            <option value="6">6 Guests</option>
          </select>
        </div>
        <div id="GuestDetails">
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
            <button type="submit" onClick={this.submitGuestDetails}>
              Book
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default BookingPage;
