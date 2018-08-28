import React, { Component } from 'react';
import DayPicker from '@kupibilet/react-day-picker';
import '@kupibilet/react-day-picker/lib/style.css';

class AdminUpdateBookings extends Component {
  state = {
    selectedBooking: [],
  };

  componentWillReceiveProps(props) {
    this.setState({ selectedBooking: props.selectedBooking });
  }

  closeUpdateDiv = () => {
    this.props.closeUpdateDiv();
  };

  lol = event => {
    console.log(event.target.value.time);
  };

  updateThisBooking = (values, bookingId) => {
    console.log(values);
    console.log(bookingId);
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
        this.closeUpdateDiv();
      })
      .catch(error => {
        console.log(error);
      });
  };

  selectNumOfGuests = () => {
    let numOfGuestOptions = [
      '1 Guest',
      '2 Guests',
      '3 Guests',
      '4 Guests',
      '5 Guests',
      '6 Guests',
    ];

    return (
      <select name="guests">
        {numOfGuestOptions.map((item, i) => {
          if (i === this.state.selectedBooking.num_of_guests - 1) {
            return (
              <option value={i + 1} selected>
                {item}
              </option>
            );
          } else {
            return (
              <option key={i} value={i + 1}>
                {item}
              </option>
            );
          }
        })}
      </select>
    );
  };

  render() {
    return (
      <div
        id="adminUpdateDiv"
        className={this.props.updateDivClass + ' container'}
      >
        <div id="customersBookingWrapper" className="row">
          <div id="customersBookingDetails" className="col-md-4">
            <h3>Details</h3>
            <p>
              <span>Name</span>
            </p>
            <p>
              {this.state.selectedBooking.firstname +
                ' ' +
                this.state.selectedBooking.lastname}
            </p>
            <p>
              <span>Phone</span>
            </p>
            <p>{this.state.selectedBooking.phone}</p>
            <p>
              <span>Email</span>
            </p>
            <p>{this.state.selectedBooking.email}</p>
            <p>
              <span>Number of Guests</span>
            </p>
            <p>{this.state.selectedBooking.num_of_guests}</p>
            <p>
              <span>At:</span>
            </p>
            <p>
              {this.state.selectedBooking.time +
                ' | ' +
                this.state.selectedBooking.date}
            </p>
          </div>

          <div className="col-md-8">
            <h3>Update details</h3>
            <div className="row">
              <div className="col-md-7">
                <DayPicker />
              </div>
              <div className="col-md-5">
                <form
                  onSubmit={event => {
                    const values = {
                      numOfGuests: event.target.guests.value,
                      time: event.target.time.value,
                      date: event.target.date.value,
                    };
                    event.preventDefault();
                    this.updateThisBooking(
                      values,
                      this.state.selectedBooking.id
                    );
                  }}
                  name="updateBooking"
                  id="updateBox"
                  className={this.state.updateBoxClass}
                >
                  {this.selectNumOfGuests()}

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
                  <div id="adminUpdateButtons">
                    <input
                      onClick={this.closeUpdateDiv}
                      type="submit"
                      value="Cancel"
                    />
                    <input type="submit" form="updateBox" value="Update" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminUpdateBookings;
