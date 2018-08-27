import React, { Component } from 'react';
import AdminUpdateBookings from './AdminUpdateBookings.js';
import AdminViewUpdateSearch from '../parts/AdminViewUpdateSearch.js';
import AdminViewBookingListTitles from '../parts/AdminViewBookingListTitles.js';
import AdminAllBookingsList from '../parts/AdminAllBookingsList.js';

class AdminChangeViewBookings extends Component {
  state = {
    selectedBooking: [],
    allBookings: [],
    customersNameFilter: '',
    customersDateFilter: '',
    updateDivClass: 'show',
  };

  componentWillReceiveProps(props) {
    this.setState({ allBookings: props.allBookings });
  }

  handleCustomersNameFilter = event => {
    this.setState({ customersNameFilter: event.target.value });
  };

  handleCustomersDateFilter = event => {
    this.setState({ customersDateFilter: event.target.value });
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
          selectedBooking={this.state.selectedBooking}
          closeUpdateDiv={this.closeUpdateDiv}
          updateDivClass={this.state.updateDivClass}
        />
        <AdminViewUpdateSearch
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
        <AdminAllBookingsList
          allBookings={this.state.allBookings}
          customersNameFilter={this.state.customersNameFilter}
          customersDateFilter={this.state.customersDateFilter}
          buttonUpdate={this.openUpdateDiv}
          buttonDelete={this.deleteBooking}
        />
      </div>
    );
  }
}

export default AdminChangeViewBookings;
