import React, { Component } from 'react';
import AdminUpdateBookings from './AdminUpdateBookings.js';
import AdminViewUpdateListHeader from './AdminViewUpdateListHeader.js';
import AdminViewBookingListTitles from './AdminViewBookingListTitles.js';
import AdminAllBookingsList from './AdminAllBookingsList.js';
import Button from '../parts/Button.js';

class AdminChangeViewBookings extends Component {
  state = {
    selectedBooking: [],
    allBookings: [],
    customersNameFilter: '',
    customersDateFilter: '',
    updateDivClass: 'hide',
    customersBookingId: '',
    customersName: '',
    customersPhone: '',
    customersEmail: '',
    customersNumOfGuests: '',
    customersBookedTime: '',
    customersBookedDate: '',
  };

  componentWillReceiveProps(props) {
    this.setState({ allBookings: props.allBookings });
  }

  handleCustomersNameFilter = event => {
    this.setState({ customersNameFilter: event.target.value });
  };

  handleCustomersDateFilter = event => {
    //      const numToString = event.target.value.toString();
    //    this.setState({ customersDateFilter: numToString });
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
          selectedBooking: booking,
          //          customersBookingId: booking.id,
          //          customersName: booking.firstname + ' ' + booking.lastname,
          //          customersPhone: booking.phone,
          //          customersEmail: booking.email,
          //          customersNumOfGuests: booking.num_of_guests,
          //          customersBookedTime: booking.time,
          //          customersBookedDate: booking.date,
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
    console.log(this.state.allBookings);
    return (
      <div id="changeViewBooking" className={this.props.className}>
        <AdminUpdateBookings
          selectedBooking={this.state.selectedBooking}
          closeUpdateDiv={this.closeUpdateDiv}
          updateDivClass={this.state.updateDivClass}
        />
        <AdminViewUpdateListHeader
          inputNameHandle={this.handleCustomersNameFilter}
          inputDateHandle={this.handleCustomersDateFilter}
        />
        <AdminViewBookingListTitles
          nameTitle={'Customers name'}
          phoneTitle={'Phone number'}
          emailTitle={'Email'}
          numOfGuestsTitle={'Guest(s)'}
          timeDateTitle={'Time | Date'}
          optionsTitle={'Options'}
        />
        <AdminAllBookingsList allBookings={'hej'} />
        <ul id="allBookingsList" className="container">
          {this.state.allBookings.map((booking, i) => {
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
                  <div className="customersBookedDate col-md-1">
                    {booking.num_of_guests}
                  </div>
                  <div className="customersBookedDate col-md-2">
                    {booking.time} | {booking.date}
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
