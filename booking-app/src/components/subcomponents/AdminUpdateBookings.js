import React, { Component } from 'react';
import Button from '../parts/Button.js';
import Datepicker from '../Datepicker.js';

class AdminUpdateBookings extends Component {
  state = {
    selectedBooking: [],
    time: '',
    firstSeatActived: '',
    secondSeatActived: '',
    date: '',
    firstSeatClass: '',
    secondSeatClass: '',
  };

  componentWillReceiveProps(props) {
    this.setState({
      selectedBooking: props.selectedBooking,
      time: props.selectedBooking.time,
      date: props.selectedBooking.date,
    });
    props.selectedBooking.time === '18.00'
      ? this.setState({
          firstSeatActived: 'activeTime',
          secondSeatActived: '',
        })
      : this.setState({
          firstSeatActived: '',
          secondSeatActived: 'activeTime',
        });
  }

  closeUpdateDiv = () => {
    this.props.closeUpdateDiv();
  };

  getDate = date => {
    this.setState({
      firstSeatActived: '',
      secondSeatActived: '',
    });
    this.setState({ date: date });
    console.log(date);
  };

  setTime = event => {
    event.preventDefault();
    this.setState({ time: event.target.value });
    event.target.value === '18.00'
      ? this.setState({
          firstSeatActived: 'activeTime',
          secondSeatActived: '',
        })
      : this.setState({
          firstSeatActived: '',
          secondSeatActived: 'activeTime',
        });
  };

  updateThisBooking = (values, bookingId) => {
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

  isFirstSeatAvailable = seat => {
    this.setState({ firstSeatClass: seat });
  };

  isSecondSeatAvailable = seat => {
    this.setState({ secondSeatClass: seat });
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
              <option key={i} value={i + 1} selected>
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
        {this.props.updateDivClass === 'show' ? (
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
                  <Datepicker
                    getDate={this.getDate}
                    seat1Class={this.isFirstSeatAvailable}
                    seat2Class={this.isSecondSeatAvailable}
                    selectedDate={this.state.date}
                  />
                </div>
                <div className="col-md-4">
                  <form
                    onSubmit={event => {
                      const values = {
                        numOfGuests: event.target.guests.value,
                        time: this.state.time,
                        date: this.state.date,
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
                    <p>Number of Guest(s)</p>
                    {this.selectNumOfGuests()}
                    <div id="availableTimes">
                      <p>Available times:</p>
                      <Button
                        className={
                          this.state.firstSeatClass +
                          ' ' +
                          this.state.firstSeatActived
                        }
                        onClick={this.setTime}
                        value={'18.00'}
                        innerText={'18.00'}
                      />
                      <Button
                        className={
                          this.state.secondSeatClass +
                          ' ' +
                          this.state.secondSeatActived
                        }
                        onClick={this.setTime}
                        value={'21.00'}
                        innerText={'21.00'}
                      />
                    </div>

                    <p>{this.state.updateThisCustomersBookedTime}</p>
                    <div id="adminUpdateButtons">
                      <input
                        onClick={this.closeUpdateDiv}
                        type="button"
                        value="Cancel"
                      />
                      <input type="submit" form="updateBox" value="Update" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default AdminUpdateBookings;
