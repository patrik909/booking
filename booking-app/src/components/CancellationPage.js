import React, { Component } from 'react';
import { withRouter } from 'react-router';

class CancellationPage extends Component {
  state = {
    booking: [],
    isCancellationConfirmed: false,
  };

  seeBookingDetails = event => {
    fetch(`api/booking/${event.target.value}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(res => res.json())
      .then(booking => {
        console.log(booking);
      })
      .catch(error => {
        console.log(error, 'error');
      });
  };

  deleteBooking = event => {
    fetch(`api/booking/${event.target.value}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(booking => {
        this.setState({ isCancellationConfirmed: true });
      })
      .catch(() => {
        console.log('error');
      });
  };

  render() {
    return (
      <div className="cancellation-wrapper">
        {!this.state.isCancellationConfirmed ? (
          <React.Fragment>
            <h2>Booking #{this.props.match.params.id}</h2>
            <div className="btn-wrapper">
              <button
                value={parseInt(this.props.match.params.id, 10)}
                onClick={this.deleteBooking}
                type="button"
                className="btn btn-primary btn-lg"
              >
                Cancel booking
              </button>
              <button
                type="button"
                className="btn btn-secondary btn-lg"
                onClick={this.seeBookingDetails}
                value={parseInt(this.props.match.params.id, 10)}
              >
                See booking details
              </button>
            </div>
          </React.Fragment>
        ) : (
          <div className="confirmation-wrapper">
            <i className="fa fa-check-circle-o fa-5x" aria-hidden="true" />
            <h3>Your booking has been cancelled</h3>
            <p>You are always welcome to make a new reservation.</p>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(CancellationPage);
