import React, { Component } from 'react';
import { withRouter } from 'react-router';

class CancellationPage extends Component {
  state = {
    booking: [],
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
      .then(booking => {
        this.setState({ isCancellationConfirmed: true });
      })
      .catch(err => {
        console.log(err, 'error');
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
      .then(res => res.json())
      .then(booking => {
        this.setState({ booking });
      })
      .catch(error => {
        console.log(error, 'error');
      });
  }

  render() {
    return (
      <div className="cancellation-wrapper">
        {!this.state.isCancellationConfirmed ? (
          <div className="cancellation-inner-wrapper">
            <h2 className="cancellation-header">
              Mange booking #{this.props.match.params.id}
            </h2>
            <div>
              <div className="booking-details">
                <h3>Booking details</h3>
                <p>
                  {this.state.booking.firstname +
                    ' ' +
                    this.state.booking.lastname}
                </p>
                <p>{this.state.booking.num_of_guests} people</p>
                <p>
                  {this.state.booking.date + ', ' + this.state.booking.time}
                  PM
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
        ) : (
          <div className="confirmation-wrapper">
            <i className="fa fa-check-circle-o fa-5x" aria-hidden="true" />
            <h3>Your booking has been cancelled</h3>
            <p>A confirmation has been sent to {this.state.booking.email}</p>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(CancellationPage);
