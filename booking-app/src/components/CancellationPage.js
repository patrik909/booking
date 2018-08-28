import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router';

class CancellationPage extends Component {
  state = {
    booking: [],
    error: false,
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
        console.log(booking.message);
        if (booking.message === 'booking not found') {
          this.setState({ error: true });
        }
        this.setState({ booking });
      })
      .catch(error => {
        console.log(error, 'error');
      });
  }

  render() {
    return (
      <div className="wrapper">
        {!this.state.isCancellationConfirmed && !this.state.error ? (
          <div className="container margin-auto ">
            <h2 className="heading col-12">
              Manage booking #{this.props.match.params.id}
            </h2>
            <div>
              <div className="booking-details col-sm-12 col-lg-8">
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
        ) : this.state.error ? (
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
