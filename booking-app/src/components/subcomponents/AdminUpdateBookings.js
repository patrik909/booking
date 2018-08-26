import React, { Component } from 'react';
import DayPicker from '@kupibilet/react-day-picker';
import '@kupibilet/react-day-picker/lib/style.css';
import Button from '../parts/Button.js';

class AdminUpdateBookings extends Component {
  state = {
    selectedBooking: [],
  };

  componentWillReceiveProps(props) {
    this.setState({ selectedBooking: props.selectedBooking });
    console.log(props.allBookings);
  }

  closeUpdateDiv = event => {
    event.preventDefault();
    this.props.closeUpdateDiv();
  };

  updateThisBooking = (values, bookingId) => {
    console.log(values);
    console.log(bookingId);
    fetch(`api/booking/${bookingId}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
      .then(response => response.json())
      .then(booking => {
        console.log(booking);
        //        this.setState({
        //          updateBoxClass: 'hide'
        //        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div id="adminUpdateDiv" className={this.props.updateDivClass}>
        <div id="customersBookingWrapper" className="row">
          <div id="customersBookingDetails" className="col-md-5">
            <h3>Current details</h3>
            <p>
              <span>Name</span>
            </p>
            <p>
              {this.state.selectedBooking.firstname +
                ' ' +
                this.state.selectedBooking.lastname}
            </p>
            <p>
              <span>Phone</span>
            </p>
            <p>{this.state.selectedBooking.phone}</p>
            <p>
              <span>Email</span>
            </p>
            <p>{this.state.selectedBooking.email}</p>
            <p>
              <span>Number of Guests</span>
            </p>
            <p>{this.state.selectedBooking.num_of_guests}</p>
            <p>
              <span>At:</span>
            </p>
            <p>
              {this.state.selectedBooking.time} |
              {this.state.selectedBooking.date}
            </p>
          </div>
          <div className="col-md-7">
            <h3>Update details</h3>
            <DayPicker />
            <form
              onSubmit={event => {
                const values = {
                  numOfGuests: event.target.guests.value,
                  time: event.target.time.value,
                  date: event.target.date.value,
                };
                event.preventDefault();
                this.updateThisBooking(values, this.props.selectedBookingId);
              }}
              id="updateBox"
              className={this.state.updateBoxClass}
            >
              <p>{this.state.updateThisCustomersName}</p>
              <p>{this.state.updateThisCustomersPhone}</p>
              <p>{this.state.updateThisCustomersEmail}</p>
              <p>Guest(s): {this.state.updateThisCustomersNumOfGuests}</p>
              <select name="guests">
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
                <option value="5">5 Guests</option>
                <option value="6">6 Guests</option>
              </select>
              <p>{this.state.updateThisCustomersBookedTime}</p>
              <select name="time">
                <option value="19.00">19.00</option>
                <option value="21.00">21.00</option>
              </select>
              <input
                type="date"
                name="date"
                value={this.state.updateThisCustomersBookedDate}
              />
              <input type="submit" value="Update now!" />
            </form>
          </div>
        </div>
        <div id="adminUpdateButtons">
          <Button onClick={this.closeUpdateDiv} innerText={'Cancel'} />
          <Button onClick={this.closeUpdateDiv} innerText={'Update'} />
        </div>
      </div>
    );
  }
}

export default AdminUpdateBookings;
