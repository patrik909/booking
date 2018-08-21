import React, { Component } from 'react';
import InputField from './subcomponents/InputField.js';

class AdminPage extends Component {
  state = {
    allBookings: [],
    nameSearch: '',
  };

  componentDidMount() {
    this.fetchBookings();
  }

  fetchBookings = () => {
    fetch(`api/booking`)
      .then(response => response.json())
      .then(allBookings => {
        this.setState({ allBookings });
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleFirstNameInput = event => {
    this.setState({ nameSearch: event.target.value });
  };

  updateBooking = event => {
    event.preventDefault();
  };

  deleteBooking = event => {
    event.preventDefault();

    fetch(`api/delete-booking/${event.target.value}`)
      .then(response => response.json())
      .then(allBookings => {
        this.fetchBookings();
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div id="AdminWrapper">
        <InputField
          type={'text'}
          name={'filterFirstName'}
          handle={this.handleFirstNameInput}
          placeholder={'Name'}
        />
        <ul>
          {this.state.allBookings.map((booking, i) => {
            if (
              booking.firstname.includes(this.state.nameSearch) ||
              booking.lastname.includes(this.state.nameSearch)
            ) {
              return (
                <li key={i}>
                  <div className="adminCustomerName">
                    {booking.firstname} {booking.lastname}
                  </div>
                  <div className="adminCustomerPhone">{booking.phone}</div>
                  <span>{booking.email}</span>
                  <div className="bookingDate">
                    {booking.time} | {booking.date}
                  </div>
                  <div className="handleBookingsButtons">
                    <button onClick={this.updateBooking}>Update</button>
                    <button value={booking.id} onClick={this.deleteBooking}>
                      Delete
                    </button>
                  </div>
                </li>
              );
            }
          })}
        </ul>
      </div>
    );
  }
}

export default AdminPage;
