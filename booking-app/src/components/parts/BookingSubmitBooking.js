import React from 'react';
import { Button } from 'reactstrap';

function BookingSubmitBooking(props) {
  return (
    <div id="submitBooking">
      <h2>Your details & GDPR</h2>
      <div className="underline col-12" />
      <div className="col-12">
        <p id="gdprMessage">
          We're storing your personal details to enhance your experience, when
          pressing <span className="book">Book</span> you give us the right to
          save the information below:
        </p>
      </div>
      <div id="gdprDetails" className="col-12">
        <p>{props.name}</p>
        <p>{props.email}</p>
        <p>{props.phone}</p>
      </div>
      <div id="submitBookingButtons" className="row">
        <div className="col-6 backButtonBooking">
          <Button type="submit" onClick={props.cancelBooking}>
            Cancel
          </Button>
        </div>
        <div className="col-6 nextButtonBooking">
          <Button type="submit" onClick={props.submitBooking}>
            Book
          </Button>
        </div>
      </div>
    </div>
  );
}

export default BookingSubmitBooking;
