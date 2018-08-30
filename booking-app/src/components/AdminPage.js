import React, { Component } from 'react';
import AdminControlButtons from './subcomponents/AdminControlButtons.js';
import AdminCreateBooking from './subcomponents/AdminCreateBooking.js';
import AdminViewUpdateBookings from './subcomponents/AdminViewUpdateBookings.js';

class AdminPage extends Component {
  state = {
    adminCreateBookingClass: 'hide',
    adminViewUpdateBookingClass: 'hide',
    allBookings: [],
  };

  componentDidMount() {
    this.fetchBookings();
  }

  handleAdminPage = page => {
    page === 'openCreateBooking'
      ? this.setState({
          adminCreateBookingClass: 'show',
          adminViewUpdateBookingClass: 'hide',
        })
      : this.setState({
          adminCreateBookingClass: 'hide',
          adminViewUpdateBookingClass: 'show',
        });
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

  render() {
    return (
      <div id="adminWrapper" className="container">
        <AdminControlButtons manageAdminPage={this.handleAdminPage} />
        <AdminCreateBooking className={this.state.adminCreateBookingClass} />
        <AdminViewUpdateBookings
          fetchAllBookings={this.fetchBookings}
          allBookings={this.state.allBookings}
          className={this.state.adminViewUpdateBookingClass}
        />
      </div>
    );
  }
}

export default AdminPage;
