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
    updateDivClass: 'hide',
  };

  componentDidMount() {
    this.props.fetchAllBookings();
  }

  componentWillReceiveProps(props) {
    this.setState({ allBookings: props.allBookings });
  }

  handleCustomersNameFilter = event => {
    this.setState({ customersNameFilter: event.target.value.toLowerCase() });
  };

  handleCustomersDateFilter = event => {
    this.setState({ customersDateFilter: event.target.value.toLowerCase() });
  };

  openUpdateDiv = event => {
    fetch(`api/booking/${event.target.value}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(booking => {
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
    this.props.fetchAllBookings();
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
          selectedBookingFirstname={this.state.selectedBooking.firstname}
          selectedBookingLastname={this.state.selectedBooking.lastname}
          selectedBookingPhone={this.state.selectedBooking.phone}
          selectedBookingEmail={this.state.selectedBooking.email}
          selectedBookingNumOfGuests={this.state.selectedBooking.num_of_guests}
          selectedBookingTime={this.state.selectedBooking.time}
          selectedBookingDate={this.state.selectedBooking.date}
          selectedBookingId={this.state.selectedBooking.id}
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
