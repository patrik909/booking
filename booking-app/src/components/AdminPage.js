import React, { Component } from 'react';
import AdminControlButtons from './subcomponents/AdminControlButtons.js';
import AdminCreateBooking from './subcomponents/AdminCreateBooking.js';
import AdminViewUpdateBookings from './subcomponents/AdminViewUpdateBookings.js';

class AdminPage extends Component {
  state = {
    displayAdminPageContent: '',
    allBookings: [],
  };

  handleAdminPage = page => {
    //Receives props to decide which page to display
    if (page === 'openCreateBooking') {
      this.setState({
        displayAdminPageContent: 'adminCreateBooking',
      });
    }
    if (page === 'openViewUpdateBooking') {
      this.setState({
        displayAdminPageContent: 'adminViewUpdateBookings',
      });
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
      <div id="adminWrapper" className="container">
        <AdminControlButtons manageAdminPage={this.handleAdminPage} />
        {this.state.displayAdminPageContent === 'adminCreateBooking' ? (
          <AdminCreateBooking manageAdminPage={this.handleAdminPage} />
        ) : this.state.displayAdminPageContent === 'adminViewUpdateBookings' ? (
          <AdminViewUpdateBookings
            fetchAllBookings={this.fetchBookings}
            allBookings={this.state.allBookings}
          />
        ) : null}
      </div>
    );
  }
}

export default AdminPage;
