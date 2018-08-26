import React, { Component } from 'react';
import AdminUpdateBookings from './AdminUpdateBookings.js';
import AdminViewUpdateListHeader from './AdminViewUpdateListHeader.js';
import InputField from '../parts/InputField.js';
import Button from '../parts/Button.js';

class AdminChangeViewBookings extends Component {
  state = {
    customersNameFilter: '',
    updateDivClass: 'hide',
    customersBookingId: '',
    customersName: '',
    customersPhone: '',
    customersEmail: '',
    customersNumOfGuests: '',
    customersBookedTime: '',
    customersBookedDate: '',
  };

  handleCustomersNameFilter = event => {
    this.setState({ customersNameFilter: event.target.value });
  };

  handleCustomersDateFilter = event => {
    console.log(event.target.value);
  };

  openUpdateDiv = event => {
    fetch(`api/booking/${event.target.value}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(booking => {
        console.log(booking);
        this.setState({
          updateDivClass: 'show',
          customersBookingId: booking.id,
          customersName: booking.firstname + ' ' + booking.lastname,
          customersPhone: booking.phone,
          customersEmail: booking.email,
          customersNumOfGuests: booking.num_of_guests,
          customersBookedTime: booking.time,
          customersBookedDate: booking.date,
        });
      })
      .catch(() => {
        console.log('error');
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
        <AdminUpdateBookings
          selectedBookingId={this.state.customersBookingId}
          selectedBookingName={this.state.customersName}
          selectedBookingPhone={this.state.customersPhone}
          selectedBookingEmail={this.state.customersEmail}
          selectedBookingNumOfGuests={this.state.customersNumOfGuests}
          selectedBookingDate={this.state.customersBookedDate}
          selectedBookingTime={this.state.customersBookedTime}
          closeUpdateDiv={this.closeUpdateDiv}
          updateDivClass={this.state.updateDivClass}
        />
        <AdminViewUpdateListHeader
          inputNameHandle={this.handleCustomersNameFilter}
          inputDateHandle={this.handleCustomersDateFilter}
        />

        <div id="bookingListTitles" className="row">
          <div className="col-md-3">Customers name</div>
          <div className="col-md-2">Phone number</div>
          <div className="col-md-3">Email</div>
          <div className="col-md-1">Time</div>
          <div className="col-md-2">Date</div>
          <div className="col-md-1">Options</div>
        </div>

        <ul id="allBookingsList">
          {this.props.allBookings.map((booking, i) => {
            if (
              booking.firstname.includes(this.state.customersNameFilter) ||
              booking.lastname.includes(this.state.customersNameFilter)
            ) {
              return (
                <li key={i} className="row">
                  <div className="customersName col-md-3">
                    {booking.firstname} {booking.lastname}
                  </div>
                  <div className="customersPhone col-md-2">{booking.phone}</div>
                  <div className="customersEmail col-md-3">{booking.email}</div>
                  <div className="customersBookedTime col-md-1">
                    {booking.time}
                  </div>
                  <div className="customersBookedDate col-md-2">
                    {booking.date}
                  </div>
                  <div className="customersButton col-md-1">
                    {' '}
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
      </div>
    );
  }
}

export default AdminChangeViewBookings;
