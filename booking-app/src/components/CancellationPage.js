import React, { Component } from 'react';
import { withRouter } from 'react-router';
import ErrorMessage from './ErrorMessage.js';
import ErrorMessageContent from './parts/ErrorMessageContent.js';

class CancellationPage extends Component {
  state = {
    globalErrorMessage: false,
    booking: null,
    isBookingMissing: true,
    isCancellationConfirmed: false,
  };

  deleteBooking = () => {
    fetch(`/api/booking/${parseInt(this.props.match.params.id, 10)}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(() => {
        this.setState({ isCancellationConfirmed: true });
      })
      .catch(err => {
        this.setState({ globalErrorMessage: true });
      });
  };

  componentDidMount() {
    fetch(`/api/booking/${parseInt(this.props.match.params.id, 10)}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(res => {
        if (!res.ok) {
          return { isBookingMissing: true };
        }
        return res.json().then(booking => ({
          booking,
          isBookingMissing: false,
        }));
      })
      .then(bookingState => {
        this.setState(bookingState);
      })
      .catch(error => {
        this.setState({ globalErrorMessage: true });
      });
  }

  closeGlobalErrorMessage = () => {
    this.setState({ globalErrorMessage: false });
  };

  render() {
    return (
      <div className="wrapper">
        {this.state.globalErrorMessage === true ? (
          <ErrorMessage element={document.getElementById('modal')}>
            <ErrorMessageContent
              closeGlobalErrorMessage={this.closeGlobalErrorMessage}
            />
          </ErrorMessage>
        ) : null}
        {!this.state.isCancellationConfirmed && !this.state.isBookingMissing ? (
          <div className="container margin-auto ">
            <h2 className="heading col-12">
              Manage booking #{this.props.match.params.id}
            </h2>
            <div class="underline" />
            <div>
              <div className="booking-details col-sm-12 col-lg-8">
                <h3>Booking details</h3>
                <p>
                  <span>
                    {this.state.booking.firstname +
                      ' ' +
                      this.state.booking.lastname}
                  </span>
                </p>
                <p>{this.state.booking.num_of_guests} Guest(s)</p>
                <p>
                  <span>
                    {this.state.booking.time + ' | ' + this.state.booking.date}
                  </span>
                </p>
              </div>
              <div className="btn-container">
                <button
                  onClick={this.deleteBooking}
                  type="button"
                  className="btn btn-primary btn-lg"
                >
                  Cancel booking
                </button>
              </div>
            </div>
          </div>
        ) : this.state.isCancellationConfirmed ? (
          <div className="wrapper container">
            <i
              className="fa fa-check-circle-o fa-5x row-12"
              aria-hidden="true"
            />
            <h2 className="heading row-12">Your booking has been cancelled</h2>
            <p className="text-center">
              A confirmation has been sent to {this.state.booking.email}
            </p>
          </div>
        ) : this.state.isBookingMissing ? (
          <div className="wrapper margins-normal margin-auto container">
            <h2 className="heading col-12">Booking not found</h2>
            <div className="text-center">
              <p className="col-12">
                Your booking might allready been cancelled.
              </p>
              <p className="col-12">
                Contact us at 070 000 00 00 or contact@lelious.se if you have
                any trouble with your booking.
              </p>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default withRouter(CancellationPage);
