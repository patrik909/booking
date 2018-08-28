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
        <p>{'Patrik Eriksson'}</p>
        <p>{'patrik@patrik.se'}</p>
        <p>{'070 00 000 00'}</p>
      </div>
      <div id="submitBookingButtons" className="row">
        <div id="cancelBooking" className="col-6">
          <Button type="submit" onClick={props.cancelBooking}>
            Cancel
          </Button>
        </div>
        <div id="submitDetails" className="col-6">
          <Button type="submit" onClick={props.submitGuestDetails}>
            Book
          </Button>
        </div>
      </div>
    </div>
  );
}

export default BookingSubmitBooking;
