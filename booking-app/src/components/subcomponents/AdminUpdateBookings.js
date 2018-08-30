import React, { Component } from 'react';
import Button from '../parts/Button.js';
import Datepicker from '../Datepicker';

class AdminUpdateBookings extends Component {
  state = {
    selectedBooking: [],
    newTime: '',
    newDate: '',
  };

  componentWillReceiveProps(props) {
    this.setState({ selectedBooking: props.selectedBooking });
  }

  closeUpdateDiv = () => {
    this.props.closeUpdateDiv();
  };

  getDate = date => {
    this.setState({ newDate: date });
  };

  getTime = time => {
    this.setState({ newTime: time });
  };

  setTime = event => {
    //      event.preventDefault();
    //      this.setState({newTime: event.target.value})
    //      console.log(event.target.value)
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
        console.log(booking);
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

          <div id="customersUpdateDetails" className="col-md-8">
            <h3>Update details</h3>
            <div className="row">
              <div className="col-md-8">
                <Datepicker getDate={this.getDate} getTime={this.getTime} />
              </div>
              <div className="col-md-4">
                <form
                  onSubmit={event => {
                    const values = {
                      numOfGuests: event.target.guests.value,
                      time: this.state.newTime,
                      date: this.state.newDate,
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
                  <div>
                    <Button
                      className={'yo'}
                      onClick={this.setTime}
                      innerText={'18.00'}
                      value={'18.00'}
                    />
                    <Button
                      className={'yo'}
                      onClick={this.setTime}
                      innerText={'21.00'}
                      value={'21.00'}
                    />
                  </div>
                  <p>{this.state.updateThisCustomersBookedTime}</p>
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
