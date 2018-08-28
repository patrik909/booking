import React from 'react';

function BookingSubmitted(props) {
  return (
    <div id="submittedBooking">
      <h2>Thank you, {props.firstName}</h2>
      <p>
        We've sent you an e-mail with all the information about your booking!
      </p>
    </div>
  );
}

export default BookingSubmitted;
