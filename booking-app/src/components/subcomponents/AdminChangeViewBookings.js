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
  };

  componentWillReceiveProps(props) {
    this.setState({ allBookings: props.allBookings });
  }

  handleCustomersNameFilter = event => {
    this.setState({ customersNameFilter: event.target.value });
  };

  handleCustomersDateFilter = event => {
    console.log(event.target.value);
    //gör sträng
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
        <AdminAllBookingsList
          allBookings={this.state.allBookings}
          customersNameFilter={' NA MN'}
          customersDateFilter={' DA TE'}
          buttonUpdate={this.openUpdateDiv}
          buttonDelete={this.deleteBooking}
        />
      </div>
    );
  }
}

export default AdminChangeViewBookings;
