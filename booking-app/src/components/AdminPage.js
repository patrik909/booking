import React, { Component } from 'react';
import AdminControlButtons from './subcomponents/AdminControlButtons.js';
import AdminCreateBooking from './subcomponents/AdminCreateBooking.js';
import AdminViewUpdateBookings from './subcomponents/AdminViewUpdateBookings.js';

class AdminPage extends Component {
  state = {
    adminPage: '',
    allBookings: [],
  };

  componentDidMount() {
    this.fetchBookings();
  }

  handleAdminPage = page => {
    page === 'openCreateBooking'
      ? this.setState({ adminPage: 'adminCreateBooking' })
      : page === 'openViewUpdateBooking'
        ? this.setState({ adminPage: 'adminViewUpdateBookings' })
        : null;
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
        {this.state.adminPage === 'adminCreateBooking' ? (
          <AdminCreateBooking className={this.state.adminCreateBookingClass} />
        ) : this.state.adminPage === 'adminViewUpdateBookings' ? (
          <AdminViewUpdateBookings
            fetchAllBookings={this.fetchBookings}
            allBookings={this.state.allBookings}
            className={this.state.adminViewUpdateBookingClass}
          />
        ) : null}
      </div>
    );
  }
}

export default AdminPage;
