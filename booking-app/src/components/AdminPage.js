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

  render() {
    return (
      <div id="adminWrapper" className="container-full">
        <AdminControlButtons manageAdminPage={this.handleAdminPage} />

        <AdminChangeViewBookings
          allBookings={this.state.allBookings}
          className={this.state.adminChangeViewBookingClass}
        />
      </div>
    );
  }
}

export default AdminPage;
