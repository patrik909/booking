import React, { Component } from 'react';
//import InputField from './subcomponents/InputField.js';

class AdminPage extends Component {
  state = {
    allBookings: [],
  };

  componentDidMount() {
    this.fetchBookings();
  }
  /** --- Booking Details --- **/

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
    console.log(this.state.allBookings);
    return <div />;
  }
}

export default AdminPage;
