import React, { Component } from 'react';
import AdminUpdateBookings from './AdminUpdateBookings.js';
import InputField from '../parts/InputField.js';
import Button from '../parts/Button.js';

class AdminChangeViewBookings extends Component {
  state = {
    customersNameFilter: '',
    updateDivClass: 'hide',
    bookingToUpdate: '',
  };

  handleCustomersNameFilter = event => {
    this.setState({ customersNameFilter: event.target.value });
  };

  openUpdateDiv = id => {
    this.setState({
      updateDivClass: 'show',
      bookingToUpdate: id,
    });
  };

  closeUpdateDiv = () => {
    this.setState({
      updateDivClass: 'hide',
      bookingToUpdate: '',
    });
  };

  deleteBooking = event => {
    fetch(`api/booking/${event.target.value}`, {
      method: 'DELETE',
    })
      .then(booking => {
        this.props.fetchAllBookings();
      })
      .catch(() => {
        console.log('error');
      });
  };

  render() {
    return (
      <div id="changeViewBooking" className={this.props.className}>
        <header>
          <p>Filter by name</p>
          <InputField
            type={'text'}
            name={'customersNameFilter'}
            handle={this.handleCustomersNameFilter}
            placeholder={'Customers name'}
          />
        </header>
        <div className="row">
          <div className="col-md-3">Customers name</div>
          <div className="col-md-2">Phone number</div>
          <div className="col-md-3">Email</div>
          <div className="col-md-1">Time</div>
          <div className="col-md-2">Date</div>
          <div />
        </div>
        <ul id="allBookingsList">
          {this.props.allBookings.map((booking, i) => {
            if (
              booking.firstname.includes(this.state.customersNameFilter) ||
              booking.lastname.includes(this.state.customersNameFilter)
            ) {
              return (
                <li key={i} className="row">
                  <div className="col-md-3">
                    {booking.firstname} {booking.lastname}
                  </div>
                  <div className="col-md-2">{booking.phone}</div>
                  <div className="col-md-3">{booking.email}</div>
                  <div className="col-md-1">{booking.time}</div>
                  <div className="col-md-2">{booking.date}</div>
                  <div>
                    <Button
                      value={booking.bookingId}
                      onClick={this.openUpdateDiv}
                      innerText={'Update'}
                    />
                    <Button
                      value={booking.bookingId}
                      onClick={this.deleteBooking}
                      innerText={'Delete'}
                    />
                  </div>
                </li>
              );
            }
          })}
        </ul>
        <AdminUpdateBookings
          closeUpdateDiv={this.closeUpdateDiv}
          updateDivClass={this.state.updateDivClass}
        />
      </div>
    );
  }
}

export default AdminChangeViewBookings;
