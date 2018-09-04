import React, { Component } from 'react';
import Datepicker from '../Datepicker.js';
import ErrorMessage from '../ErrorMessage.js';
import ErrorMessageContent from '../parts/ErrorMessageContent.js';

class AdminUpdateBookings extends Component {
  state = {
    globalErrorMessage: false,
    time: '',
    numOfGuests: '',
    date: '',
  };

  setTime = time => {
    this.setState({ time });
  };

  setAmountOfGuests = amount => {
    this.setState({ numOfGuests: amount });
  };

  closeUpdateDiv = () => {
    this.props.closeUpdateDiv();
  };

  getDate = date => {
    this.setState({ date });
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
      .then(() => {
        this.closeUpdateDiv();
      })
      .catch(error => {
        this.setState({ globalErrorMessage: true });
      });
  };

  closeGlobalErrorMessage = () => {
    this.setState({ globalErrorMessage: false });
  };

  render() {
    return (
      <div
        id="adminUpdateDiv"
        className={this.props.updateDivClass + ' container'}
      >
        {this.state.globalErrorMessage === true ? (
          <ErrorMessage element={document.getElementById('modal')}>
            <ErrorMessageContent
              closeGlobalErrorMessage={this.closeGlobalErrorMessage}
            />
          </ErrorMessage>
        ) : null}
        <div id="customersBookingWrapper" className="row">
          <div id="customersBookingDetails" className="col-md-4">
            <h3>Details</h3>
            <p>
              <span>Name</span>
            </p>
            <p>
              {this.props.selectedBookingFirstname +
                ' ' +
                this.props.selectedBookingLastname}
            </p>
            <p>
              <span>Phone</span>
            </p>
            <p>{this.props.selectedBookingPhone}</p>
            <p>
              <span>Email</span>
            </p>
            <p>{this.props.selectedBookingEmail}</p>
            <p>
              <span>Number of Guests</span>
            </p>
            <p>{this.props.selectedBookingNumOfGuests}</p>
            <p>
              <span>At:</span>
            </p>
            <p>
              {this.props.selectedBookingTime +
                ' | ' +
                this.props.selectedBookingDate}
            </p>
          </div>

          <div id="customersUpdateDetails" className="col-md-8">
            <h3>Update details</h3>
            <div className="row">
              <div className="col-md-8">
                <Datepicker
                  getDate={this.getDate}
                  setTime={this.setTime}
                  seat1Class={this.isFirstSeatAvailable}
                  seat2Class={this.isSecondSeatAvailable}
                  setAmountOfGuests={this.setAmountOfGuests}
                />
              </div>
              <div className="col-md-4">
                <form
                  onSubmit={event => {
                    const values = {
                      numOfGuests: this.state.numOfGuests,
                      time: this.state.time,
                      date: this.state.date,
                    };
                    event.preventDefault();
                    this.updateThisBooking(
                      values,
                      this.props.selectedBookingId
                    );
                  }}
                  name="updateBooking"
                  id="updateBox"
                  className={this.state.updateBoxClass}
                >
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
      </div>
    );
  }
}

export default AdminUpdateBookings;
