import React, { Component } from 'react';
import InputField from './subcomponents/InputField.js';
import AdminControlButtons from './subcomponents/AdminControlButtons.js';

class AdminPage extends Component {
  state = {
    adminCreateBookingClass: 'hide',
    adminViewChangeBookingClass: 'hide',
    /*--- WIP below---*/

    allBookings: [],
    nameSearch: '',
    updateThisCustomersName: '',
    updateThisCustomersPhone: '',
    updateThisCustomersEmail: '',
    updateThisCustomersNumOfGuests: '',
    updateThisCustomersBookedTime: '',
    updateThisCustomersBookedDate: '',
    updateBoxClass: 'hide',
  };

  componentDidMount() {
    this.fetchBookings();
  }

  handleAdminPage = page => {
    if (page === 'openCreateBooking') {
      this.setState({ adminCreateBookingClass: 'show' });
      this.setState({ adminViewChangeBookingClass: 'hide' });
    } else {
      this.setState({ adminCreateBookingClass: 'hide' });
      this.setState({ adminViewChangeBookingClass: 'show' });
    }
  };

  /*--- WIP below---*/

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

  updateThisBooking = event => {
    event.preventDefault();
    fetch(`api/booking/${event.target.value}`)
      .then(response => response.json())
      .then(booking => {
        this.setState({
          updateThisCustomersName: booking.firstname + ' ' + booking.lastname,
        });
        this.setState({ updateThisCustomersPhone: booking.phone });
        this.setState({ updateThisCustomersEmail: booking.email });
        this.setState({
          updateThisCustomersNumOfGuests: booking.num_of_guests,
        });
        this.setState({ updateThisCustomersBookedTime: booking.time });
        this.setState({ updateThisCustomersBookedDate: booking.date });
        this.setState({ updateBoxClass: 'show' });
      })
      .catch(error => {
        console.log(error);
      });
  };

  updateBooking = event => {};

  cancelUpdateBooking = event => {
    event.preventDefault();
    this.setState({ updateBoxClass: 'hide' });
  };

  deleteBooking = event => {
    fetch(`api/booking/${event.target.value}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(booking => console.log(booking))
      .catch(() => {
        console.log('error');
      });
  };

  render() {
    return (
      <div id="AdminWrapper">
        <AdminControlButtons manageAdminPage={this.handleAdminPage} />

        <div id="createBooking" className={this.state.adminCreateBookingClass}>
          {' '}
          create{' '}
        </div>
        <div
          id="viewChangeBooking"
          className={this.state.adminViewChangeBookingClass}
        >
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
                    <div className="adminCustomerEmail">{booking.email}</div>
                    <div className="bookingDate">
                      {booking.time} | {booking.date}
                    </div>
                    <div className="handleBookingsButtons">
                      <button
                        value={booking.id}
                        onClick={this.updateThisBooking}
                      >
                        Update
                      </button>
                      <button value={booking.id} onClick={this.deleteBooking}>
                        Delete
                      </button>
                    </div>
                  </li>
                );
              }
            })}
          </ul>
          <div id="updateBox" className={this.state.updateBoxClass}>
            <p>{this.state.updateThisCustomersName}</p>
            <p>{this.state.updateThisCustomersPhone}</p>
            <p>{this.state.updateThisCustomersEmail}</p>
            <p>Guest(s): {this.state.updateThisCustomersNumOfGuests}</p>
            <select>
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
              <option value="5">5 Guests</option>
              <option value="6">6 Guests</option>
            </select>
            <p>{this.state.updateThisCustomersBookedTime}</p>
            <select>
              <option value="19.00">19.00</option>
              <option value="21.00">21.00</option>
            </select>
            <input
              type="date"
              value={this.state.updateThisCustomersBookedDate}
            />
            <button onClick={this.cancelUpdateBooking}>Cancel!</button>
            <button onClick={this.updateBooking}>Update now!</button>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminPage;
