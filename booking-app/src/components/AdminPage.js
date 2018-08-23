import React, { Component } from 'react';
import InputField from './subcomponents/InputField.js';
import AdminControlButtons from './subcomponents/AdminControlButtons.js';
import AdminChangeViewBookings from './subcomponents/AdminChangeViewBookings.js';

class AdminPage extends Component {
  state = {
    adminCreateBookingClass: 'hide',
    adminChangeViewBookingClass: 'show',
    allBookings: [],
    /*--- WIP below---*/

    updateThisCustomersName: '',
    updateThisCustomersPhone: '',
    updateThisCustomersEmail: '',

    updateThisCustomersNumOfGuests: '',
    updateThisCustomersBookedTime: '',
    updateThisCustomersBookedDate: '',
    updateBoxClass: 'hide',
    selectedBooking: 0,
  };

  componentDidMount() {
    this.fetchBookings();
  }

  handleAdminPage = page => {
    if (page === 'openCreateBooking') {
      this.setState({ adminCreateBookingClass: 'show' });
      this.setState({ adminChangeViewBookingClass: 'hide' });
    } else {
      this.setState({ adminCreateBookingClass: 'hide' });
      this.setState({ adminChangeViewBookingClass: 'show' });
    }
  };

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

  /*----- */

  updateThisBooking = (values, bookingId) => {
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
        this.setState({
          updateThisCustomersNumOfGuests: booking.num_of_guests,
          updateThisCustomersBookedTime: booking.time,
          updateThisCustomersBookedDate: booking.date,
          updateBoxClass: 'hide',
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div id="adminWrapper" className="container-full">
        <AdminControlButtons manageAdminPage={this.handleAdminPage} />

        <AdminChangeViewBookings
          fetchAllBookings={this.fetchBookings}
          allBookings={this.state.allBookings}
          className={this.state.adminChangeViewBookingClass}
        />

        <ul>
          {this.state.allBookings.map(booking => {
            if (
              booking.firstname.includes(this.state.nameSearch) ||
              booking.lastname.includes(this.state.nameSearch)
            ) {
              return (
                <li key={booking.bookgingId}>
                  <div className="adminCustomerName">
                    {booking.firstname} {booking.lastname}
                  </div>
                  <div className="adminCustomerPhone">{booking.phone}</div>
                  <div className="adminCustomerEmail">{booking.email}</div>
                  <div className="bookingDate">
                    {booking.time} | {booking.date}
                  </div>
                  <div className="handleBookingsButtons">
                    <button
                      value={booking.bookingId}
                      onClick={event => {
                        this.openEditbox(event.target.value);
                      }}
                    >
                      Update
                    </button>
                    <button
                      value={booking.bookingId}
                      onClick={this.deleteBooking}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              );
            }
          })}
        </ul>
        <form
          onSubmit={event => {
            const values = {
              numOfGuests: event.target.guests.value,
              time: event.target.time.value,
              date: event.target.date.value,
            };
            event.preventDefault();
            this.updateThisBooking(values, this.state.selectedBooking);
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
    );
  }
}

export default AdminPage;
